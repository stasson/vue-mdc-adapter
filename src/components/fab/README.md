## Floating Action Buttons

```html
  <mdc-fab>favorite</mdc-fab>
  <mdc-fab mini>favorite</mdc-fab>
  <mdc-fab plain>favorite</mdc-fab>
  <mdc-fab mini plain>favorite</mdc-fab>
  <mdc-fab plain fixed @click="scrollToTop">home</mdc-fab>
```

> refer to [Material Design Icon Font](https://material.io/icons/) for the list of icons 


### events

| event | args | Description |
|-------|------|-------------|
|`@click`||emited on click |


### props

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`:disabled`|String|| disable the fab |
|`mini`|Boolean|| mini style (40x40 pixels)|
|`plain`|Boolean|| plain style (white background)|
|`absolute`| Boolean|| set bottom right absolute position |
|`fixed`| Boolean|| set bottom right fixed position |


### Reference
- https://material.io/components/web/catalog/buttons/floating-action-buttons/