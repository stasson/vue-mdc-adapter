## Drawers

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
  <mdc-drawer toggle-on="toggle-drawer">
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
> persistent design 

### Drawer Layout

```html
<mdc-toolbar />
<mdc-drawer-layout>
  <mdc-drawer />
  <!--Body markup here... -->
</mdc-drawer-layout>
```

or drawer is above toolbar

```html
<mdc-drawer-layout>
  <mdc-drawer toolbar-spacer />
  <mdc-toolbar />
  <!--Body markup here... -->
</mdc-drawer-layout>
```

### Drawer Header

| prop | Type | Default | Description |
|------|------|---------|-------------|
|`permanent`|Boolean| optional | show only if drawer is permanent (*) |
|`persistent`|Boolean| optional | show only if drawer is persistent (*) |
|`temporary`|Boolean| optional | show only if drawer is temporary (*) |

> (*) allows to filter whether header is shown for responsive drawer

### Drawer Content


### Reference
- https://material.io/components/web/catalog/drawers