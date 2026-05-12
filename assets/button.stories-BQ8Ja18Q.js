import{i as z,a as $,A as S,b as r}from"./iframe-8TPnJ_Fq.js";import{n as a,t as k}from"./property-D7Ek9MnM.js";import"./preload-helper-PPVm8Dsz.js";var D=Object.defineProperty,P=Object.getOwnPropertyDescriptor,e=(t,i,h,s)=>{for(var n=s>1?void 0:s?P(i,h):i,f=t.length-1,x;f>=0;f--)(x=t[f])&&(n=(s?x(i,h,n):x(n))||n);return s&&n&&D(i,h,n),n};let o=class extends ${constructor(){super(...arguments),this.variant="primary",this.size="medium",this.disabled=!1,this.loading=!1,this.ariaLabel="",this.type="button"}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopPropagation();return}this.dispatchEvent(new CustomEvent("org-button:click",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}render(){return r`
      <button
        part="button"
        class="${this.variant} ${this.size}"
        ?disabled="${this.disabled||this.loading}"
        aria-label="${this.ariaLabel||S}"
        aria-busy="${this.loading?"true":S}"
        type="${this.type}"
        @click="${this.handleClick}"
      >
        ${this.loading?r`<span class="spinner" aria-hidden="true"></span>`:r`<span class="icon-slot"><slot name="icon"></slot></span>`}
        <slot></slot>
      </button>
    `}};o.styles=z`
    :host {
      display: inline-block;
      font-family: var(--org-font-family, sans-serif);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    button {
      border: none;
      border-radius: var(--org-btn-radius, 6px);
      cursor: pointer;
      font-family: inherit;
      font-weight: var(--org-font-weight-medium, 500);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: background var(--org-transition-normal, 0.2s ease),
                  opacity var(--org-transition-fast, 0.15s ease);
      white-space: nowrap;
      line-height: 1;
      position: relative;
    }

    /* === Sizes === */
    .small  { padding: 6px 12px;  font-size: var(--org-font-size-sm, 12px);  min-height: 30px; }
    .medium { padding: 9px 16px;  font-size: var(--org-font-size-md, 14px);  min-height: 36px; }
    .large  { padding: 12px 22px; font-size: var(--org-font-size-lg, 16px);  min-height: 44px; }

    /* === Variants === */
    .primary {
      background: var(--org-btn-primary-bg, #1976d2);
      color: var(--org-btn-primary-color, #fff);
    }
    .primary:hover:not(:disabled) {
      background: var(--org-btn-primary-bg-hover, #1565c0);
    }

    .secondary {
      background: var(--org-btn-secondary-bg, #e0e0e0);
      color: var(--org-btn-secondary-color, #212121);
    }
    .secondary:hover:not(:disabled) {
      background: var(--org-btn-secondary-bg-hover, #d5d5d5);
    }

    .danger {
      background: var(--org-btn-danger-bg, #d32f2f);
      color: var(--org-btn-danger-color, #fff);
    }
    .danger:hover:not(:disabled) {
      background: var(--org-btn-danger-bg-hover, #b71c1c);
    }

    .ghost {
      background: var(--org-btn-ghost-bg, transparent);
      color: var(--org-btn-ghost-color, #1976d2);
      border: 1px solid currentColor;
    }
    .ghost:hover:not(:disabled) {
      background: var(--org-btn-ghost-bg-hover, #e3f2fd);
    }

    /* === States === */
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    button:focus-visible {
      outline: 2px solid var(--org-btn-focus-ring, #1976d2);
      outline-offset: 2px;
    }

    /* === Spinner === */
    .spinner {
      width: 1em;
      height: 1em;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-right-color: currentColor;
      animation: org-spin 0.65s linear infinite;
      flex-shrink: 0;
    }

    @keyframes org-spin {
      to { transform: rotate(360deg); }
    }

    .icon-slot ::slotted(*) {
      display: flex;
      align-items: center;
    }
  `;e([a({type:String})],o.prototype,"variant",2);e([a({type:String})],o.prototype,"size",2);e([a({type:Boolean,reflect:!0})],o.prototype,"disabled",2);e([a({type:Boolean,reflect:!0})],o.prototype,"loading",2);e([a({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel",2);e([a({type:String})],o.prototype,"type",2);o=e([k("org-button")],o);const L={title:"Components/Button",component:"org-button",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
npm i ui-components-framework

<org-button variant="primary">Submit</org-button>

\`\`\`
`}}},argTypes:{variant:{control:"select",options:["primary","secondary","danger","ghost"],description:"Visual variant of the button",table:{defaultValue:{summary:"primary"}}},onClick:{action:"clicked"},size:{control:"select",options:["small","medium","large"],description:"Size of the button",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Whether the button shows a loading spinner",table:{defaultValue:{summary:"false"}}},type:{control:"select",options:["button","submit","reset"],description:"The HTML button type attribute",table:{defaultValue:{summary:"button"}}},label:{control:"text",description:"Button text content"}}},d={name:"Playground",args:{variant:"primary",size:"medium",disabled:!1,loading:!1,type:"button",label:"Click me"},render:t=>r`
    <org-button
      variant="${t.variant}"
      size="${t.size}"
      ?disabled="${t.disabled}"
      ?loading="${t.loading}"
      type="${t.type}"
      @click="${t.onClick}"
    >${t.label}</org-button>
  `},l={name:"Primary",render:()=>r`<org-button variant="primary">Primary Button</org-button>`},g={name:"Secondary",render:()=>r`<org-button variant="secondary">Secondary Button</org-button>`},u={name:"Danger",render:()=>r`<org-button variant="danger">Danger Button</org-button>`},c={name:"Ghost",render:()=>r`<org-button variant="ghost">Ghost Button</org-button>`},p={name:"All Variants",render:()=>r`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <org-button variant="primary">Primary</org-button>
      <org-button variant="secondary">Secondary</org-button>
      <org-button variant="danger">Danger</org-button>
      <org-button variant="ghost">Ghost</org-button>
    </div>
  `},b={name:"Sizes",render:()=>r`
    <div style="display: flex; gap: 12px; align-items: center;">
      <org-button size="small">Small</org-button>
      <org-button size="medium">Medium</org-button>
      <org-button size="large">Large</org-button>
    </div>
  `},m={name:"Loading",render:()=>r`
    <div style="display: flex; gap: 12px; align-items: center;">
      <org-button variant="primary" loading>Saving...</org-button>
      <org-button variant="secondary" loading>Loading</org-button>
      <org-button variant="danger" loading>Deleting</org-button>
    </div>
  `},y={name:"Disabled",render:()=>r`
    <div style="display: flex; gap: 12px; align-items: center;">
      <org-button variant="primary" disabled>Primary</org-button>
      <org-button variant="secondary" disabled>Secondary</org-button>
      <org-button variant="danger" disabled>Danger</org-button>
      <org-button variant="ghost" disabled>Ghost</org-button>
    </div>
  `},v={name:"With Icon",render:()=>r`
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
  `};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    type: 'button',
    label: 'Click me'
  },
  render: args => html\`
    <org-button
      variant="\${args.variant}"
      size="\${args.size}"
      ?disabled="\${args.disabled}"
      ?loading="\${args.loading}"
      type="\${args.type}"
      @click="\${args.onClick}"
    >\${args.label}</org-button>
  \`
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  render: () => html\`<org-button variant="primary">Primary Button</org-button>\`
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Secondary',
  render: () => html\`<org-button variant="secondary">Secondary Button</org-button>\`
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Danger',
  render: () => html\`<org-button variant="danger">Danger Button</org-button>\`
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Ghost',
  render: () => html\`<org-button variant="ghost">Ghost Button</org-button>\`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => html\`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <org-button variant="primary">Primary</org-button>
      <org-button variant="secondary">Secondary</org-button>
      <org-button variant="danger">Danger</org-button>
      <org-button variant="ghost">Ghost</org-button>
    </div>
  \`
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => html\`
    <div style="display: flex; gap: 12px; align-items: center;">
      <org-button size="small">Small</org-button>
      <org-button size="medium">Medium</org-button>
      <org-button size="large">Large</org-button>
    </div>
  \`
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => html\`
    <div style="display: flex; gap: 12px; align-items: center;">
      <org-button variant="primary" loading>Saving...</org-button>
      <org-button variant="secondary" loading>Loading</org-button>
      <org-button variant="danger" loading>Deleting</org-button>
    </div>
  \`
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => html\`
    <div style="display: flex; gap: 12px; align-items: center;">
      <org-button variant="primary" disabled>Primary</org-button>
      <org-button variant="secondary" disabled>Secondary</org-button>
      <org-button variant="danger" disabled>Danger</org-button>
      <org-button variant="ghost" disabled>Ghost</org-button>
    </div>
  \`
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Icon',
  render: () => html\`
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
  \`
}`,...v.parameters?.docs?.source}}};const V=["Playground","Primary","Secondary","Danger","Ghost","AllVariants","Sizes","Loading","Disabled","WithIcon"];export{p as AllVariants,u as Danger,y as Disabled,c as Ghost,m as Loading,d as Playground,l as Primary,g as Secondary,b as Sizes,v as WithIcon,V as __namedExportsOrder,L as default};
