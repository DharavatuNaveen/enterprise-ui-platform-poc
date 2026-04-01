import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import '../components/search.js';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Search',
  component: 'org-search',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **\`<org-search>\`** component is a specialized search input with built-in icon, clear button, and loading state.

### Features
- **Search icon** — built-in SVG search icon (no external dependencies)
- **Clear button** — appears when input has a value; press **Escape** to clear
- **Loading state** — shows a spinner while searching
- **Debounced** — configurable debounce delay for search events
- **Enter to submit** — fires \`org-search:submit\` on Enter key
- 3 sizes — small, medium, large

### Events
| Event | Detail | Description |
|-------|--------|-------------|
| \`org-search:search\` | \`{ value }\` | Debounced — fires after user stops typing |
| \`org-search:submit\` | \`{ value }\` | Fires immediately on Enter key |
| \`org-search:clear\`  | — | Fires when clear button is clicked |

### Usage
\`\`\`html
<org-search placeholder="Search vendors..."></org-search>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    value: { control: 'text', description: 'Current search value' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the search input',
      table: { defaultValue: { summary: 'medium' } },
    },
    disabled: { control: 'boolean', description: 'Whether the search is disabled' },
    loading: { control: 'boolean', description: 'Whether to show loading spinner' },
    debounce: {
      control: 'number',
      description: 'Debounce delay in milliseconds',
      table: { defaultValue: { summary: '300' } },
    },
  },
};

export default meta;

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  args: {
    value: '',
    placeholder: 'Search...',
    size: 'medium',
    disabled: false,
    loading: false,
    debounce: 300,
  },
  render: (args) => html`
    <div style="width: 360px;">
      <org-search
        .value="${args.value}"
        placeholder="${args.placeholder || nothing}"
        size="${args.size}"
        ?disabled="${args.disabled}"
        ?loading="${args.loading}"
        debounce="${args.debounce}"
        @org-search:search="${(e: CustomEvent) => console.log('search:', e.detail)}"
        @org-search:submit="${(e: CustomEvent) => console.log('submit:', e.detail)}"
        @org-search:clear="${() => console.log('cleared')}"
      ></org-search>
    </div>
  `,
};

// ── Default (empty) ───────────────────────────────────────────────────────────

export const Default: Story = {
  name: 'Default',
  render: () => html`
    <div style="width: 360px;">
      <org-search placeholder="Search vendors..."></org-search>
    </div>
  `,
};

// ── With Value (shows clear button) ───────────────────────────────────────────

export const WithValue: Story = {
  name: 'With Value',
  render: () => html`
    <div style="width: 360px;">
      <org-search value="enterprise components" placeholder="Search..."></org-search>
    </div>
  `,
};

// ── Loading ───────────────────────────────────────────────────────────────────

export const Loading: Story = {
  name: 'Loading',
  render: () => html`
    <div style="width: 360px;">
      <org-search value="searching..." loading placeholder="Search..."></org-search>
    </div>
  `,
};

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Sizes',
  render: () => html`
    <div style="width: 360px; display: flex; flex-direction: column; gap: 16px;">
      <org-search size="small" placeholder="Small search"></org-search>
      <org-search size="medium" placeholder="Medium search"></org-search>
      <org-search size="large" placeholder="Large search"></org-search>
    </div>
  `,
};

// ── Disabled ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  name: 'Disabled',
  render: () => html`
    <div style="width: 360px;">
      <org-search disabled placeholder="Cannot search"></org-search>
    </div>
  `,
};

// ── Custom Placeholder ────────────────────────────────────────────────────────

export const CustomPlaceholder: Story = {
  name: 'Custom Placeholder',
  render: () => html`
    <div style="width: 360px;">
      <org-search placeholder="Search by name, email, or ID..."></org-search>
    </div>
  `,
};
