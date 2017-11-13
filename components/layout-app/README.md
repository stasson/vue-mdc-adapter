## Usage
`mdc-layout-app` is a flex layout component for proper positioning of the toobar,
drawer and main content. 

```html
<mdc-layout-app>
  
  <mdc-toolbar slot="toolbar">
    <!--  toolbar markup here -->      
  </mdc-toolbar>
  
  <mdc-drawer slot="drawer">
    <!--  drawer markup here -->      
  </mdc-drawer>
  
  <main>
    <!--  content markup here -->      
  </main>
  
</mdc-layout-app>
```

Toolbar and Drawer markup goes to dedicated `slot="toolbar"` and
`slot="drawer"` slots. Main content goes to default slot.
