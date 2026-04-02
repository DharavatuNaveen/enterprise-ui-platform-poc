#!/usr/bin/env node
/**
 * scaffold.js — Component Scaffolder
 *
 * Usage:
 *   node scripts/scaffold.js <name> [options]
 *
 * Examples:
 *   node scripts/scaffold.js card
 *   node scripts/scaffold.js data-table --props "rows:Array,loading:Boolean,selectable:Boolean"
 *   node scripts/scaffold.js badge --props "variant:select(info|success|warning|danger),size:select(small|medium|large),label:String"
 *
 * What it generates:
 *   src/components/<name>.ts       — Full Lit component
 *   src/stories/<name>.stories.ts  — CSF3 Storybook story
 *   Updates src/index.ts           — Auto-exports the new component
 */

const fs   = require('fs');
const path = require('path');

// ─── CLI parsing ──────────────────────────────────────────────────────────────

const args     = process.argv.slice(2);
const rawName  = args[0];

if (!rawName || rawName.startsWith('--')) {
  console.error(`
❌  Usage: node scripts/scaffold.js <component-name> [--props "name:Type,..."]

Examples:
  node scripts/scaffold.js card
  node scripts/scaffold.js badge --props "variant:select(info|success|warning|danger),label:String"
  node scripts/scaffold.js data-table --props "rows:Array,loading:Boolean"
`);
  process.exit(1);
}

// Parse --props flag
const propsFlag = (() => {
  const i = args.indexOf('--props');
  return i !== -1 ? args[i + 1] : '';
})();

// ─── Name utilities ───────────────────────────────────────────────────────────

/** "data-table" → "DataTable" */
function toPascalCase(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

/** "data-table" → "org-data-table" */
function toTagName(str) {
  return `org-${str.toLowerCase()}`;
}

// ─── Prop parsing ─────────────────────────────────────────────────────────────

/**
 * Parse --props string into structured array.
 * Supports:
 *   name:String            → text input, default ''
 *   disabled:Boolean       → boolean toggle, default false
 *   count:Number           → number input, default 0
 *   variant:select(a|b|c)  → select control, default first option
 */
function parseProps(propsStr) {
  if (!propsStr) return [];

  return propsStr.split(',').map(raw => {
    raw = raw.trim();
    const colonIdx = raw.indexOf(':');
    if (colonIdx === -1) return { name: raw, type: 'String', litType: 'String', defaultValue: "''", controlType: 'text' };

    const name = raw.slice(0, colonIdx).trim();
    const typeStr = raw.slice(colonIdx + 1).trim();

    // select(a|b|c)
    const selectMatch = typeStr.match(/^select\(([^)]+)\)$/i);
    if (selectMatch) {
      const options = selectMatch[1].split('|').map(s => s.trim());
      return {
        name,
        type: 'String',
        litType: 'String',
        isSelect: true,
        options,
        defaultValue: `'${options[0]}'`,
        controlType: 'select',
      };
    }

    const t = typeStr.toLowerCase();
    if (t === 'boolean') return { name, type: 'Boolean', litType: 'Boolean', defaultValue: 'false', controlType: 'boolean' };
    if (t === 'number')  return { name, type: 'Number',  litType: 'Number',  defaultValue: '0',     controlType: 'number' };
    if (t === 'array')   return { name, type: 'Array',   litType: 'Array',   defaultValue: '[]',    controlType: 'object' };
    return                      { name, type: 'String',  litType: 'String',  defaultValue: "''",    controlType: 'text' };
  });
}

// ─── Code generators ──────────────────────────────────────────────────────────

function generatePropertyDeclarations(props) {
  if (props.length === 0) return '  // Add your @property declarations here';
  return props.map(p => {
    if (p.isSelect) {
      const union = p.options.map(o => `'${o}'`).join(' | ');
      return `  @property({ type: ${p.litType} })\n  ${p.name}: ${union} = ${p.defaultValue};`;
    }
    if (p.litType === 'Array') {
      return `  @property({ type: Array })\n  ${p.name}: unknown[] = [];`;
    }
    return `  @property({ type: ${p.litType} })\n  ${p.name} = ${p.defaultValue};`;
  }).join('\n\n');
}

