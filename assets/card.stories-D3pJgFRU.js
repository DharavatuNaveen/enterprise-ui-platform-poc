import{i as y,a as w,A as v,b as a}from"./iframe-8TPnJ_Fq.js";import{n as d,t as b}from"./property-D7Ek9MnM.js";import"./preload-helper-PPVm8Dsz.js";var u=Object.defineProperty,z=Object.getOwnPropertyDescriptor,t=(e,s,h,i)=>{for(var o=i>1?void 0:i?z(s,h):s,x=e.length-1,f;x>=0;x--)(f=e[x])&&(o=(i?f(s,h,o):f(o))||o);return i&&o&&u(s,h,o),o};let r=class extends w{constructor(){super(...arguments),this.size="medium",this.shadow="md",this.variant="default",this.clickable=!1,this.disabled=!1}_onClick(e){!this.clickable||this.disabled||this.dispatchEvent(new CustomEvent("org-card:click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}render(){const e=["card",`size-${this.size}`,`shadow-${this.shadow}`,`variant-${this.variant}`,this.clickable?"clickable":""].filter(Boolean).join(" ");return a`
      <div
        class="${e}"
        part="card"
        role="${this.clickable?"button":v}"
        tabindex="${this.clickable?"0":v}"
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
    `}};r.styles=y`
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
  `;t([d({type:String})],r.prototype,"size",2);t([d({type:String})],r.prototype,"shadow",2);t([d({type:String})],r.prototype,"variant",2);t([d({type:Boolean,reflect:!0})],r.prototype,"clickable",2);t([d({type:Boolean,reflect:!0})],r.prototype,"disabled",2);r=t([b("org-card")],r);const S={title:"Components/Card",component:"org-card",tags:["autodocs"],parameters:{docs:{description:{component:`
A versatile card container with shadow, size variants, and flexible slot layout.

\`\`\`html
<org-card shadow="md" variant="default" size="medium">
  <span slot="header"><strong>Card Title</strong></span>
  <p>Card body content goes here.</p>
  <span slot="footer">Footer actions</span>
</org-card>
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["small","medium","large"],description:"Controls internal padding"},shadow:{control:"select",options:["none","sm","md","lg"],description:"Shadow depth of the card"},variant:{control:"select",options:["default","outlined","elevated"],description:"Visual style of the card"},clickable:{control:"boolean",description:"Enables hover/focus interaction and fires org-card:click"},disabled:{control:"boolean",description:"Disables interaction on a clickable card"}}},l={name:"Playground",args:{size:"medium",shadow:"md",variant:"default",clickable:!1,disabled:!1},render:e=>a`
    <org-card
      size="${e.size}"
      shadow="${e.shadow}"
      variant="${e.variant}"
      ?clickable="${e.clickable}"
      ?disabled="${e.disabled}"
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
  `},n={name:"Shadow Depths",render:()=>a`
    <div style="display:flex; gap:24px; flex-wrap:wrap; align-items:flex-start; padding:16px;">
      ${["none","sm","md","lg"].map(e=>a`
        <org-card shadow="${e}" style="max-width:200px; min-width:160px;">
          <div slot="header" style="font-weight:600; font-size:14px;">shadow="${e}"</div>
          <p style="margin:0; font-size:13px; color:#616161;">Card with ${e} shadow.</p>
        </org-card>
      `)}
    </div>
  `},c={name:"Style Variants",render:()=>a`
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
  `},p={name:"With Media Slot",render:()=>a`
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
  `},g={name:"Clickable Card",render:()=>a`
    <org-card
      clickable
      shadow="sm"
      variant="outlined"
      style="max-width:280px;"
      @org-card:click="${e=>alert("Card clicked!")}"
    >
      <div slot="header" style="font-weight:600; font-size:15px;">Clickable Card</div>
      <p style="margin:0; font-size:13px; color:#616161;">
        Hover to see lift effect. Click to fire <code>org-card:click</code> event.
      </p>
    </org-card>
  `},m={name:"Sizes",render:()=>a`
    <div style="display:flex; gap:24px; flex-wrap:wrap; align-items:flex-start; padding:16px;">
      ${["small","medium","large"].map(e=>a`
        <org-card size="${e}" shadow="md" style="max-width:220px;">
          <div slot="header" style="font-weight:600; font-size:14px;">size="${e}"</div>
          <p style="margin:0; font-size:13px; color:#616161;">Padding controlled by size prop.</p>
        </org-card>
      `)}
    </div>
  `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'medium',
    shadow: 'md',
    variant: 'default',
    clickable: false,
    disabled: false
  },
  render: args => html\`
    <org-card
      size="\${args.size}"
      shadow="\${args.shadow}"
      variant="\${args.variant}"
      ?clickable="\${args.clickable}"
      ?disabled="\${args.disabled}"
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
  \`
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Shadow Depths',
  render: () => html\`
    <div style="display:flex; gap:24px; flex-wrap:wrap; align-items:flex-start; padding:16px;">
      \${(['none', 'sm', 'md', 'lg'] as const).map(s => html\`
        <org-card shadow="\${s}" style="max-width:200px; min-width:160px;">
          <div slot="header" style="font-weight:600; font-size:14px;">shadow="\${s}"</div>
          <p style="margin:0; font-size:13px; color:#616161;">Card with \${s} shadow.</p>
        </org-card>
      \`)}
    </div>
  \`
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Style Variants',
  render: () => html\`
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
  \`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Media Slot',
  render: () => html\`
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
  \`
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Clickable Card',
  render: () => html\`
    <org-card
      clickable
      shadow="sm"
      variant="outlined"
      style="max-width:280px;"
      @org-card:click="\${(e: CustomEvent) => alert('Card clicked!')}"
    >
      <div slot="header" style="font-weight:600; font-size:15px;">Clickable Card</div>
      <p style="margin:0; font-size:13px; color:#616161;">
        Hover to see lift effect. Click to fire <code>org-card:click</code> event.
      </p>
    </org-card>
  \`
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => html\`
    <div style="display:flex; gap:24px; flex-wrap:wrap; align-items:flex-start; padding:16px;">
      \${(['small', 'medium', 'large'] as const).map(size => html\`
        <org-card size="\${size}" shadow="md" style="max-width:220px;">
          <div slot="header" style="font-weight:600; font-size:14px;">size="\${size}"</div>
          <p style="margin:0; font-size:13px; color:#616161;">Padding controlled by size prop.</p>
        </org-card>
      \`)}
    </div>
  \`
}`,...m.parameters?.docs?.source}}};const P=["Playground","ShadowVariants","StyleVariants","WithMedia","Clickable","Sizes"];export{g as Clickable,l as Playground,n as ShadowVariants,m as Sizes,c as StyleVariants,p as WithMedia,P as __namedExportsOrder,S as default};
