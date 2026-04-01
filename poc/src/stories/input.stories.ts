import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import '../components/input.js';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Input',
  component: 'org-input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **\`<org-input>\`** component is a form-associated text input with built-in validation, helper text, and prefix/suffix slots.

### Features
- **Form-associated** via \`ElementInternals\` — works natively in \`<form>\`
- Validation states — **error** and **success** with visual feedback
- **Helper text** and **character counter**
- **Prefix / suffix** slots for icons or text
- 6 input types — text, email, password, number, search, tel
- 3 sizes — small, medium, large

### Usage
\`\`\`html
<org-input label="Email" type="email" placeholder="you@company.com"></org-input>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Input label text' },
    value: { control: 'text', description: 'Current input value' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel'],
      description: 'Input type',
      table: { defaultValue: { summary: 'text' } },
    },
    helper: { control: 'text', description: 'Helper text shown below input' },
    error: { control: 'text', description: 'Error message (shows red border)' },
    success: { control: 'text', description: 'Success message (shows green border)' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Input size',
      table: { defaultValue: { summary: 'medium' } },
    },
    disabled: { control: 'boolean', description: 'Whether the input is disabled' },
    required: { control: 'boolean', description: 'Whether the input is required' },
    readonly: { control: 'boolean', description: 'Whether the input is read-only' },
    maxlength: { control: 'number', description: 'Maximum character length (shows counter when set)' },
  },
};

export default meta;

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  args: {
    label: 'Full name',
    value: '',
    placeholder: 'Jane Doe',
    type: 'text',
    helper: '',
    error: '',
    success: '',
    size: 'medium',
    disabled: false,
    required: false,
    readonly: false,
  },
  render: (args) => html`
    <div style="width: 320px;">
      <org-input
        label="${args.label || nothing}"
        .value="${args.value}"
        placeholder="${args.placeholder || nothing}"
        type="${args.type}"
        helper="${args.helper || nothing}"
        error="${args.error || nothing}"
        success="${args.success || nothing}"
        size="${args.size}"
        ?disabled="${args.disabled}"
        ?required="${args.required}"
        ?readonly="${args.readonly}"
        maxlength="${args.maxlength ?? nothing}"
      ></org-input>
    </div>
  `,
};

// ── Validation States ─────────────────────────────────────────────────────────

export const ErrorState: Story = {
  name: 'Error State',
  render: () => html`
    <div style="width: 320px;">
      <org-input
        label="Email"
        type="email"
        value="invalid-email"
        error="Please enter a valid email address"
      ></org-input>
    </div>
  `,
};

export const SuccessState: Story = {
  name: 'Success State',
  render: () => html`
    <div style="width: 320px;">
      <org-input
        label="Username"
        value="john_doe"
        success="Username is available!"
      ></org-input>
    </div>
  `,
};

export const WithHelper: Story = {
  name: 'With Helper Text',
  render: () => html`
    <div style="width: 320px;">
      <org-input
        label="Password"
        type="password"
        placeholder="Enter password"
        helper="Must be at least 8 characters"
      ></org-input>
    </div>
  `,
};

// ── Character Counter ────────────────────────────────────────────────────────

export const CharacterCounter: Story = {
  name: 'Character Counter',
  render: () => html`
    <div style="width: 320px;">
      <org-input
        label="Bio"
        placeholder="Tell us about yourself"
        maxlength="160"
        helper="Short bio for your profile"
      ></org-input>
    </div>
  `,
};

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Sizes',
  render: () => html`
    <div style="width: 320px; display: flex; flex-direction: column; gap: 16px;">
      <org-input label="Small" size="small" placeholder="Small input"></org-input>
      <org-input label="Medium" size="medium" placeholder="Medium input"></org-input>
      <org-input label="Large" size="large" placeholder="Large input"></org-input>
    </div>
  `,
};

// ── With Prefix / Suffix ──────────────────────────────────────────────────────

export const WithPrefix: Story = {
  name: 'With Prefix Icon',
  render: () => html`
    <div style="width: 320px;">
      <org-input label="Search" placeholder="Search vendors...">
        <span slot="prefix">🔍</span>
      </org-input>
    </div>
  `,
};

export const WithSuffix: Story = {
  name: 'With Suffix Icon',
  render: () => html`
    <div style="width: 320px;">
      <org-input label="Website" placeholder="example.com">
        <span slot="suffix">🌐</span>
      </org-input>
    </div>
  `,
};

export const WithPrefixAndSuffix: Story = {
  name: 'Prefix & Suffix',
  render: () => html`
    <div style="width: 320px;">
      <org-input label="Amount" type="number" placeholder="0.00">
        <span slot="prefix">$</span>
        <span slot="suffix">USD</span>
      </org-input>
    </div>
  `,
};

// ── Required ──────────────────────────────────────────────────────────────────

export const Required: Story = {
  name: 'Required',
  render: () => html`
    <div style="width: 320px;">
      <org-input
        label="Email"
        type="email"
        placeholder="you@company.com"
        required
      ></org-input>
    </div>
  `,
};

// ── Disabled ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  name: 'Disabled',
  render: () => html`
    <div style="width: 320px;">
      <org-input
        label="Disabled field"
        value="Cannot edit this"
        disabled
      ></org-input>
    </div>
  `,
};

// ── Input Types ───────────────────────────────────────────────────────────────

export const InputTypes: Story = {
  name: 'Input Types',
  render: () => html`
    <div style="width: 320px; display: flex; flex-direction: column; gap: 16px;">
      <org-input label="Text" type="text" placeholder="Plain text"></org-input>
      <org-input label="Email" type="email" placeholder="you@example.com"></org-input>
      <org-input label="Password" type="password" placeholder="Enter password"></org-input>
      <org-input label="Number" type="number" placeholder="0"></org-input>
      <org-input label="Telephone" type="tel" placeholder="+1 (555) 000-0000"></org-input>
    </div>
  `,
};
