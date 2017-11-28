## Usage
`mdc-layout-app` is a flexible layout component for properly positioning the toolbar,
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

Toolbar and Drawer markup goes in dedicated `slot="toolbar"` and
`slot="drawer"` slots. Main content goes in the default slot.
