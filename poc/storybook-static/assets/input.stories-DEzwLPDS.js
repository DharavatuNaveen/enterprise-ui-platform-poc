import{i as z,a as P,A as a,b as o}from"./iframe-D5HhjVZl.js";import{n as s,t as C}from"./property-Bv4SVM5X.js";import{r as _}from"./state-lOhfy5K9.js";import{e as E}from"./query-BYlH-2gt.js";import"./preload-helper-PPVm8Dsz.js";var q=Object.defineProperty,W=Object.getOwnPropertyDescriptor,t=(e,i,n,p)=>{for(var l=p>1?void 0:p?W(i,n):i,S=e.length-1,$;S>=0;S--)($=e[S])&&(l=(p?$(i,n,l):$(l))||l);return p&&l&&q(i,n,l),l};let r=class extends P{constructor(){super(),this.label="",this.value="",this.placeholder="",this.type="text",this.name="",this.helper="",this.error="",this.success="",this.size="medium",this.disabled=!1,this.required=!1,this.readonly=!1,this.pattern="",this.autocomplete="",this._hasPrefix=!1,this._hasSuffix=!1,this._internals=this.attachInternals()}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}focus(){this._input?.focus()}blur(){this._input?.blur()}_onInput(e){const i=e.target;this.value=i.value,this._internals.setFormValue(this.value),this.dispatchEvent(new CustomEvent("org-input:input",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_onChange(e){const i=e.target;this.value=i.value,this.dispatchEvent(new CustomEvent("org-input:change",{bubbles:!0,composed:!0,detail:{value:this.value}}))}_onFocus(){this.dispatchEvent(new CustomEvent("org-input:focus",{bubbles:!0,composed:!0}))}_onBlur(){this.dispatchEvent(new CustomEvent("org-input:blur",{bubbles:!0,composed:!0}))}get _wrapperClass(){const e=["input-wrapper"];return this.error&&e.push("error"),this.success&&!this.error&&e.push("success"),this.disabled&&e.push("disabled"),this._hasPrefix&&e.push("has-prefix"),this._hasSuffix&&e.push("has-suffix"),e.join(" ")}get _containerClass(){return this.size}_onPrefixSlotChange(e){const i=e.target;this._hasPrefix=i.assignedNodes({flatten:!0}).length>0}_onSuffixSlotChange(e){const i=e.target;this._hasSuffix=i.assignedNodes({flatten:!0}).length>0}render(){const e=this.value.length,i=this.maxlength!==void 0&&e>this.maxlength,n=this.error||this.success||this.helper,p=this.error?"error":this.success?"success":"";return o`
      <div class="container ${this._containerClass}" part="container">

        ${this.label?o`
          <label part="label">
            ${this.label}
            ${this.required?o`<span class="required-star" aria-hidden="true">*</span>`:a}
          </label>
        `:a}

        <div class="${this._wrapperClass}">
          <span class="slot-prefix">
            <slot name="prefix" @slotchange="${this._onPrefixSlotChange}"></slot>
          </span>

          <input
            part="input"
            type="${this.type}"
            name="${this.name||a}"
            .value="${this.value}"
            placeholder="${this.placeholder||a}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            ?readonly="${this.readonly}"
            maxlength="${this.maxlength??a}"
            minlength="${this.minlength??a}"
            pattern="${this.pattern||a}"
            autocomplete="${this.autocomplete||a}"
            aria-invalid="${this.error?"true":a}"
            aria-describedby="${n?"helper":a}"
            @input="${this._onInput}"
            @change="${this._onChange}"
            @focus="${this._onFocus}"
            @blur="${this._onBlur}"
          />

          <span class="slot-suffix">
            <slot name="suffix" @slotchange="${this._onSuffixSlotChange}"></slot>
          </span>
        </div>

        <div style="display:flex; align-items:center;">
          ${n?o`
            <span id="helper" class="helper-text ${p}" part="helper">
              ${n}
            </span>
          `:a}

          ${this.maxlength!==void 0?o`
            <span class="char-count ${i?"over":""}">
              ${e}/${this.maxlength}
            </span>
          `:a}
        </div>

      </div>
    `}};r.formAssociated=!0;r.styles=z`
    :host {
      display: block;
      font-family: var(--org-font-family, sans-serif);
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    label {
      font-size: var(--org-font-size-sm, 12px);
      font-weight: var(--org-font-weight-medium, 500);
      color: var(--org-input-label-color, #616161);
    }

    label .required-star {
      color: var(--org-color-danger, #d32f2f);
      margin-left: 2px;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      border: 1px solid var(--org-input-border, #e0e0e0);
      border-radius: var(--org-input-radius, 6px);
      background: var(--org-input-bg, #fff);
      transition: border-color var(--org-transition-fast, 0.15s ease),
                  box-shadow var(--org-transition-fast, 0.15s ease);
      overflow: hidden;
    }

    /* Sizes */
    .small  .input-wrapper { min-height: 30px; }
    .medium .input-wrapper { min-height: 36px; }
    .large  .input-wrapper { min-height: 44px; }

    .input-wrapper:has(input:focus) {
      border-color: var(--org-input-border-focus, #1976d2);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--org-input-border-focus, #1976d2) 15%, transparent);
    }

    .input-wrapper.error {
      border-color: var(--org-input-border-error, #d32f2f);
    }

    .input-wrapper.error:has(input:focus) {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--org-input-border-error, #d32f2f) 15%, transparent);
    }

    .input-wrapper.success {
      border-color: var(--org-input-border-success, #2e7d32);
    }

    .input-wrapper.disabled {
      opacity: 0.55;
      cursor: not-allowed;
      background: var(--org-color-gray-100, #f5f5f5);
    }

    input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      color: var(--org-input-color, #212121);
      font-family: inherit;
      width: 100%;
    }

    .small  input { padding: 5px 10px;  font-size: var(--org-font-size-sm, 12px); }
    .medium input { padding: 8px 12px;  font-size: var(--org-font-size-md, 14px); }
    .large  input { padding: 11px 14px; font-size: var(--org-font-size-lg, 16px); }

    input::placeholder {
      color: var(--org-input-placeholder, #9e9e9e);
    }

    input:disabled {
      cursor: not-allowed;
    }

    .slot-prefix, .slot-suffix {
      display: flex;
      align-items: center;
      color: var(--org-color-gray-500, #9e9e9e);
      flex-shrink: 0;
    }

    .small  .slot-prefix, .small  .slot-suffix { padding: 0 6px; }
    .medium .slot-prefix, .medium .slot-suffix { padding: 0 10px; }
    .large  .slot-prefix, .large  .slot-suffix { padding: 0 12px; }

    .slot-prefix ::slotted(*),
    .slot-suffix ::slotted(*) {
      display: flex;
      align-items: center;
      font-size: 16px;
    }

    /* no left padding on input when prefix slot is used */
    .has-prefix input { padding-left: 0; }
    .has-suffix input { padding-right: 0; }

    .helper-text {
      font-size: var(--org-font-size-xs, 11px);
      color: var(--org-input-helper-color, #616161);
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .helper-text.error   { color: var(--org-input-error-color, #d32f2f); }
    .helper-text.success { color: var(--org-input-success-color, #2e7d32); }

    .char-count {
      font-size: var(--org-font-size-xs, 11px);
      color: var(--org-color-gray-500, #9e9e9e);
      text-align: right;
      margin-left: auto;
    }

    .char-count.over { color: var(--org-input-error-color, #d32f2f); }
  `;t([s({type:String})],r.prototype,"label",2);t([s({type:String})],r.prototype,"value",2);t([s({type:String})],r.prototype,"placeholder",2);t([s({type:String})],r.prototype,"type",2);t([s({type:String})],r.prototype,"name",2);t([s({type:String})],r.prototype,"helper",2);t([s({type:String})],r.prototype,"error",2);t([s({type:String})],r.prototype,"success",2);t([s({type:String})],r.prototype,"size",2);t([s({type:Boolean,reflect:!0})],r.prototype,"disabled",2);t([s({type:Boolean,reflect:!0})],r.prototype,"required",2);t([s({type:Boolean})],r.prototype,"readonly",2);t([s({type:Number})],r.prototype,"maxlength",2);t([s({type:Number})],r.prototype,"minlength",2);t([s({type:String})],r.prototype,"pattern",2);t([s({type:String})],r.prototype,"autocomplete",2);t([_()],r.prototype,"_hasPrefix",2);t([_()],r.prototype,"_hasSuffix",2);t([E("input")],r.prototype,"_input",2);r=t([C("org-input")],r);const F={title:"Components/Input",component:"org-input",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
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
`}}},argTypes:{label:{control:"text",description:"Input label text"},value:{control:"text",description:"Current input value"},placeholder:{control:"text",description:"Placeholder text"},type:{control:"select",options:["text","email","password","number","search","tel"],description:"Input type",table:{defaultValue:{summary:"text"}}},helper:{control:"text",description:"Helper text shown below input"},error:{control:"text",description:"Error message (shows red border)"},success:{control:"text",description:"Success message (shows green border)"},size:{control:"select",options:["small","medium","large"],description:"Input size",table:{defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Whether the input is disabled"},required:{control:"boolean",description:"Whether the input is required"},readonly:{control:"boolean",description:"Whether the input is read-only"},maxlength:{control:"number",description:"Maximum character length (shows counter when set)"}}},d={name:"Playground",args:{label:"Full name",value:"",placeholder:"Jane Doe",type:"text",helper:"",error:"",success:"",size:"medium",disabled:!1,required:!1,readonly:!1},render:e=>o`
    <div style="width: 320px;">
      <org-input
        label="${e.label||a}"
        .value="${e.value}"
        placeholder="${e.placeholder||a}"
        type="${e.type}"
        helper="${e.helper||a}"
        error="${e.error||a}"
        success="${e.success||a}"
        size="${e.size}"
        ?disabled="${e.disabled}"
        ?required="${e.required}"
        ?readonly="${e.readonly}"
        maxlength="${e.maxlength??a}"
      ></org-input>
    </div>
  `},u={name:"Error State",render:()=>o`
    <div style="width: 320px;">
      <org-input
        label="Email"
        type="email"
        value="invalid-email"
        error="Please enter a valid email address"
      ></org-input>
    </div>
  `},c={name:"Success State",render:()=>o`
    <div style="width: 320px;">
      <org-input
        label="Username"
        value="john_doe"
        success="Username is available!"
      ></org-input>
    </div>
  `},h={name:"With Helper Text",render:()=>o`
    <div style="width: 320px;">
      <org-input
        label="Password"
        type="password"
        placeholder="Enter password"
        helper="Must be at least 8 characters"
      ></org-input>
    </div>
  `},m={name:"Character Counter",render:()=>o`
    <div style="width: 320px;">
      <org-input
        label="Bio"
        placeholder="Tell us about yourself"
        maxlength="160"
        helper="Short bio for your profile"
      ></org-input>
    </div>
  `},g={name:"Sizes",render:()=>o`
    <div style="width: 320px; display: flex; flex-direction: column; gap: 16px;">
      <org-input label="Small" size="small" placeholder="Small input"></org-input>
      <org-input label="Medium" size="medium" placeholder="Medium input"></org-input>
      <org-input label="Large" size="large" placeholder="Large input"></org-input>
    </div>
  `},f={name:"With Prefix Icon",render:()=>o`
    <div style="width: 320px;">
      <org-input label="Search" placeholder="Search vendors...">
        <span slot="prefix">🔍</span>
      </org-input>
    </div>
  `},x={name:"With Suffix Icon",render:()=>o`
    <div style="width: 320px;">
      <org-input label="Website" placeholder="example.com">
        <span slot="suffix">🌐</span>
      </org-input>
    </div>
  `},b={name:"Prefix & Suffix",render:()=>o`
    <div style="width: 320px;">
      <org-input label="Amount" type="number" placeholder="0.00">
        <span slot="prefix">$</span>
        <span slot="suffix">USD</span>
      </org-input>
    </div>
  `},y={name:"Required",render:()=>o`
    <div style="width: 320px;">
      <org-input
        label="Email"
        type="email"
        placeholder="you@company.com"
        required
      ></org-input>
    </div>
  `},v={name:"Disabled",render:()=>o`
    <div style="width: 320px;">
      <org-input
        label="Disabled field"
        value="Cannot edit this"
        disabled
      ></org-input>
    </div>
  `},w={name:"Input Types",render:()=>o`
    <div style="width: 320px; display: flex; flex-direction: column; gap: 16px;">
      <org-input label="Text" type="text" placeholder="Plain text"></org-input>
      <org-input label="Email" type="email" placeholder="you@example.com"></org-input>
      <org-input label="Password" type="password" placeholder="Enter password"></org-input>
      <org-input label="Number" type="number" placeholder="0"></org-input>
      <org-input label="Telephone" type="tel" placeholder="+1 (555) 000-0000"></org-input>
    </div>
  `};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    readonly: false
  },
  render: args => html\`
    <div style="width: 320px;">
      <org-input
        label="\${args.label || nothing}"
        .value="\${args.value}"
        placeholder="\${args.placeholder || nothing}"
        type="\${args.type}"
        helper="\${args.helper || nothing}"
        error="\${args.error || nothing}"
        success="\${args.success || nothing}"
        size="\${args.size}"
        ?disabled="\${args.disabled}"
        ?required="\${args.required}"
        ?readonly="\${args.readonly}"
        maxlength="\${args.maxlength ?? nothing}"
      ></org-input>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Error State',
  render: () => html\`
    <div style="width: 320px;">
      <org-input
        label="Email"
        type="email"
        value="invalid-email"
        error="Please enter a valid email address"
      ></org-input>
    </div>
  \`
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Success State',
  render: () => html\`
    <div style="width: 320px;">
      <org-input
        label="Username"
        value="john_doe"
        success="Username is available!"
      ></org-input>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Helper Text',
  render: () => html\`
    <div style="width: 320px;">
      <org-input
        label="Password"
        type="password"
        placeholder="Enter password"
        helper="Must be at least 8 characters"
      ></org-input>
    </div>
  \`
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Character Counter',
  render: () => html\`
    <div style="width: 320px;">
      <org-input
        label="Bio"
        placeholder="Tell us about yourself"
        maxlength="160"
        helper="Short bio for your profile"
      ></org-input>
    </div>
  \`
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => html\`
    <div style="width: 320px; display: flex; flex-direction: column; gap: 16px;">
      <org-input label="Small" size="small" placeholder="Small input"></org-input>
      <org-input label="Medium" size="medium" placeholder="Medium input"></org-input>
      <org-input label="Large" size="large" placeholder="Large input"></org-input>
    </div>
  \`
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Prefix Icon',
  render: () => html\`
    <div style="width: 320px;">
      <org-input label="Search" placeholder="Search vendors...">
        <span slot="prefix">🔍</span>
      </org-input>
    </div>
  \`
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With Suffix Icon',
  render: () => html\`
    <div style="width: 320px;">
      <org-input label="Website" placeholder="example.com">
        <span slot="suffix">🌐</span>
      </org-input>
    </div>
  \`
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Prefix & Suffix',
  render: () => html\`
    <div style="width: 320px;">
      <org-input label="Amount" type="number" placeholder="0.00">
        <span slot="prefix">$</span>
        <span slot="suffix">USD</span>
      </org-input>
    </div>
  \`
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Required',
  render: () => html\`
    <div style="width: 320px;">
      <org-input
        label="Email"
        type="email"
        placeholder="you@company.com"
        required
      ></org-input>
    </div>
  \`
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => html\`
    <div style="width: 320px;">
      <org-input
        label="Disabled field"
        value="Cannot edit this"
        disabled
      ></org-input>
    </div>
  \`
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Input Types',
  render: () => html\`
    <div style="width: 320px; display: flex; flex-direction: column; gap: 16px;">
      <org-input label="Text" type="text" placeholder="Plain text"></org-input>
      <org-input label="Email" type="email" placeholder="you@example.com"></org-input>
      <org-input label="Password" type="password" placeholder="Enter password"></org-input>
      <org-input label="Number" type="number" placeholder="0"></org-input>
      <org-input label="Telephone" type="tel" placeholder="+1 (555) 000-0000"></org-input>
    </div>
  \`
}`,...w.parameters?.docs?.source}}};const U=["Playground","ErrorState","SuccessState","WithHelper","CharacterCounter","Sizes","WithPrefix","WithSuffix","WithPrefixAndSuffix","Required","Disabled","InputTypes"];export{m as CharacterCounter,v as Disabled,u as ErrorState,w as InputTypes,d as Playground,y as Required,g as Sizes,c as SuccessState,h as WithHelper,f as WithPrefix,b as WithPrefixAndSuffix,x as WithSuffix,U as __namedExportsOrder,F as default};
