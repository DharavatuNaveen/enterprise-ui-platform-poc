import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A versatile card container component with shadow and slot support.
 *
 * @element org-card
 *
 * @fires org-card:click - Fired when a clickable card is clicked, detail: { originalEvent: MouseEvent }
 *
 * @csspart card    - The root card element
 * @csspart header  - The header section
 * @csspart media   - The media/image section
 * @csspart body    - The body/content section
 * @csspart footer  - The footer section
 *
 * @cssprop --org-card-bg       - Card background color
 * @cssprop --org-card-border   - Card border color
 * @cssprop --org-card-radius   - Card border radius
 * @cssprop --org-card-color    - Card text color
 * @cssprop --org-card-shadow-sm  - Shadow for shadow="sm"
 * @cssprop --org-card-shadow-md  - Shadow for shadow="md"
 * @cssprop --org-card-shadow-lg  - Shadow for shadow="lg"
 *
 * @slot          - Default slot: main card body content
 * @slot header   - Card header area (title, subtitle, actions)
 * @slot media    - Image or media placed above the body
 * @slot footer   - Card footer area (buttons, links)
 */
@customElement('org-card')
export class OrgCard extends LitElement {

  /** Padding/spacing size of the card */
  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  /** Shadow depth */
  @property({ type: String })
  shadow: 'none' | 'sm' | 'md' | 'lg' = 'md';

  /** Visual style variant */
  @property({ type: String })
  variant: 'default' | 'outlined' | 'elevated' = 'default';

  /** Makes the card interactive — shows hover state and fires click event */
  @property({ type: Boolean, reflect: true })
  clickable = false;

  /** Disables interaction on a clickable card */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--org-font-family, sans-serif);
    }

    :host([disabled]) {
      pointer-events: none;
      opacity: 0.55;
    }

    /* ── Base card ─────────────────────────────────────────── */
    .card {
      display: flex;
      flex-direction: column;
      background: var(--org-card-bg, #ffffff);
      color: var(--org-card-color, #212121);
      border-radius: var(--org-card-radius, 12px);
      overflow: hidden;
      transition:
        box-shadow 0.2s ease,
        transform 0.15s ease;
    }

    /* ── Variants ──────────────────────────────────────────── */
    .card.variant-default {
      border: none;
    }

    .card.variant-outlined {
      border: 1px solid var(--org-card-border, #e0e0e0);
    }

    .card.variant-elevated {
      border: none;
    }

    /* ── Shadow depths ─────────────────────────────────────── */
    .card.shadow-none { box-shadow: none; }

    .card.shadow-sm {
      box-shadow: var(--org-card-shadow-sm,
        0 1px 3px rgba(0,0,0,0.08),
        0 1px 2px rgba(0,0,0,0.06));
    }

    .card.shadow-md {
      box-shadow: var(--org-card-shadow-md,
        0 4px 12px rgba(0,0,0,0.10),
        0 2px 4px rgba(0,0,0,0.06));
    }

    .card.shadow-lg {
      box-shadow: var(--org-card-shadow-lg,
        0 10px 30px rgba(0,0,0,0.14),
        0 4px 10px rgba(0,0,0,0.08));
    }

    /* ── Clickable hover & focus ───────────────────────────── */
    .card.clickable {
      cursor: pointer;
    }

    .card.clickable:hover {
      transform: translateY(-2px);
      box-shadow: var(--org-card-shadow-lg,
        0 10px 30px rgba(0,0,0,0.14),
        0 4px 10px rgba(0,0,0,0.08));
    }

    .card.clickable:active {
      transform: translateY(0);
    }

    .card.clickable:focus-visible {
      outline: 2px solid var(--org-color-primary, #1976d2);
      outline-offset: 2px;
    }

    /* ── Sections ──────────────────────────────────────────── */
    .card-media ::slotted(*) {
      display: block;
      width: 100%;
    }

    .card-header,
    .card-body,
    .card-footer {
      display: block;
    }

    /* ── Size: padding ─────────────────────────────────────── */
    .size-small  .card-header { padding: 12px 14px 0; }
    .size-small  .card-body   { padding: 10px 14px; }
    .size-small  .card-footer { padding: 0 14px 12px; }

    .size-medium .card-header { padding: 18px 20px 0; }
    .size-medium .card-body   { padding: 14px 20px; }
    .size-medium .card-footer { padding: 0 20px 18px; }

    .size-large  .card-header { padding: 24px 28px 0; }
    .size-large  .card-body   { padding: 18px 28px; }
    .size-large  .card-footer { padding: 0 28px 24px; }

    /* When there is no header, body gets top padding too */
    .card-body.no-header {
      padding-top: inherit;
    }
  `;

  private _onClick(e: MouseEvent) {
    if (!this.clickable || this.disabled) return;
    this.dispatchEvent(new CustomEvent('org-card:click', {
      bubbles: true,
      composed: true,
      detail: { originalEvent: e },
    }));
  }

  render() {
    const classes = [
      'card',
      `size-${this.size}`,
      `shadow-${this.shadow}`,
      `variant-${this.variant}`,
      this.clickable ? 'clickable' : '',
    ].filter(Boolean).join(' ');

    return html`
      <div
        class="${classes}"
        part="card"
        role="${this.clickable ? 'button' : nothing}"
        tabindex="${this.clickable ? '0' : nothing}"
        @click="${this._onClick}"
      >
        <div class="card-media" part="media">
          <slot name="media"></slot>
        </div>

        <div class="card-header" part="header">
          <slot name="header"></slot>
        </div>

        <div class="card-body" part="body">
          <slot></slot>
        </div>

        <div class="card-footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'org-card': OrgCard; }
}
