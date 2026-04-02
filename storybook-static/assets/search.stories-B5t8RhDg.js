import{i as x,a as y,b as a,A as f}from"./iframe-D5HhjVZl.js";import{n as t,t as w}from"./property-Bv4SVM5X.js";import{r as _}from"./state-lOhfy5K9.js";import{e as S}from"./query-BYlH-2gt.js";import"./preload-helper-PPVm8Dsz.js";var z=Object.defineProperty,$=Object.getOwnPropertyDescriptor,s=(e,r,m,n)=>{for(var i=n>1?void 0:n?$(r,m):r,b=e.length-1,v;b>=0;b--)(v=e[b])&&(i=(n?v(r,m,i):v(i))||i);return n&&i&&z(r,m,i),i};let o=class extends y{constructor(){super(...arguments),this.value="",this.placeholder="Search...",this.size="medium",this.disabled=!1,this.loading=!1,this.debounce=300,this.ariaLabel="Search",this._focused=!1}get _wrapperClass(){const e=["search-wrapper"];return this._focused&&e.push("focused"),this.disabled&&e.push("disabled"),e.join(" ")}_onInput(e){const r=e.target;this.value=r.value,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("org-search:search",{bubbles:!0,composed:!0,detail:{value:this.value}}))},this.debounce)}_onKeydown(e){e.key==="Enter"&&(this._debounceTimer&&clearTimeout(this._debounceTimer),this.dispatchEvent(new CustomEvent("org-search:submit",{bubbles:!0,composed:!0,detail:{value:this.value}}))),e.key==="Escape"&&this.value&&this._clear()}_clear(){this.value="",this._debounceTimer&&clearTimeout(this._debounceTimer),this._input?.focus(),this.dispatchEvent(new CustomEvent("org-search:clear",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("org-search:search",{bubbles:!0,composed:!0,detail:{value:""}}))}_onFocus(){this._focused=!0}_onBlur(){this._focused=!1}focus(){this._input?.focus()}blur(){this._input?.blur()}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}render(){const e=a`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>`,r=a`
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>`;return a`
      <div class="${this.size}" part="container">
        <div class="${this._wrapperClass}">
          <span class="search-icon" aria-hidden="true">${e}</span>

          <input
            part="input"
            type="search"
            .value="${this.value}"
            placeholder="${this.placeholder||f}"
            ?disabled="${this.disabled}"
            aria-label="${this.ariaLabel}"
            @input="${this._onInput}"
            @keydown="${this._onKeydown}"
            @focus="${this._onFocus}"
            @blur="${this._onBlur}"
          />

          ${this.loading?a`<span class="spinner" aria-hidden="true"></span>`:this.value?a`
                <button
                  class="clear-btn"
                  part="clear-btn"
                  type="button"
                  aria-label="Clear search"
                  @click="${this._clear}"
                >${r}</button>`:f}
        </div>
      </div>
    `}};o.styles=x`
    :host {
      display: block;
      font-family: var(--org-font-family, sans-serif);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    .search-wrapper {
      display: flex;
      align-items: center;
      border: 1px solid var(--org-search-border, var(--org-color-border, #e0e0e0));
      border-radius: var(--org-search-radius, var(--org-radius-full, 9999px));
      background: var(--org-search-bg, var(--org-color-surface, #fff));
      transition: border-color var(--org-transition-fast, 0.15s ease),
                  box-shadow var(--org-transition-fast, 0.15s ease);
      overflow: hidden;
    }

    /* Sizes */
    .small  .search-wrapper { min-height: 30px; }
    .medium .search-wrapper { min-height: 36px; }
    .large  .search-wrapper { min-height: 44px; }

    .search-wrapper.focused {
      border-color: var(--org-search-border-focus, var(--org-color-primary, #1976d2));
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--org-search-border-focus, var(--org-color-primary, #1976d2)) 15%, transparent);
    }

    .search-wrapper.disabled {
      opacity: 0.55;
      cursor: not-allowed;
      background: var(--org-color-gray-100, #f5f5f5);
    }

    /* Search icon */
    .search-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--org-search-icon-color, var(--org-color-gray-500, #9e9e9e));
      transition: color var(--org-transition-fast, 0.15s ease);
    }

    .small  .search-icon { padding-left: 10px; }
    .medium .search-icon { padding-left: 12px; }
    .large  .search-icon { padding-left: 14px; }

    .search-icon svg {
      width: 1em;
      height: 1em;
    }

    .small  .search-icon svg { font-size: 14px; }
    .medium .search-icon svg { font-size: 16px; }
    .large  .search-icon svg { font-size: 18px; }

    .focused .search-icon {
      color: var(--org-search-border-focus, var(--org-color-primary, #1976d2));
    }

    /* Input */
    input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      color: var(--org-input-color, #212121);
      font-family: inherit;
      width: 100%;
    }

    .small  input { padding: 5px 8px;   font-size: var(--org-font-size-sm, 12px); }
    .medium input { padding: 8px 10px;   font-size: var(--org-font-size-md, 14px); }
    .large  input { padding: 11px 12px;  font-size: var(--org-font-size-lg, 16px); }

    input::placeholder {
      color: var(--org-input-placeholder, #9e9e9e);
    }

    input:disabled {
      cursor: not-allowed;
    }

    /* Clear button */
    .clear-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      border: none;
      background: none;
      cursor: pointer;
      color: var(--org-color-gray-500, #9e9e9e);
      padding: 0;
      border-radius: 50%;
      transition: color var(--org-transition-fast, 0.15s ease),
                  background var(--org-transition-fast, 0.15s ease);
    }

    .small  .clear-btn { width: 20px; height: 20px; margin-right: 6px; }
    .medium .clear-btn { width: 24px; height: 24px; margin-right: 8px; }
    .large  .clear-btn { width: 28px; height: 28px; margin-right: 10px; }

    .clear-btn:hover {
      color: var(--org-color-text, #212121);
      background: var(--org-color-gray-100, #f5f5f5);
    }

    .clear-btn svg {
      width: 12px;
      height: 12px;
    }

    /* Loading spinner */
    .spinner {
      flex-shrink: 0;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: var(--org-color-primary, #1976d2);
      border-right-color: var(--org-color-primary, #1976d2);
      animation: org-search-spin 0.65s linear infinite;
    }

    .small  .spinner { width: 14px; height: 14px; margin-right: 6px; }
    .medium .spinner { width: 16px; height: 16px; margin-right: 8px; }
    .large  .spinner { width: 18px; height: 18px; margin-right: 10px; }

    @keyframes org-search-spin {
      to { transform: rotate(360deg); }
    }
  `;s([t({type:String})],o.prototype,"value",2);s([t({type:String})],o.prototype,"placeholder",2);s([t({type:String})],o.prototype,"size",2);s([t({type:Boolean,reflect:!0})],o.prototype,"disabled",2);s([t({type:Boolean,reflect:!0})],o.prototype,"loading",2);s([t({type:Number})],o.prototype,"debounce",2);s([t({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel",2);s([_()],o.prototype,"_focused",2);s([S("input")],o.prototype,"_input",2);o=s([w("org-search")],o);const P={title:"Components/Search",component:"org-search",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
`}}},argTypes:{value:{control:"text",description:"Current search value"},placeholder:{control:"text",description:"Placeholder text"},size:{control:"select",options:["small","medium","large"],description:"Size of the search input",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the search is disabled"},loading:{control:"boolean",description:"Whether to show loading spinner"},debounce:{control:"number",description:"Debounce delay in milliseconds",table:{defaultValue:{summary:"300"}}}}},l={name:"Playground",args:{value:"",placeholder:"Search...",size:"medium",disabled:!1,loading:!1,debounce:300},render:e=>a`
    <div style="width: 360px;">
      <org-search
        .value="${e.value}"
        placeholder="${e.placeholder||f}"
        size="${e.size}"
        ?disabled="${e.disabled}"
        ?loading="${e.loading}"
        debounce="${e.debounce}"
        @org-search:search="${r=>console.log("search:",r.detail)}"
        @org-search:submit="${r=>console.log("submit:",r.detail)}"
        @org-search:clear="${()=>console.log("cleared")}"
      ></org-search>
    </div>
  `},c={name:"Default",render:()=>a`
    <div style="width: 360px;">
      <org-search placeholder="Search vendors..."></org-search>
    </div>
  `},d={name:"With Value",render:()=>a`
    <div style="width: 360px;">
      <org-search value="enterprise components" placeholder="Search..."></org-search>
    </div>
  `},h={name:"Loading",render:()=>a`
    <div style="width: 360px;">
      <org-search value="searching..." loading placeholder="Search..."></org-search>
    </div>
  `},p={name:"Sizes",render:()=>a`
    <div style="width: 360px; display: flex; flex-direction: column; gap: 16px;">
      <org-search size="small" placeholder="Small search"></org-search>
      <org-search size="medium" placeholder="Medium search"></org-search>
      <org-search size="large" placeholder="Large search"></org-search>
    </div>
  `},u={name:"Disabled",render:()=>a`
    <div style="width: 360px;">
      <org-search disabled placeholder="Cannot search"></org-search>
    </div>
  `},g={name:"Custom Placeholder",render:()=>a`
    <div style="width: 360px;">
      <org-search placeholder="Search by name, email, or ID..."></org-search>
    </div>
  `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    value: '',
    placeholder: 'Search...',
    size: 'medium',
    disabled: false,
    loading: false,
    debounce: 300
  },
  render: args => html\`
    <div style="width: 360px;">
      <org-search
        .value="\${args.value}"
        placeholder="\${args.placeholder || nothing}"
        size="\${args.size}"
        ?disabled="\${args.disabled}"
        ?loading="\${args.loading}"
        debounce="\${args.debounce}"
        @org-search:search="\${(e: CustomEvent) => console.log('search:', e.detail)}"
        @org-search:submit="\${(e: CustomEvent) => console.log('submit:', e.detail)}"
        @org-search:clear="\${() => console.log('cleared')}"
      ></org-search>
    </div>
  \`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => html\`
    <div style="width: 360px;">
      <org-search placeholder="Search vendors..."></org-search>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  render: () => html\`
    <div style="width: 360px;">
      <org-search value="enterprise components" placeholder="Search..."></org-search>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => html\`
    <div style="width: 360px;">
      <org-search value="searching..." loading placeholder="Search..."></org-search>
    </div>
  \`
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => html\`
    <div style="width: 360px; display: flex; flex-direction: column; gap: 16px;">
      <org-search size="small" placeholder="Small search"></org-search>
      <org-search size="medium" placeholder="Medium search"></org-search>
      <org-search size="large" placeholder="Large search"></org-search>
    </div>
  \`
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => html\`
    <div style="width: 360px;">
      <org-search disabled placeholder="Cannot search"></org-search>
    </div>
  \`
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Custom Placeholder',
  render: () => html\`
    <div style="width: 360px;">
      <org-search placeholder="Search by name, email, or ID..."></org-search>
    </div>
  \`
}`,...g.parameters?.docs?.source}}};const L=["Playground","Default","WithValue","Loading","Sizes","Disabled","CustomPlaceholder"];export{g as CustomPlaceholder,c as Default,u as Disabled,h as Loading,l as Playground,p as Sizes,d as WithValue,L as __namedExportsOrder,P as default};
