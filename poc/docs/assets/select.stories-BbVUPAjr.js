import{i as E,a as M,A as n,b as r}from"./iframe-D5HhjVZl.js";import{n as i,t as D}from"./property-Bv4SVM5X.js";import{r as z}from"./state-lOhfy5K9.js";import"./preload-helper-PPVm8Dsz.js";var P=Object.defineProperty,q=Object.getOwnPropertyDescriptor,a=(e,t,c,s)=>{for(var l=s>1?void 0:s?q(t,c):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(l=(s?d(t,c,l):d(l))||l);return s&&l&&P(t,c,l),l};let o=class extends M{constructor(){super(),this.label="",this.placeholder="Select an option",this.options=[],this.value="",this.values=[],this.multiple=!1,this.searchable=!1,this.disabled=!1,this.required=!1,this.size="medium",this.error="",this.helper="",this.name="",this._open=!1,this._search="",this._focusedIndex=-1,this._handleOutsideClick=e=>{this.contains(e.target)||(this._open=!1)},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}get _filteredOptions(){if(!this._search)return this.options;const e=this._search.toLowerCase();return this.options.filter(t=>t.label.toLowerCase().includes(e))}get _displayText(){return this.multiple?"":this.options.find(t=>t.value===this.value)?.label??""}_toggleOpen(){this.disabled||(this._open=!this._open,this._open||(this._search=""))}_selectOption(e){e.disabled||(this.multiple?(this.values.indexOf(e.value)===-1?this.values=[...this.values,e.value]:this.values=this.values.filter(c=>c!==e.value),this._internals.setFormValue(this.values.join(","))):(this.value=e.value,this._internals.setFormValue(this.value),this._open=!1,this._search=""),this.dispatchEvent(new CustomEvent("org-select:change",{bubbles:!0,composed:!0,detail:{value:this.value,values:this.values,option:e}})))}_removeTag(e,t){t.stopPropagation(),this.values=this.values.filter(c=>c!==e),this._internals.setFormValue(this.values.join(",")),this.dispatchEvent(new CustomEvent("org-select:change",{bubbles:!0,composed:!0,detail:{values:this.values}}))}_onKeydown(e){const t=this._filteredOptions.filter(c=>!c.disabled);if(e.key==="Enter"||e.key===" "){if(!this._open){this._open=!0;return}this._focusedIndex>=0&&this._selectOption(t[this._focusedIndex])}e.key==="Escape"&&(this._open=!1,this._search=""),e.key==="ArrowDown"&&(e.preventDefault(),this._open=!0,this._focusedIndex=Math.min(this._focusedIndex+1,t.length-1)),e.key==="ArrowUp"&&(e.preventDefault(),this._focusedIndex=Math.max(this._focusedIndex-1,0))}render(){const e=this._filteredOptions,t=[...new Set(e.map(s=>s.group))],c=["trigger",this._open?"open":"",this.error?"error":""].filter(Boolean).join(" ");return r`
      <div class="container ${this.size}">
        ${this.label?r`
          <label>
            ${this.label}
            ${this.required?r`<span class="required-star">*</span>`:n}
          </label>
        `:n}

        <button
          part="trigger"
          class="${c}"
          ?disabled="${this.disabled}"
          aria-haspopup="listbox"
          aria-expanded="${this._open}"
          @click="${this._toggleOpen}"
          @keydown="${this._onKeydown}"
          type="button"
        >
          ${this.multiple?r`
            <div class="tags">
              ${this.values.length>0?this.values.map(s=>{const l=this.options.find(p=>p.value===s);return l?r`
                      <span class="tag">
                        ${l.label}
                        <span class="tag-remove" @click="${p=>this._removeTag(s,p)}">✕</span>
                      </span>
                    `:n}):r`<span class="trigger-text placeholder">${this.placeholder}</span>`}
            </div>
          `:r`
            <span class="trigger-text ${this._displayText?"":"placeholder"}">
              ${this._displayText||this.placeholder}
            </span>
          `}
          <span class="chevron ${this._open?"open":""}">▼</span>
        </button>

        ${this._open?r`
          <div class="dropdown" part="dropdown" role="listbox">
            ${this.searchable?r`
              <div class="search-box">
                <input
                  type="text"
                  placeholder="Search..."
                  .value="${this._search}"
                  @input="${s=>{this._search=s.target.value,this._focusedIndex=-1}}"
                  @click="${s=>s.stopPropagation()}"
                  autofocus
                />
              </div>
            `:n}

            <div class="options-list">
              ${e.length===0?r`<div class="no-results">No results found</div>`:t.map(s=>r`
                    ${s?r`<div class="option-group-label">${s}</div>`:n}
                    ${e.filter(l=>l.group===s).map((l,p)=>{const d=this.multiple?this.values.includes(l.value):this.value===l.value;return r`
                        <div
                          part="option"
                          class="option ${d?"selected":""} ${l.disabled?"disabled":""} ${this._focusedIndex===p?"focused":""}"
                          role="option"
                          aria-selected="${d}"
                          @click="${()=>this._selectOption(l)}"
                        >
                          ${this.multiple?r`<span class="option-check">${d?"✓":""}</span>`:n}
                          ${l.label}
                        </div>
                      `})}
                  `)}
            </div>
          </div>
        `:n}

        ${this.error||this.helper?r`
          <span class="helper-text ${this.error?"error":""}">
            ${this.error||this.helper}
          </span>
        `:n}
      </div>
    `}};o.formAssociated=!0;o.styles=E`
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
  `;a([i({type:String})],o.prototype,"label",2);a([i({type:String})],o.prototype,"placeholder",2);a([i({type:Array})],o.prototype,"options",2);a([i({type:String})],o.prototype,"value",2);a([i({type:Array})],o.prototype,"values",2);a([i({type:Boolean})],o.prototype,"multiple",2);a([i({type:Boolean})],o.prototype,"searchable",2);a([i({type:Boolean,reflect:!0})],o.prototype,"disabled",2);a([i({type:Boolean})],o.prototype,"required",2);a([i({type:String})],o.prototype,"size",2);a([i({type:String})],o.prototype,"error",2);a([i({type:String})],o.prototype,"helper",2);a([i({type:String})],o.prototype,"name",2);a([z()],o.prototype,"_open",2);a([z()],o.prototype,"_search",2);a([z()],o.prototype,"_focusedIndex",2);o=a([D("org-select")],o);const u=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"in",label:"India"},{value:"jp",label:"Japan"}],O=[{value:"admin",label:"Administrator"},{value:"editor",label:"Editor"},{value:"viewer",label:"Viewer"},{value:"guest",label:"Guest",disabled:!0}],k=[{value:"react",label:"React",group:"Frontend"},{value:"vue",label:"Vue",group:"Frontend"},{value:"angular",label:"Angular",group:"Frontend"},{value:"svelte",label:"Svelte",group:"Frontend"},{value:"node",label:"Node.js",group:"Backend"},{value:"python",label:"Python",group:"Backend"},{value:"go",label:"Go",group:"Backend"},{value:"rust",label:"Rust",group:"Backend"}],C=[{value:"urgent",label:"Urgent"},{value:"bug",label:"Bug"},{value:"feature",label:"Feature"},{value:"improvement",label:"Improvement"},{value:"docs",label:"Documentation"},{value:"design",label:"Design"}],F={title:"Components/Select",component:"org-select",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
`}}},argTypes:{label:{control:"text",description:"Select label text"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Selected value (single mode)"},multiple:{control:"boolean",description:"Enable multi-select"},searchable:{control:"boolean",description:"Enable search/filter"},disabled:{control:"boolean",description:"Disable the select"},required:{control:"boolean",description:"Mark as required"},size:{control:"select",options:["small","medium","large"],description:"Size of the select",table:{defaultValue:{summary:"medium"}}},error:{control:"text",description:"Error message"},helper:{control:"text",description:"Helper text"}}},h={name:"Playground",args:{label:"Country",placeholder:"Select a country",value:"",multiple:!1,searchable:!1,disabled:!1,required:!1,size:"medium",error:"",helper:""},render:e=>r`
    <div style="width: 320px;">
      <org-select
        label="${e.label||n}"
        placeholder="${e.placeholder||n}"
        .value="${e.value}"
        .options="${u}"
        ?multiple="${e.multiple}"
        ?searchable="${e.searchable}"
        ?disabled="${e.disabled}"
        ?required="${e.required}"
        size="${e.size}"
        error="${e.error||n}"
        helper="${e.helper||n}"
        @org-select:change="${t=>console.log("change:",t.detail)}"
      ></org-select>
    </div>
  `},g={name:"Single Select",render:()=>r`
    <div style="width: 320px;">
      <org-select
        label="Role"
        placeholder="Choose a role"
        .options="${O}"
      ></org-select>
    </div>
  `},v={name:"Multi Select",render:()=>r`
    <div style="width: 320px;">
      <org-select
        label="Tags"
        placeholder="Select tags"
        multiple
        .options="${C}"
      ></org-select>
    </div>
  `},m={name:"Multi Select (Pre-selected)",render:()=>r`
    <div style="width: 320px;">
      <org-select
        label="Tags"
        placeholder="Select tags"
        multiple
        .values="${["bug","urgent"]}"
        .options="${C}"
      ></org-select>
    </div>
  `},b={name:"Searchable",render:()=>r`
    <div style="width: 320px;">
      <org-select
        label="Country"
        placeholder="Search countries"
        searchable
        .options="${u}"
      ></org-select>
    </div>
  `},f={name:"Searchable Multi",render:()=>r`
    <div style="width: 320px;">
      <org-select
        label="Technologies"
        placeholder="Search and select..."
        searchable
        multiple
        .options="${k}"
      ></org-select>
    </div>
  `},x={name:"Grouped Options",render:()=>r`
    <div style="width: 320px;">
      <org-select
        label="Technology"
        placeholder="Select a technology"
        .options="${k}"
      ></org-select>
    </div>
  `},y={name:"With Error",render:()=>r`
    <div style="width: 320px;">
      <org-select
        label="Role"
        placeholder="Choose a role"
        required
        error="Please select a role"
        .options="${O}"
      ></org-select>
    </div>
  `},$={name:"With Helper",render:()=>r`
    <div style="width: 320px;">
      <org-select
        label="Country"
        placeholder="Select your country"
        helper="We use this for tax calculations"
        .options="${u}"
      ></org-select>
    </div>
  `},S={name:"Sizes",render:()=>r`
    <div style="width: 320px; display: flex; flex-direction: column; gap: 16px;">
      <org-select label="Small" size="small" placeholder="Small" .options="${u}"></org-select>
      <org-select label="Medium" size="medium" placeholder="Medium" .options="${u}"></org-select>
      <org-select label="Large" size="large" placeholder="Large" .options="${u}"></org-select>
    </div>
  `},w={name:"Disabled",render:()=>r`
    <div style="width: 320px;">
      <org-select
        label="Country"
        placeholder="Cannot select"
        disabled
        .options="${u}"
      ></org-select>
    </div>
  `},_={name:"Disabled Options",render:()=>r`
    <div style="width: 320px;">
      <org-select
        label="Role"
        placeholder="Choose a role"
        helper="Guest role is currently unavailable"
        .options="${O}"
      ></org-select>
    </div>
  `};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    helper: ''
  },
  render: args => html\`
    <div style="width: 320px;">
      <org-select
        label="\${args.label || nothing}"
        placeholder="\${args.placeholder || nothing}"
        .value="\${args.value}"
        .options="\${countryOptions}"
        ?multiple="\${args.multiple}"
        ?searchable="\${args.searchable}"
        ?disabled="\${args.disabled}"
        ?required="\${args.required}"
        size="\${args.size}"
        error="\${args.error || nothing}"
        helper="\${args.helper || nothing}"
        @org-select:change="\${(e: CustomEvent) => console.log('change:', e.detail)}"
      ></org-select>
    </div>
  \`
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Single Select',
  render: () => html\`
    <div style="width: 320px;">
      <org-select
        label="Role"
        placeholder="Choose a role"
        .options="\${roleOptions}"
      ></org-select>
    </div>
  \`
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Multi Select',
  render: () => html\`
    <div style="width: 320px;">
      <org-select
        label="Tags"
        placeholder="Select tags"
        multiple
        .options="\${tagOptions}"
      ></org-select>
    </div>
  \`
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Multi Select (Pre-selected)',
  render: () => html\`
    <div style="width: 320px;">
      <org-select
        label="Tags"
        placeholder="Select tags"
        multiple
        .values="\${['bug', 'urgent']}"
        .options="\${tagOptions}"
      ></org-select>
    </div>
  \`
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Searchable',
  render: () => html\`
    <div style="width: 320px;">
      <org-select
        label="Country"
        placeholder="Search countries"
        searchable
        .options="\${countryOptions}"
      ></org-select>
    </div>
  \`
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Searchable Multi',
  render: () => html\`
    <div style="width: 320px;">
      <org-select
        label="Technologies"
        placeholder="Search and select..."
        searchable
        multiple
        .options="\${techOptions}"
      ></org-select>
    </div>
  \`
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Grouped Options',
  render: () => html\`
    <div style="width: 320px;">
      <org-select
        label="Technology"
        placeholder="Select a technology"
        .options="\${techOptions}"
      ></org-select>
    </div>
  \`
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Error',
  render: () => html\`
    <div style="width: 320px;">
      <org-select
        label="Role"
        placeholder="Choose a role"
        required
        error="Please select a role"
        .options="\${roleOptions}"
      ></org-select>
    </div>
  \`
}`,...y.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'With Helper',
  render: () => html\`
    <div style="width: 320px;">
      <org-select
        label="Country"
        placeholder="Select your country"
        helper="We use this for tax calculations"
        .options="\${countryOptions}"
      ></org-select>
    </div>
  \`
}`,...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => html\`
    <div style="width: 320px; display: flex; flex-direction: column; gap: 16px;">
      <org-select label="Small" size="small" placeholder="Small" .options="\${countryOptions}"></org-select>
      <org-select label="Medium" size="medium" placeholder="Medium" .options="\${countryOptions}"></org-select>
      <org-select label="Large" size="large" placeholder="Large" .options="\${countryOptions}"></org-select>
    </div>
  \`
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => html\`
    <div style="width: 320px;">
      <org-select
        label="Country"
        placeholder="Cannot select"
        disabled
        .options="\${countryOptions}"
      ></org-select>
    </div>
  \`
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Options',
  render: () => html\`
    <div style="width: 320px;">
      <org-select
        label="Role"
        placeholder="Choose a role"
        helper="Guest role is currently unavailable"
        .options="\${roleOptions}"
      ></org-select>
    </div>
  \`
}`,..._.parameters?.docs?.source}}};const G=["Playground","SingleSelect","MultiSelect","MultiSelectPreSelected","Searchable","SearchableMulti","GroupedOptions","WithError","WithHelper","Sizes","Disabled","DisabledOptions"];export{w as Disabled,_ as DisabledOptions,x as GroupedOptions,v as MultiSelect,m as MultiSelectPreSelected,h as Playground,b as Searchable,f as SearchableMulti,g as SingleSelect,S as Sizes,y as WithError,$ as WithHelper,G as __namedExportsOrder,F as default};
