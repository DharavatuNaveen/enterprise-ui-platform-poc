import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

/**
 * A cross-framework enterprise select/dropdown component.
 *
 * @element org-select
 *
 * @csspart trigger   - The visible trigger button
 * @csspart dropdown  - The dropdown panel
 * @csspart option    - Individual option items
 *
 * @cssprop --org-select-bg            - Background color
 * @cssprop --org-select-border        - Border color
 * @cssprop --org-select-border-focus  - Border on focus
 * @cssprop --org-select-radius        - Border radius
 * @cssprop --org-select-option-hover  - Option hover background
 * @cssprop --org-select-option-selected - Selected option background
 *
 * @fires org-select:change - On selection change with { value, values, option }
 */
@customElement('org-select')
export class OrgSelect extends LitElement {

  static formAssociated = true;
  private _internals: ElementInternals;

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  @property({ type: String })  label = '';
  @property({ type: String })  placeholder = 'Select an option';
  @property({ type: Array })   options: SelectOption[] = [];
  @property({ type: String })  value = '';
  @property({ type: Array })   values: string[] = [];
  @property({ type: Boolean }) multiple = false;
  @property({ type: Boolean }) searchable = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: String })  size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: String })  error = '';
  @property({ type: String })  helper = '';
  @property({ type: String })  name = '';

  @state() private _open = false;
  @state() private _search = '';
  @state() private _focusedIndex = -1;

  static styles = css`
    :host {
      display: block;
      font-family: var(--org-font-family, sans-serif);
      position: relative;
    }

    .container { display: flex; flex-direction: column; gap: 4px; }

    label {
      font-size: var(--org-font-size-sm, 12px);
      font-weight: var(--org-font-weight-medium, 500);
      color: var(--org-input-label-color, #616161);
    }

    .required-star { color: var(--org-color-danger, #d32f2f); margin-left: 2px; }

    .trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid var(--org-select-border, #e0e0e0);
      border-radius: var(--org-select-radius, 6px);
      background: var(--org-select-bg, #fff);
      cursor: pointer;
      gap: 8px;
      transition: border-color var(--org-transition-fast, 0.15s ease),
                  box-shadow var(--org-transition-fast, 0.15s ease);
      font-family: inherit;
      text-align: left;
    }

    .small  .trigger { padding: 5px 10px;  font-size: var(--org-font-size-sm, 12px);  min-height: 30px; }
    .medium .trigger { padding: 8px 12px;  font-size: var(--org-font-size-md, 14px);  min-height: 36px; }
    .large  .trigger { padding: 11px 14px; font-size: var(--org-font-size-lg, 16px);  min-height: 44px; }

    .trigger:focus-visible {
      outline: none;
      border-color: var(--org-select-border-focus, #1976d2);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--org-select-border-focus, #1976d2) 15%, transparent);
    }

    .trigger.open {
      border-color: var(--org-select-border-focus, #1976d2);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--org-select-border-focus, #1976d2) 15%, transparent);
    }

    .trigger.error { border-color: var(--org-input-border-error, #d32f2f); }
    .trigger:disabled, :host([disabled]) .trigger {
      opacity: 0.55;
      cursor: not-allowed;
      background: var(--org-color-gray-100, #f5f5f5);
    }

    .trigger-text {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--org-input-color, #212121);
    }

    .trigger-text.placeholder { color: var(--org-input-placeholder, #9e9e9e); }

    .chevron {
      flex-shrink: 0;
      color: var(--org-color-gray-500, #9e9e9e);
      transition: transform var(--org-transition-fast, 0.15s ease);
      font-size: 10px;
    }

    .chevron.open { transform: rotate(180deg); }

    /* Dropdown */
    .dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background: var(--org-select-bg, #fff);
      border: 1px solid var(--org-select-border, #e0e0e0);
      border-radius: var(--org-select-radius, 6px);
      box-shadow: var(--org-shadow-md, 0 4px 6px rgba(0,0,0,0.07));
      z-index: var(--org-z-dropdown, 100);
      max-height: 260px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .search-box {
      padding: 8px;
      border-bottom: 1px solid var(--org-select-border, #e0e0e0);
      flex-shrink: 0;
    }

    .search-box input {
      width: 100%;
      border: 1px solid var(--org-select-border, #e0e0e0);
      border-radius: 4px;
      padding: 5px 8px;
      font-size: var(--org-font-size-sm, 12px);
      font-family: inherit;
      background: var(--org-input-bg, #fff);
      color: var(--org-input-color, #212121);
      outline: none;
      box-sizing: border-box;
    }

    .search-box input:focus {
      border-color: var(--org-select-border-focus, #1976d2);
    }

    .options-list {
      overflow-y: auto;
      padding: 4px 0;
    }

    .option-group-label {
      padding: 6px 12px 2px;
      font-size: var(--org-font-size-xs, 11px);
      font-weight: var(--org-font-weight-medium, 500);
      color: var(--org-color-gray-500, #9e9e9e);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .option {
      padding: 8px 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: var(--org-font-size-md, 14px);
      color: var(--org-input-color, #212121);
      transition: background var(--org-transition-fast, 0.15s ease);
    }

    .option:hover, .option.focused {
      background: var(--org-select-option-hover, #e3f2fd);
    }

    .option.selected {
      background: var(--org-select-option-selected, #e3f2fd);
      color: var(--org-color-primary, #1976d2);
      font-weight: var(--org-font-weight-medium, 500);
    }

    .option.disabled {
      opacity: 0.45;
      cursor: not-allowed;
      pointer-events: none;
    }

    .option-check {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      border: 1.5px solid var(--org-select-border, #e0e0e0);
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: transparent;
    }

    .option.selected .option-check {
      background: var(--org-color-primary, #1976d2);
      border-color: var(--org-color-primary, #1976d2);
      color: white;
    }

    .no-results {
      padding: 12px;
      text-align: center;
      color: var(--org-color-gray-500, #9e9e9e);
      font-size: var(--org-font-size-sm, 12px);
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 6px;
      background: var(--org-color-primary-light, #e3f2fd);
      color: var(--org-color-primary, #1976d2);
      border-radius: var(--org-radius-sm, 4px);
      font-size: var(--org-font-size-xs, 11px);
      font-weight: var(--org-font-weight-medium, 500);
    }

    .tag-remove {
      cursor: pointer;
      opacity: 0.7;
      line-height: 1;
      font-size: 12px;
    }

    .tag-remove:hover { opacity: 1; }

    .helper-text {
      font-size: var(--org-font-size-xs, 11px);
      color: var(--org-input-helper-color, #616161);
    }

    .helper-text.error { color: var(--org-input-error-color, #d32f2f); }
  `;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
  }

  private _handleOutsideClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node)) this._open = false;
  };

  private get _filteredOptions() {
    if (!this._search) return this.options;
    const q = this._search.toLowerCase();
    return this.options.filter(o => o.label.toLowerCase().includes(q));
  }

  private get _displayText(): string {
    if (this.multiple) return '';
    const opt = this.options.find(o => o.value === this.value);
    return opt?.label ?? '';
  }

  private _toggleOpen() {
    if (this.disabled) return;
    this._open = !this._open;
    if (!this._open) this._search = '';
  }

  private _selectOption(opt: SelectOption) {
    if (opt.disabled) return;
    if (this.multiple) {
      const idx = this.values.indexOf(opt.value);
      if (idx === -1) this.values = [...this.values, opt.value];
      else this.values = this.values.filter(v => v !== opt.value);
      this._internals.setFormValue(this.values.join(','));
    } else {
      this.value = opt.value;
      this._internals.setFormValue(this.value);
      this._open = false;
      this._search = '';
    }
    this.dispatchEvent(new CustomEvent('org-select:change', {
      bubbles: true, composed: true,
      detail: { value: this.value, values: this.values, option: opt }
    }));
  }

  private _removeTag(val: string, e: MouseEvent) {
    e.stopPropagation();
    this.values = this.values.filter(v => v !== val);
    this._internals.setFormValue(this.values.join(','));
    this.dispatchEvent(new CustomEvent('org-select:change', {
      bubbles: true, composed: true, detail: { values: this.values }
    }));
  }

  private _onKeydown(e: KeyboardEvent) {
    const opts = this._filteredOptions.filter(o => !o.disabled);
    if (e.key === 'Enter' || e.key === ' ') {
      if (!this._open) { this._open = true; return; }
      if (this._focusedIndex >= 0) this._selectOption(opts[this._focusedIndex]);
    }
    if (e.key === 'Escape') { this._open = false; this._search = ''; }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this._open = true;
      this._focusedIndex = Math.min(this._focusedIndex + 1, opts.length - 1);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      this._focusedIndex = Math.max(this._focusedIndex - 1, 0);
    }
  }

  render() {
    const filtered = this._filteredOptions;
    const groups = [...new Set(filtered.map(o => o.group))];
    const triggerClass = [
      'trigger',
      this._open ? 'open' : '',
      this.error ? 'error' : ''
    ].filter(Boolean).join(' ');

    return html`
      <div class="container ${this.size}">
        ${this.label ? html`
          <label>
            ${this.label}
            ${this.required ? html`<span class="required-star">*</span>` : nothing}
          </label>
        ` : nothing}

        <button
          part="trigger"
          class="${triggerClass}"
          ?disabled="${this.disabled}"
          aria-haspopup="listbox"
          aria-expanded="${this._open}"
          @click="${this._toggleOpen}"
          @keydown="${this._onKeydown}"
          type="button"
        >
          ${this.multiple ? html`
            <div class="tags">
              ${this.values.length > 0
                ? this.values.map(v => {
                    const opt = this.options.find(o => o.value === v);
                    return opt ? html`
                      <span class="tag">
                        ${opt.label}
                        <span class="tag-remove" @click="${(e: MouseEvent) => this._removeTag(v, e)}">✕</span>
                      </span>
                    ` : nothing;
                  })
                : html`<span class="trigger-text placeholder">${this.placeholder}</span>`
              }
            </div>
          ` : html`
            <span class="trigger-text ${this._displayText ? '' : 'placeholder'}">
              ${this._displayText || this.placeholder}
            </span>
          `}
          <span class="chevron ${this._open ? 'open' : ''}">▼</span>
        </button>

        ${this._open ? html`
          <div class="dropdown" part="dropdown" role="listbox">
            ${this.searchable ? html`
              <div class="search-box">
                <input
                  type="text"
                  placeholder="Search..."
                  .value="${this._search}"
                  @input="${(e: InputEvent) => { this._search = (e.target as HTMLInputElement).value; this._focusedIndex = -1; }}"
                  @click="${(e: MouseEvent) => e.stopPropagation()}"
                  autofocus
                />
              </div>
            ` : nothing}

            <div class="options-list">
              ${filtered.length === 0
                ? html`<div class="no-results">No results found</div>`
                : groups.map(group => html`
                    ${group ? html`<div class="option-group-label">${group}</div>` : nothing}
                    ${filtered.filter(o => o.group === group).map((opt, idx) => {
                      const isSelected = this.multiple
                        ? this.values.includes(opt.value)
                        : this.value === opt.value;
                      return html`
                        <div
                          part="option"
                          class="option ${isSelected ? 'selected' : ''} ${opt.disabled ? 'disabled' : ''} ${this._focusedIndex === idx ? 'focused' : ''}"
                          role="option"
                          aria-selected="${isSelected}"
                          @click="${() => this._selectOption(opt)}"
                        >
                          ${this.multiple ? html`<span class="option-check">${isSelected ? '✓' : ''}</span>` : nothing}
                          ${opt.label}
                        </div>
                      `;
                    })}
                  `)
              }
            </div>
          </div>
        ` : nothing}

        ${this.error || this.helper ? html`
          <span class="helper-text ${this.error ? 'error' : ''}">
            ${this.error || this.helper}
          </span>
        ` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'org-select': OrgSelect; }
}
