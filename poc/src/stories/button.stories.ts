import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/button.js';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Button',
  component: 'org-button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **\`<org-button>\`** component triggers an action or event when clicked.

### Features
- 4 variants — **primary**, **secondary**, **danger**, **ghost**
- 3 sizes — **small**, **medium**, **large**
- **Loading** state with a built-in spinner
- **Disabled** state
- **Icon** slot for leading icons
- Accessible: keyboard-friendly and focus-visible support

### Installation
\`\`\`html
<script type="module">
  import 'enterprise-ui-platform';
</script>

<org-button variant="primary">Submit</org-button>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
      description: 'Visual variant of the button',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
      table: { defaultValue: { summary: 'medium' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button shows a loading spinner',
      table: { defaultValue: { summary: 'false' } },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type attribute',
      table: { defaultValue: { summary: 'button' } },
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
  },
};

export default meta;

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    type: 'button',
    label: 'Click me',
  },
  render: (args) => html`
    <org-button
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      type="${args.type}"
    >${args.label}</org-button>
  `,
};

// ── Variants ──────────────────────────────────────────────────────────────────

export const Primary: Story = {
  name: 'Primary',
  render: () => html`<org-button variant="primary">Primary Button</org-button>`,
};

export const Secondary: Story = {
  name: 'Secondary',
  render: () => html`<org-button variant="secondary">Secondary Button</org-button>`,
};

export const Danger: Story = {
  name: 'Danger',
  render: () => html`<org-button variant="danger">Danger Button</org-button>`,
};

export const Ghost: Story = {
  name: 'Ghost',
  render: () => html`<org-button variant="ghost">Ghost Button</org-button>`,
};

// ── All Variants ──────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <org-button variant="primary">Primary</org-button>
      <org-button variant="secondary">Secondary</org-button>
      <org-button variant="danger">Danger</org-button>
      <org-button variant="ghost">Ghost</org-button>
    </div>
  `,
};

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Sizes',
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <org-button size="small">Small</org-button>
      <org-button size="medium">Medium</org-button>
      <org-button size="large">Large</org-button>
    </div>
  `,
};

// ── Loading ───────────────────────────────────────────────────────────────────

export const Loading: Story = {
  name: 'Loading',
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <org-button variant="primary" loading>Saving...</org-button>
      <org-button variant="secondary" loading>Loading</org-button>
      <org-button variant="danger" loading>Deleting</org-button>
    </div>
  `,
};

// ── Disabled ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  name: 'Disabled',
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <org-button variant="primary" disabled>Primary</org-button>
      <org-button variant="secondary" disabled>Secondary</org-button>
      <org-button variant="danger" disabled>Danger</org-button>
      <org-button variant="ghost" disabled>Ghost</org-button>
    </div>
  `,
};

// ── With Icon ─────────────────────────────────────────────────────────────────

export const WithIcon: Story = {
  name: 'With Icon',
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <org-button variant="primary">
        <span slot="icon">🔍</span>
        Search
      </org-button>
      <org-button variant="secondary">
        <span slot="icon">📁</span>
        Upload
      </org-button>
      <org-button variant="danger">
        <span slot="icon">🗑️</span>
        Delete
      </org-button>
    </div>
  `,
};
