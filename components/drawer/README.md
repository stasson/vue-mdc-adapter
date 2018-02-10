## Usage

The `mdc-drawer` component implements permanent, persistent, and temporary drawers.
By default the drawer component is responsive and will switch from temporary to persistent design according to viewport width.

```html
<mdc-drawer>
  <mdc-drawer-list>
    <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
    <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
    <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
  </mdc-drawer-list>
</mdc-drawer>
```

> For proper positioning of the drawer, use the `mdc-layout-app` component.

```html
<mdc-layout-app>
  <mdc-toolbar slot="toolbar" fixed>
    <mdc-toolbar-row>
      <mdc-toolbar-section align-start >
        <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
        <mdc-toolbar-title>Drawer Exemple</mdc-toolbar-title>
      </mdc-toolbar-section>
    </mdc-toolbar-row>
  </mdc-toolbar>
  <mdc-drawer slot="drawer" toggle-on="toggle-drawer">
    <mdc-drawer-list>
        <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
        <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
        <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
  <main class="content" >
  </main>
</mdc-layout-app>
```

### Drawer

| prop | Type | Default | Description |
|------|------|---------|-------------|
|`drawer-type`|String| undefined | 'temporary', 'persistent' or 'permanent' (*) |
|`permanent`|Boolean| undefined | shorthand for drawer-type="permanent" (*) |
|`persistent`|Boolean| undefined | shorthand for drawer-type="persistent" (*) |
|`temporary`|Boolean| undefined | shorthand for drawer-type="temporary" (*) |
|`toolbar-spacer`|Boolean| undefined | add a toolbar spacer  |
|`toggle-on`|String| undefined | optional toggle event to listen on  |
|`toggle-on-source`|Object| vm.$root | optional toggle event source, defaults to root bus |
|`open-on`|String| undefined | optional open event to listen on  |
|`open-on-source`|Object| vm.$root | optional open event source, defaults to root bus |
|`close-on`|String| undefined | optional close event to listen on  |
|`close-on-source`|Object| vm.$root | optional close event source, defaults to root bus |

> (*) drawer is responsive if `drawer-type` undefined: temporary on mobile breakpoint and persistent otherwise.

### Drawer Header

| prop | Type | Default | Description |
|------|------|---------|-------------|
|`permanent`|Boolean| undefined | show only if drawer is permanent (**) |
|`persistent`|Boolean| undefined | show only if drawer is persistent (**) |
|`temporary`|Boolean| undefined | show only if drawer is temporary (**) |

> (**) specifies whether or not the header is shown for responsive drawer

### Drawer Items

| prop | Type | Default | Description |
|------|------|---------|-------------|
|`start-icon`|String| undefined | material start icon |
|`temporary-close`|Boolean| true | whether temporary drawer closes on click |
|`event`|String| undefined | optional event to emit on click  |
|`event-target`|Object| vm.$root | optional event target, defaults to root bus |
|`event-args`|Array| [] | optional event args |
|`to`|String, Object| undefined | router-link property _(*)_ |
|`replace`|Boolean| false | router-link property _(*)_ |
|`append`|Boolean| false | router-link property _(*)_ |
|`exact`|Boolean| false | router-link property _(*)_ |
|`active-class`|String| router-link-active | router-link property _(*)_ |
|`exact-active-class`|String| router-link-exact-active | router-link property _(*)_ |
|`activated`|Boolean| undefined | whether this item is selected (not needed if router-link mode is used) |

> _(*)_ Requires [vue-router](https://router.vuejs.org)
> If the `to` property is defined, the item behaves as a
> [router-link](https://router.vuejs.org/en/api/router-link.html)

### Item usage

- A simple link

```html
  <mdc-drawer-item href="#">Inbox</mdc-drawer-item>
```

- With vue-router

```html
  <mdc-drawer-item  to="/path">Inbox</mdc-drawer-item>
  <mdc-drawer-item  :to='folder' append >Inbox</mdc-drawer-item>
```

> Customize the active links style with vue-router active or exact-active classes:

```css
.mdc-drawer-item.router-link-exact-active {
  color: red;
}
```

- Trigger an event

```html
  <mdc-drawer-item event='my-event'>Inbox</mdc-drawer-item>
```

- Click handler

```html
  <mdc-drawer-item @click='handler'>Inbox</mdc-drawer-item>
```

#### Start Detail

```html
<mdc-drawer>
  <mdc-drawer-list>
    <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
    <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
    <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
    <mdc-drawer-divider />
    <mdc-drawer-item start-icon="email">All mail</mdc-drawer-item>
    <mdc-drawer-item start-icon="delete">Trash</mdc-drawer-item>
    <mdc-drawer-item start-icon="report">Spam</mdc-drawer-item>
  </mdc-drawer-list>
</mdc-drawer>
```

> to override start-icon detail, use `start-detail` named slot:

```html
<mdc-drawer-item>
  <mdc-icon slot='start-detail' class="fa fa-home"></mdc-icon>
  {{ Text }}
</mdc-drawer-item>
```

### Reference

- <https://material.io/components/web/catalog/drawers>