function generateCssTokenBlock(name) {
  return `
   * @cssprop --org-${name}-bg      - Background color
   * @cssprop --org-${name}-color   - Text color
   * @cssprop --org-${name}-radius  - Border radius`;
}

function generateComponentFile(name, className, tagName, props) {
  const hasProps      = props.length > 0;
  const propDecls     = generatePropertyDeclarations(props);
  const cssTokenBlock = generateCssTokenBlock(name);

  // Build a simple render that shows all prop values
  const propDisplay = props.length > 0
    ? props.map(p => `          <div><strong>${p.name}:</strong> \${this.${p.name}}</div>`).join('\n')
    : `          <slot></slot>`;

  return `import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * ${className} component.
 *
 * @element ${tagName}
 *
 * @slot - Default content slot
 * @csspart container - Outer wrapper element
 *${generateCssTokenBlock(name)}
 *
 * @fires ${tagName}:change - Fired when state changes, detail: { value }
 */
@customElement('${tagName}')
export class ${className} extends LitElement {

  // ── Properties ──────────────────────────────────────────────────────────────

${propDecls}

  @property({ type: Boolean, reflect: true })
  disabled = false;

  // ── Internal state ───────────────────────────────────────────────────────────

  @state() private _active = false;

  // ── Styles ───────────────────────────────────────────────────────────────────

  static styles = css\`
    :host {
      display: block;
      font-family: var(--org-font-family, sans-serif);
    }

    :host([disabled]) {
      opacity: 0.5;
      pointer-events: none;
    }

    .container {
      background: var(--org-${name}-bg, var(--org-color-surface, #fff));
      color: var(--org-${name}-color, var(--org-color-text, #212121));
      border-radius: var(--org-${name}-radius, var(--org-radius-md, 6px));
      border: 1px solid var(--org-color-border, #e0e0e0);
      padding: var(--org-space-4, 16px);
      transition: all var(--org-transition-normal, 0.2s ease);
    }

    .container:focus-visible {
      outline: 2px solid var(--org-color-primary, #1976d2);
      outline-offset: 2px;
    }
  \`;

  // ── Lifecycle ────────────────────────────────────────────────────────────────

  connectedCallback() {
    super.connectedCallback();
    // component mounted
  }

  // ── Event handlers ───────────────────────────────────────────────────────────

  private _handleChange(value: unknown) {
    if (this.disabled) return;
    this.dispatchEvent(new CustomEvent('${tagName}:change', {
      bubbles: true,
      composed: true,
      detail: { value },
    }));
  }

  // ── Render ───────────────────────────────────────────────────────────────────

  render() {
    return html\`
      <div class="container" part="container">
        <!-- TODO: implement ${className} UI -->
${propDisplay}
        <slot></slot>
      </div>
    \`;
  }
}

declare global {
  interface HTMLElementTagNameMap { '${tagName}': ${className}; }
}
`;
}

