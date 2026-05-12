import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../components/card.js';

const meta: Meta = {
  title: 'Components/Card',
  component: 'org-card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A versatile card container with shadow, size variants, and flexible slot layout.

\`\`\`html
<org-card shadow="md" variant="default" size="medium">
  <span slot="header"><strong>Card Title</strong></span>
  <p>Card body content goes here.</p>
  <span slot="footer">Footer actions</span>
</org-card>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Controls internal padding',
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Shadow depth of the card',
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Visual style of the card',
    },
    clickable: {
      control: 'boolean',
      description: 'Enables hover/focus interaction and fires org-card:click',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction on a clickable card',
    },
  },
};

export default meta;
type Story = StoryObj;

// ── Playground ─────────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  args: {
    size: 'medium',
    shadow: 'md',
    variant: 'default',
    clickable: false,
    disabled: false,
  },
  render: (args) => html`
    <org-card
      size="${args.size}"
      shadow="${args.shadow}"
      variant="${args.variant}"
      ?clickable="${args.clickable}"
      ?disabled="${args.disabled}"
      style="max-width: 360px;"
    >
      <div slot="header" style="font-size:16px; font-weight:600;">Card Title</div>
      <p style="margin:0; color:#616161; font-size:14px;">
        This is the card body. You can put any content here — text, lists, forms, etc.
      </p>
      <div slot="footer" style="display:flex; gap:8px;">
        <org-button variant="primary" size="small">Action</org-button>
        <org-button variant="ghost" size="small">Cancel</org-button>
      </div>
    </org-card>
  `,
};

// ── Shadow variants ─────────────────────────────────────────────────────────────

export const ShadowVariants: Story = {
  name: 'Shadow Depths',
  render: () => html`
    <div style="display:flex; gap:24px; flex-wrap:wrap; align-items:flex-start; padding:16px;">
      ${(['none', 'sm', 'md', 'lg'] as const).map(s => html`
        <org-card shadow="${s}" style="max-width:200px; min-width:160px;">
          <div slot="header" style="font-weight:600; font-size:14px;">shadow="${s}"</div>
          <p style="margin:0; font-size:13px; color:#616161;">Card with ${s} shadow.</p>
        </org-card>
      `)}
    </div>
  `,
};

// ── Style variants ──────────────────────────────────────────────────────────────

export const StyleVariants: Story = {
  name: 'Style Variants',
  render: () => html`
    <div style="display:flex; gap:24px; flex-wrap:wrap; padding:16px;">
      <org-card variant="default" shadow="md" style="max-width:200px;">
        <div slot="header" style="font-weight:600; font-size:14px;">Default</div>
        <p style="margin:0; font-size:13px; color:#616161;">No border, standard shadow.</p>
      </org-card>

      <org-card variant="outlined" shadow="none" style="max-width:200px;">
        <div slot="header" style="font-weight:600; font-size:14px;">Outlined</div>
        <p style="margin:0; font-size:13px; color:#616161;">Border, no shadow.</p>
      </org-card>

      <org-card variant="elevated" shadow="lg" style="max-width:200px;">
        <div slot="header" style="font-weight:600; font-size:14px;">Elevated</div>
        <p style="margin:0; font-size:13px; color:#616161;">No border, large shadow.</p>
      </org-card>
    </div>
  `,
};

// ── With media slot ─────────────────────────────────────────────────────────────

export const WithMedia: Story = {
  name: 'With Media Slot',
  render: () => html`
    <org-card shadow="md" style="max-width:320px;">
      <img
        slot="media"
        src="https://picsum.photos/seed/card/640/200"
        alt="Card cover"
        style="width:100%; height:160px; object-fit:cover; display:block;"
      />
      <div slot="header" style="font-weight:600; font-size:16px;">Image Card</div>
      <p style="margin:0; font-size:14px; color:#616161;">
        Use the <code>media</code> slot to add a cover image above the content.
      </p>
      <div slot="footer">
        <org-button variant="primary" size="small">Read more</org-button>
      </div>
    </org-card>
  `,
};

// ── Clickable ───────────────────────────────────────────────────────────────────

export const Clickable: Story = {
  name: 'Clickable Card',
  render: () => html`
    <org-card
      clickable
      shadow="sm"
      variant="outlined"
      style="max-width:280px;"
      @org-card:click="${(e: CustomEvent) => alert('Card clicked!')}"
    >
      <div slot="header" style="font-weight:600; font-size:15px;">Clickable Card</div>
      <p style="margin:0; font-size:13px; color:#616161;">
        Hover to see lift effect. Click to fire <code>org-card:click</code> event.
      </p>
    </org-card>
  `,
};

// ── Size variants ───────────────────────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Sizes',
  render: () => html`
    <div style="display:flex; gap:24px; flex-wrap:wrap; align-items:flex-start; padding:16px;">
      ${(['small', 'medium', 'large'] as const).map(size => html`
        <org-card size="${size}" shadow="md" style="max-width:220px;">
          <div slot="header" style="font-weight:600; font-size:14px;">size="${size}"</div>
          <p style="margin:0; font-size:13px; color:#616161;">Padding controlled by size prop.</p>
        </org-card>
      `)}
    </div>
  `,
};
