/**
 * generateStories.js
 *
 * Auto-generates Storybook CSF3 stories from Lit component source files.
 * Parses @property decorators to extract:
 *   - Property name + type
 *   - Union type options (select controls)
 *   - Default values
 *   - JSDoc @fires events
 *
 * Usage: node scripts/generateStories.js
 */

const fs   = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../src/components');
const STORIES_DIR    = path.join(__dirname, '../src/stories');

if (!fs.existsSync(STORIES_DIR)) {
  fs.mkdirSync(STORIES_DIR, { recursive: true });
}

// ─── Parsers ─────────────────────────────────────────────────────────────────

/**
 * Extract all @property declarations from Lit component source.
 * Returns array of { name, type, options?, defaultValue? }
 */
function extractProperties(src) {
  const props = [];

  // Matches patterns like:
  //   @property({ type: String })
  //   propName: 'a' | 'b' | 'c' = 'a';
  //
  //   @property({ type: Boolean })
  //   propName = false;
  const blockRegex =
    /@property\(\{[^}]*type:\s*(Boolean|String|Number)[^}]*\}\)\s*\n?\s*(\w+)(?::\s*([^=\n;]+))?(?:\s*=\s*([^;\n]+))?/g;

  let match;
  while ((match = blockRegex.exec(src)) !== null) {
    const [, litType, name, typeAnnotation, rawDefault] = match;
    const annotation = typeAnnotation?.trim() ?? '';
    const defaultRaw = rawDefault?.trim() ?? '';

    // Check if type annotation is a union of string literals
    const unionMatches = annotation.match(/'([^']+)'/g);

    if (unionMatches && unionMatches.length > 1) {
      const options      = unionMatches.map(v => v.replace(/'/g, ''));
      // Default is first option unless explicitly set
      const defaultVal   = defaultRaw.replace(/'/g, '') || options[0];
      props.push({ name, type: 'select', options, defaultValue: defaultVal });
    } else if (litType === 'Boolean') {
      const defaultVal = defaultRaw === 'true' ? true : false;
      props.push({ name, type: 'boolean', defaultValue: defaultVal });
    } else if (litType === 'Number') {
      const defaultVal = defaultRaw !== '' ? Number(defaultRaw) : 0;
      props.push({ name, type: 'number', defaultValue: defaultVal });
    } else {
      // String — strip quotes from default
      const defaultVal = defaultRaw.replace(/['"]/g, '') || '';
      props.push({ name, type: 'text', defaultValue: defaultVal });
    }
  }

  return props;
}

/**
 * Extract @fires events from JSDoc comments.
 * Returns array of event name strings.
 */
function extractEvents(src) {
  const events = [];
  const eventRegex = /@fires\s+([\w:.-]+)/g;
  let match;
  while ((match = eventRegex.exec(src)) !== null) {
    events.push(match[1]);
  }
  return events;
}

/**
 * Extract the tag name from @customElement('org-xxx')
 */
function extractTagName(src) {
  const match = src.match(/@customElement\(['"]([^'"]+)['"]\)/);
  return match ? match[1] : null;
}

/**
 * Extract the class name
 */
function extractClassName(src) {
  const match = src.match(/export class (\w+)/);
  return match ? match[1] : null;
}

// ─── Code generators ─────────────────────────────────────────────────────────

function generateArgTypes(props, events) {
  const lines = [];

  props.forEach(prop => {
    if (prop.type === 'select') {
      lines.push(`    ${prop.name}: {
      control: 'select',
      options: ${JSON.stringify(prop.options)},
      description: 'Variant options',
    },`);
    } else if (prop.type === 'boolean') {
      lines.push(`    ${prop.name}: { control: 'boolean' },`);
    } else if (prop.type === 'number') {
      lines.push(`    ${prop.name}: { control: 'number' },`);
    } else {
      lines.push(`    ${prop.name}: { control: 'text' },`);
    }
  });

  events.forEach(event => {
    const safeName = event.replace(/:/g, '-');
    lines.push(`    'on${safeName.charAt(0).toUpperCase() + safeName.slice(1)}': { action: '${event}' },`);
  });

  return lines.join('\n');
}

function generateArgs(props) {
  return props
    .map(prop => {
      const val = prop.type === 'text'
        ? `'${prop.defaultValue}'`
        : JSON.stringify(prop.defaultValue);
      return `    ${prop.name}: ${val},`;
    })
    .join('\n');
}

function generateEventListeners(events) {
  return events
    .map(event => {
      const safeName = event.replace(/:/g, '-');
      const handlerName = `on${safeName.charAt(0).toUpperCase() + safeName.slice(1)}`;
      return `  el.addEventListener('${event}', args['${handlerName}'] ?? (() => {}));`;
    })
    .join('\n');
}

function generatePropAssignments(props) {
  return props
    .map(p => `  if (args.${p.name} !== undefined) el.${p.name} = args.${p.name};`)
    .join('\n');
}

// ─── Story generator ─────────────────────────────────────────────────────────

function generateStoryFile(componentName, tagName, className, props, events) {
  const argTypes        = generateArgTypes(props, events);
  const playgroundArgs  = generateArgs(props);
  const propAssignments = generatePropAssignments(props);
  const eventListeners  = generateEventListeners(events);

  // Build variant stories: one per 'variant' or first select prop
  const variantProp = props.find(p => p.type === 'select' && p.name === 'variant');
  const variantStories = variantProp
    ? variantProp.options.map(opt => `
export const ${opt.charAt(0).toUpperCase() + opt.slice(1)}: Story = {
  args: { ...Playground.args, variant: '${opt}' },
  name: '${opt.charAt(0).toUpperCase() + opt.slice(1)}',
};`).join('\n')
    : '';

  return `/**
 * Auto-generated story for <${tagName}>
 * Generated by scripts/generateStories.js — do not edit manually.
 * To customise, create ${componentName}.stories.custom.ts alongside this file.
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/${componentName}.js';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/${className}',
  component: '${tagName}',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Auto-generated story. Add a \`${componentName}.mdx\` file for full docs.',
      },
    },
  },
  argTypes: {
${argTypes}
  },
  render: (args) => {
    const el = document.createElement('${tagName}') as any;
${propAssignments}
${eventListeners}
    el.textContent = el.textContent || '${className}';
    return el;
  },
};

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
${playgroundArgs}
  },
};

export const Disabled: Story = {
  args: { ...Playground.args, disabled: true },
};
${variantStories}
`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const files = fs.readdirSync(COMPONENTS_DIR).filter(f => f.endsWith('.ts'));
let generated = 0;

files.forEach(file => {
  const componentName = file.replace('.ts', '');
  const filePath      = path.join(COMPONENTS_DIR, file);
  const src           = fs.readFileSync(filePath, 'utf8');

  const tagName   = extractTagName(src);
  const className = extractClassName(src);

  if (!tagName || !className) {
    console.warn(`⚠️  Skipping ${file}: could not find @customElement or export class`);
    return;
  }

  const props  = extractProperties(src);
  const events = extractEvents(src);

  const storyContent  = generateStoryFile(componentName, tagName, className, props, events);
  const storyFilePath = path.join(STORIES_DIR, `${componentName}.stories.ts`);

  fs.writeFileSync(storyFilePath, storyContent, 'utf8');
  console.log(`✅  ${componentName}.stories.ts — ${props.length} props, ${events.length} events`);
  generated++;
});

console.log(`\n🎉  Generated ${generated} story file(s) in src/stories/`);