function generateStoryFile(name, className, tagName, props) {
  const argTypes = props.map(p => {
    if (p.isSelect) {
      return `    ${p.name}: { control: 'select', options: ${JSON.stringify(p.options)} },`;
    }
    if (p.controlType === 'boolean') return `    ${p.name}: { control: 'boolean' },`;
    if (p.controlType === 'number')  return `    ${p.name}: { control: 'number' },`;
    if (p.controlType === 'object')  return `    ${p.name}: { control: 'object' },`;
    return `    ${p.name}: { control: 'text' },`;
  }).join('\n');

  const defaultArgs = props.map(p => {
    const val = p.controlType === 'text' ? p.defaultValue : p.defaultValue;
    return `    ${p.name}: ${val},`;
  }).join('\n');

  const propAssignments = props.map(p =>
    `  if (args.${p.name} !== undefined) el.${p.name} = args.${p.name};`
  ).join('\n');

  // One story per select option for the "variant" prop (or first select)
  const selectProp  = props.find(p => p.isSelect && (p.name === 'variant' || p.name === 'type'));
  const variantStories = selectProp
    ? selectProp.options.map(opt => `
export const ${toPascalCase(opt)}: Story = {
  name: '${opt}',
  args: { ...Playground.args, ${selectProp.name}: '${opt}' },
};`).join('\n')
    : '';

  return `/**
 * Auto-generated story for <${tagName}>
 * Generated by: node scripts/scaffold.js ${name}
 * Last generated: ${new Date().toISOString().split('T')[0]}
 *
 * To customise without losing auto-gen: create ${name}.stories.custom.ts
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import '../components/${name}.js';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/${className}',
  component: '${tagName}',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '${className} component. Edit \`src/components/${name}.ts\` to implement.',
      },
    },
  },
  argTypes: {
${argTypes}
    disabled: { control: 'boolean' },
    'on${className}Change': { action: '${tagName}:change' },
  },
  render: (args) => {
    const el = document.createElement('${tagName}') as any;
${propAssignments}
    el.disabled = args.disabled ?? false;
    el.addEventListener('${tagName}:change', args['on${className}Change'] ?? (() => {}));
    el.textContent = el.textContent || '${className}';
    return el;
  },
};

export default meta;

export const Playground: Story = {
  name: 'Playground',
  args: {
${defaultArgs}
    disabled: false,
  },
};

export const DisabledState: Story = {
  name: 'Disabled',
  args: { ...Playground.args, disabled: true },
};
${variantStories}
`;
}

// ─── Index updater ────────────────────────────────────────────────────────────

function updateIndex(indexPath, className, name) {
  const exportLine = `export { ${className} } from './components/${name}.js';`;

  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(indexPath, `// enterprise-ui-platform exports\n${exportLine}\n`);
    return 'created';
  }

  const content = fs.readFileSync(indexPath, 'utf8');
  if (content.includes(exportLine)) return 'already-exported';

  fs.writeFileSync(indexPath, content.trimEnd() + `\n${exportLine}\n`);
  return 'appended';
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const name      = rawName.toLowerCase().replace(/^org-/, ''); // strip prefix if passed
  const className = toPascalCase(name);
  const tagName   = toTagName(name);
  const props     = parseProps(propsFlag);

  const root          = path.join(__dirname, '..');
  const componentPath = path.join(root, 'src', 'components', `${name}.ts`);
  const storyPath     = path.join(root, 'src', 'stories',    `${name}.stories.ts`);
  const indexPath     = path.join(root, 'src', 'index.ts');

  // Guard: don't overwrite existing component
  if (fs.existsSync(componentPath)) {
    console.error(`\n❌  Component already exists: src/components/${name}.ts`);
    console.error(`    Delete it first if you want to re-scaffold.\n`);
    process.exit(1);
  }

  // Ensure directories exist
  fs.mkdirSync(path.dirname(componentPath), { recursive: true });
  fs.mkdirSync(path.dirname(storyPath),     { recursive: true });

  // Write files
  fs.writeFileSync(componentPath, generateComponentFile(name, className, tagName, props), 'utf8');
  fs.writeFileSync(storyPath,     generateStoryFile(name, className, tagName, props),     'utf8');
  const indexResult = updateIndex(indexPath, className, name);

  // Summary
  console.log(`
╔══════════════════════════════════════════════════════╗
║  ✅  ${className} scaffolded successfully              
╠══════════════════════════════════════════════════════╣
║  📄  src/components/${name}.ts
║  📖  src/stories/${name}.stories.ts
║  📦  src/index.ts  (${indexResult})
╠══════════════════════════════════════════════════════╣
║  Tag name   : <${tagName}>
║  Class name : ${className}
║  Props      : ${props.length > 0 ? props.map(p => p.name).join(', ') : 'none (add with --props)'}
╠══════════════════════════════════════════════════════╣
║  Next steps:
║  1. Open src/components/${name}.ts
║  2. Implement the render() method
║  3. npm run storybook  →  view at localhost:6006
╚══════════════════════════════════════════════════════╝
`);
}

main();
