import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import '../components/select.js';

type Story = StoryObj;

// ── Sample data ───────────────────────────────────────────────────────────────

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'in', label: 'India' },
  { value: 'jp', label: 'Japan' },
];

const roleOptions = [
  { value: 'admin', label: 'Administrator' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
  { value: 'guest', label: 'Guest', disabled: true },
];

const techOptions = [
  { value: 'react', label: 'React', group: 'Frontend' },
  { value: 'vue', label: 'Vue', group: 'Frontend' },
  { value: 'angular', label: 'Angular', group: 'Frontend' },
  { value: 'svelte', label: 'Svelte', group: 'Frontend' },
  { value: 'node', label: 'Node.js', group: 'Backend' },
  { value: 'python', label: 'Python', group: 'Backend' },
  { value: 'go', label: 'Go', group: 'Backend' },
  { value: 'rust', label: 'Rust', group: 'Backend' },
];

const tagOptions = [
  { value: 'urgent', label: 'Urgent' },
  { value: 'bug', label: 'Bug' },
  { value: 'feature', label: 'Feature' },
  { value: 'improvement', label: 'Improvement' },
  { value: 'docs', label: 'Documentation' },
  { value: 'design', label: 'Design' },
];

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Components/Select',
  component: 'org-select',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **\`<org-select>\`** component is a feature-rich dropdown for single and multi selection.

### Features
- **Single select** — traditional dropdown behavior
- **Multi-select** — tag-based selection with remove buttons
- **Searchable** — type-ahead filtering on options
- **Grouped options** — organize options under headers
- **Keyboard navigation** — Arrow keys, Enter, Escape
- **Validation** — error and helper text
- **Disabled options** — prevent selection of specific items

### Usage
\`\`\`html
<org-select
  label="Country"
  placeholder="Select country"
  .options="\${countryList}"
></org-select>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Select label text' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    value: { control: 'text', description: 'Selected value (single mode)' },
    multiple: { control: 'boolean', description: 'Enable multi-select' },
    searchable: { control: 'boolean', description: 'Enable search/filter' },
    disabled: { control: 'boolean', description: 'Disable the select' },
    required: { control: 'boolean', description: 'Mark as required' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the select',
      table: { defaultValue: { summary: 'medium' } },
    },
    error: { control: 'text', description: 'Error message' },
    helper: { control: 'text', description: 'Helper text' },
  },
};

export default meta;

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    value: '',
    multiple: false,
    searchable: false,
    disabled: false,
    required: false,
    size: 'medium',
    error: '',
    helper: '',
  },
  render: (args) => html`
    <div style="width: 320px;">
      <org-select
        label="${args.label || nothing}"
        placeholder="${args.placeholder || nothing}"
        .value="${args.value}"
        .options="${countryOptions}"
        ?multiple="${args.multiple}"
        ?searchable="${args.searchable}"
        ?disabled="${args.disabled}"
        ?required="${args.required}"
        size="${args.size}"
        error="${args.error || nothing}"
        helper="${args.helper || nothing}"
        @org-select:change="${(e: CustomEvent) => console.log('change:', e.detail)}"
      ></org-select>
    </div>
  `,
};

// ── Single Select ─────────────────────────────────────────────────────────────

export const SingleSelect: Story = {
  name: 'Single Select',
  render: () => html`
    <div style="width: 320px;">
      <org-select
        label="Role"
        placeholder="Choose a role"
        .options="${roleOptions}"
      ></org-select>
    </div>
  `,
};

// ── Multi Select ──────────────────────────────────────────────────────────────

export const MultiSelect: Story = {
  name: 'Multi Select',
  render: () => html`
    <div style="width: 320px;">
      <org-select
        label="Tags"
        placeholder="Select tags"
        multiple
        .options="${tagOptions}"
      ></org-select>
    </div>
  `,
};

// ── Multi Select with Pre-selected Values ─────────────────────────────────────

export const MultiSelectPreSelected: Story = {
  name: 'Multi Select (Pre-selected)',
  render: () => html`
    <div style="width: 320px;">
      <org-select
        label="Tags"
        placeholder="Select tags"
        multiple
        .values="${['bug', 'urgent']}"
        .options="${tagOptions}"
      ></org-select>
    </div>
  `,
};

// ── Searchable ────────────────────────────────────────────────────────────────

export const Searchable: Story = {
  name: 'Searchable',
  render: () => html`
    <div style="width: 320px;">
      <org-select
        label="Country"
        placeholder="Search countries"
        searchable
        .options="${countryOptions}"
      ></org-select>
    </div>
  `,
};

// ── Searchable Multi ──────────────────────────────────────────────────────────

export const SearchableMulti: Story = {
  name: 'Searchable Multi',
  render: () => html`
    <div style="width: 320px;">
      <org-select
        label="Technologies"
        placeholder="Search and select..."
        searchable
        multiple
        .options="${techOptions}"
      ></org-select>
    </div>
  `,
};

// ── Grouped Options ───────────────────────────────────────────────────────────

export const GroupedOptions: Story = {
  name: 'Grouped Options',
  render: () => html`
    <div style="width: 320px;">
      <org-select
        label="Technology"
        placeholder="Select a technology"
        .options="${techOptions}"
      ></org-select>
    </div>
  `,
};

// ── With Validation ───────────────────────────────────────────────────────────

export const WithError: Story = {
  name: 'With Error',
  render: () => html`
    <div style="width: 320px;">
      <org-select
        label="Role"
        placeholder="Choose a role"
        required
        error="Please select a role"
        .options="${roleOptions}"
      ></org-select>
    </div>
  `,
};

export const WithHelper: Story = {
  name: 'With Helper',
  render: () => html`
    <div style="width: 320px;">
      <org-select
        label="Country"
        placeholder="Select your country"
        helper="We use this for tax calculations"
        .options="${countryOptions}"
      ></org-select>
    </div>
  `,
};

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Sizes',
  render: () => html`
    <div style="width: 320px; display: flex; flex-direction: column; gap: 16px;">
      <org-select label="Small" size="small" placeholder="Small" .options="${countryOptions}"></org-select>
      <org-select label="Medium" size="medium" placeholder="Medium" .options="${countryOptions}"></org-select>
      <org-select label="Large" size="large" placeholder="Large" .options="${countryOptions}"></org-select>
    </div>
  `,
};

// ── Disabled ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  name: 'Disabled',
  render: () => html`
    <div style="width: 320px;">
      <org-select
        label="Country"
        placeholder="Cannot select"
        disabled
        .options="${countryOptions}"
      ></org-select>
    </div>
  `,
};

// ── With Disabled Options ─────────────────────────────────────────────────────

export const DisabledOptions: Story = {
  name: 'Disabled Options',
  render: () => html`
    <div style="width: 320px;">
      <org-select
        label="Role"
        placeholder="Choose a role"
        helper="Guest role is currently unavailable"
        .options="${roleOptions}"
      ></org-select>
    </div>
  `,
};
