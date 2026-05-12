## Prompt: Create a New Web Component
**Project:** `enterprise-ui-platform-poc`  
**Stack:** Lit + TypeScript, compiled with `tsc`
---
Create a new Lit Web Component for **[COMPONENT NAME]** with the following spec and also include additional  properties if required for the component:
### Component Details
- **Tag name:** `org-[name]` (e.g. `org-badge`, `org-tooltip`)
- **Class name:** `Org[Name]` (e.g. `OrgBadge`, `OrgTooltip`)
- **File:** `src/components/[name].ts`
### Properties
| Property | Type | Options (if any) | Default |
|---|---|---|---|
| `size` | String | `'small' \| 'medium' \| 'large'` | `'medium'` |
| `disabled` | Boolean | — | `false` |
| *(add more)* | | | |
### Events to fire (CustomEvent, bubbles + composed)
- `org-[name]:[action]` — fired when [describe trigger], detail: `{ value: ... }`
### Slots
- Default slot: *(e.g. label text)*
- Named slot `icon`: *(e.g. leading icon)*
### CSS Custom Properties to expose
- `--org-[name]-bg` — background color
- `--org-[name]-color` — text/icon color
- *(add more)*
---
### Rules to follow (mandatory):
1. Extend `LitElement`, use `@customElement('org-[name]')` decorator
2. All properties use `@property()` decorator with correct type (`String`, `Boolean`, `Number`)
3. Use `@property({ reflect: true })` for Boolean props like `disabled`
4. Styles go inside `static styles = css\`...\`` — no external CSS files
5. Use CSS variables prefixed with `--org-` with sensible fallbacks
6. Include size variants: `small`, `medium`, `large` using class names on the host wrapper
7. Fire `CustomEvent` with `{ bubbles: true, composed: true }` for all interactions
8. Add JSDoc at the top with `@element`, `@fires`, `@csspart`, `@cssprop` tags
9. At the bottom, add global type registration:
   ```ts
   declare global {
     interface HTMLElementTagNameMap { 'org-[name]': Org[Name]; }
   }
   ```
10. After creating the file, export the class from `src/index.ts`:
    ```ts
    export { Org[Name] } from './components/[name]';
    ```