## Usage

```html
<!--Toolbar with icon menu-->
<mdc-toolbar>
  <mdc-toolbar-row>
    <mdc-toolbar-section align-start >
      <mdc-toolbar-icon-menu event="toggle-drawer">
      </mdc-toolbar-icon-menu>
      <mdc-toolbar-title href="#">Title</mdc-toolbar-title>
    </mdc-toolbar-section>
  </mdc-toolbar-row>
</mdc-toolbar>

<!-- Drawer layout-->
<mdc-drawer-layout>

  <!-- Drawer-->
  <mdc-drawer toggle-on="toggle-drawer">
    <mdc-drawer-list>
      <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
      <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
      <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
  
  <!--Body markup here... -->
  
</mdc-drawer-layout>
```

### Drawer

| prop | Type | Default | Description |
|------|------|---------|-------------|
|`permanent`|Boolean| optional | force the drawer to be permanent (*) |
|`persistent`|Boolean| optional | force the drawer to be persistent (*) |
|`temporary`|Boolean| optional | force the drawer to be temporary (*) |
|`toolbar-spacer`|Boolean| optional | add a toolbar spacer  |
|`toggle-on`|String| optional | optional event to listen on  |
|`toggle-on-source`|Object| vm.$root | optional event source, defaults to root bus |

> (*) by default drawer is responsive and will switch from temporary to 
> persistent design according to viewport width

### Drawer Header

| prop | Type | Default | Description |
|------|------|---------|-------------|
|`permanent`|Boolean| optional | show only if drawer is permanent (*) |
|`persistent`|Boolean| optional | show only if drawer is persistent (*) |
|`temporary`|Boolean| optional | show only if drawer is temporary (*) |

> (*) specifies whether or not the header is shown for responsive drawer

### Drawer Items

| prop | Type | Default | Description |
|------|------|---------|-------------|
|`start-icon`|Boolean| optional | material start icon |
|`href`|String| optional | item link |
|`event`|String| optional | optional event to emit on click  |
|`event-target`|Object| vm.$root | optional event target, defaults to root bus |
|`event-args`|Array| [] | optional event args |
|`temporary-close`|Boolean| true | whether temporary drawer closes on click |

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
  <img slot='start-detail'>
  {{ Text }}
</mdc-drawer-item>
```

### Reference
- <https://material.io/components/web/catalog/drawers>