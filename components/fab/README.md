## Floating Action Buttons

```html
  <mdc-fab>favorite</mdc-fab>
  <mdc-fab mini>favorite</mdc-fab>
  <mdc-fab plain>favorite</mdc-fab>
  <mdc-fab mini plain>favorite</mdc-fab>
  <mdc-fab plain fixed @click="scrollToTop">home</mdc-fab>
```

> refer to [Material Design Icon Font](https://material.io/icons/) for the list of icons 

> FAB can't be disabled 

> add an href attribute for link


### events

| event | args | Description |
|-------|------|-------------|
|`@click`||emited on click |


### props

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`mini`|Boolean|| mini style (40x40 pixels) (*)|
|`absolute`| Boolean|| set bottom right absolute position (*)|
|`fixed`| Boolean|| set bottom right fixed position (*)|
|`event`|String| optional | optional event to emit on click  |
|`event-target`|Object| vm.$root | optional event target, defaults to root bus |
|`event-args`|Array| [] | optional event args |

> (*) initializer attribute, not dynamic propertie


### Reference
- https://material.io/components/web/catalog/buttons/floating-action-buttons/