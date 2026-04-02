import{i as f,a as b,A as w,b as o}from"./iframe-D5HhjVZl.js";import{n as s,t as y}from"./property-Bv4SVM5X.js";import"./preload-helper-PPVm8Dsz.js";var k=Object.defineProperty,$=Object.getOwnPropertyDescriptor,t=(e,r,u,l)=>{for(var n=l>1?void 0:l?$(r,u):r,v=e.length-1,x;v>=0;v--)(x=e[v])&&(n=(l?x(r,u,n):x(n))||n);return l&&n&&k(r,u,n),n};let d=class extends b{constructor(){super(...arguments),this.size="medium",this.color="",this.label="Loading..."}render(){return o`
      <div
        class="spinner-wrap ${this.size}"
        role="status"
        aria-label="${this.label}"
        style="${this.color?`--org-spinner-color: ${this.color}`:""}"
      >
        <div class="spinner" part="spinner"></div>
        ${this.label&&this.size!=="small"?o`<span class="label">${this.label}</span>`:w}
      </div>
    `}};d.styles=f`
    :host { display: inline-flex; align-items: center; justify-content: center; }

    .spinner-wrap {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .spinner {
      border-radius: 50%;
      border-style: solid;
      border-color: var(--org-spinner-track, #e0e0e0);
      border-top-color: var(--org-spinner-color, #1976d2);
      border-right-color: var(--org-spinner-color, #1976d2);
      animation: org-spin 0.65s linear infinite;
      flex-shrink: 0;
    }

    .small  .spinner { width: 16px; height: 16px; border-width: 2px; }
    .medium .spinner { width: 24px; height: 24px; border-width: 3px; }
    .large  .spinner { width: 36px; height: 36px; border-width: 3px; }
    .xlarge .spinner { width: 48px; height: 48px; border-width: 4px; }

    .label {
      font-size: var(--org-font-size-sm, 12px);
      color: var(--org-color-text-secondary, #616161);
      font-family: var(--org-font-family, sans-serif);
    }

    @keyframes org-spin {
      to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner { animation-duration: 2s; }
    }
  `;t([s({type:String})],d.prototype,"size",2);t([s({type:String})],d.prototype,"color",2);t([s({type:String})],d.prototype,"label",2);d=t([y("org-spinner")],d);let a=class extends b{constructor(){super(...arguments),this.variant="text",this.width="",this.height="",this.lines=3,this.animated=!0}render(){const e=this.animated?"animated":"";if(this.variant==="text")return o`
        <div class="text-lines">
          ${Array.from({length:this.lines},()=>o`
            <div
              class="skeleton text-line ${e}"
              style="${this.width?`width: ${this.width}`:""}"
            ></div>
          `)}
        </div>
      `;if(this.variant==="circle"){const r=this.width||this.height||"40px";return o`
        <div
          class="skeleton circle ${e}"
          style="width: ${r}; height: ${r};"
        ></div>
      `}return this.variant==="card"?o`
        <div class="card-skeleton ${e}" style="${this.width?`width: ${this.width}`:""}">
          <div class="card-header">
            <div class="card-avatar"></div>
            <div class="card-title-block">
              <div class="card-title-line"></div>
              <div class="card-title-line short"></div>
            </div>
          </div>
          <div class="card-image"></div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            <div class="card-body-line"></div>
            <div class="card-body-line"></div>
            <div class="card-body-line short"></div>
          </div>
        </div>
      `:o`
      <div
        class="skeleton ${e}"
        style="
          width: ${this.width||"100%"};
          height: ${this.height||"20px"};
          border-radius: var(--org-radius-md, 6px);
        "
      ></div>
    `}};a.styles=f`
    :host { display: block; font-family: var(--org-font-family, sans-serif); }

    .skeleton {
      background: var(--org-skeleton-base, #eeeeee);
      border-radius: var(--org-radius-sm, 4px);
      overflow: hidden;
      position: relative;
    }

    .animated::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--org-skeleton-shine, #f5f5f5) 50%,
        transparent 100%
      );
      animation: org-shimmer 1.5s infinite;
    }

    @keyframes org-shimmer {
      0%   { transform: translateX(-100%); }
      100% { transform: translateX(100%);  }
    }

    @media (prefers-reduced-motion: reduce) {
      .animated::after { display: none; }
    }

    /* Text lines */
    .text-lines { display: flex; flex-direction: column; gap: 8px; }
    .text-line { height: 14px; border-radius: var(--org-radius-sm, 4px); }
    .text-line:last-child { width: 60%; }

    /* Circle */
    .circle { border-radius: 50%; }

    /* Card */
    .card-skeleton { border-radius: var(--org-radius-lg, 8px); padding: 16px; display: flex; flex-direction: column; gap: 12px; background: var(--org-skeleton-base, #eeeeee); }
    .card-header { display: flex; gap: 12px; align-items: center; }
    .card-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--org-skeleton-shine, #f5f5f5); flex-shrink: 0; }
    .card-title-block { flex: 1; display: flex; flex-direction: column; gap: 6px; }
    .card-title-line { height: 14px; background: var(--org-skeleton-shine, #f5f5f5); border-radius: 4px; }
    .card-title-line.short { width: 55%; }
    .card-body-line { height: 12px; background: var(--org-skeleton-shine, #f5f5f5); border-radius: 4px; }
    .card-body-line.short { width: 70%; }
    .card-image { height: 120px; background: var(--org-skeleton-shine, #f5f5f5); border-radius: var(--org-radius-md, 6px); }
  `;t([s({type:String})],a.prototype,"variant",2);t([s({type:String})],a.prototype,"width",2);t([s({type:String})],a.prototype,"height",2);t([s({type:Number})],a.prototype,"lines",2);t([s({type:Boolean})],a.prototype,"animated",2);a=t([y("org-skeleton")],a);const P={title:"Components/OrgSpinner",component:"org-spinner",parameters:{layout:"centered",docs:{description:{component:"Auto-generated story. Add a `spinner.mdx` file for full docs."}}},argTypes:{size:{control:"select",options:["small","medium","large","xlarge"],description:"Variant options"},color:{control:"text"},label:{control:"text"},variant:{control:"select",options:["text","circle","rect","card"],description:"Variant options"},width:{control:"text"},height:{control:"text"},lines:{control:"number"},animated:{control:"boolean"}},render:e=>{const r=document.createElement("org-spinner");return e.size!==void 0&&(r.size=e.size),e.color!==void 0&&(r.color=e.color),e.label!==void 0&&(r.label=e.label),e.variant!==void 0&&(r.variant=e.variant),e.width!==void 0&&(r.width=e.width),e.height!==void 0&&(r.height=e.height),e.lines!==void 0&&(r.lines=e.lines),e.animated!==void 0&&(r.animated=e.animated),r.textContent=r.textContent||"OrgSpinner",r}},i={name:"Playground",args:{size:"medium",color:"",label:"Loading...",variant:"text",width:"",height:"",lines:3,animated:!0}},c={args:{...i.args,disabled:!0}},p={args:{...i.args,variant:"text"},name:"Text"},h={args:{...i.args,variant:"circle"},name:"Circle"},g={args:{...i.args,variant:"rect"},name:"Rect"},m={args:{...i.args,variant:"card"},name:"Card"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: "medium",
    color: '',
    label: 'Loading...',
    variant: "text",
    width: '',
    height: '',
    lines: 3,
    animated: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    variant: 'text'
  },
  name: 'Text'
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    variant: 'circle'
  },
  name: 'Circle'
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    variant: 'rect'
  },
  name: 'Rect'
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    variant: 'card'
  },
  name: 'Card'
}`,...m.parameters?.docs?.source}}};const O=["Playground","Disabled","Text","Circle","Rect","Card"];export{m as Card,h as Circle,c as Disabled,i as Playground,g as Rect,p as Text,O as __namedExportsOrder,P as default};
