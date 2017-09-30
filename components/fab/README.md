## Floating Action Buttons

```html
  <mdc-fab icon="favorite"></mdc-fab>
  <mdc-fab mini icon="favorite"></mdc-fab>
  <mdc-fab fixed icon="favorite" @click="scrollToTop">home</mdc-fab>
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
|`icon`|String || material-icon content (*)|
|`mini`|Boolean|| mini style (40x40 pixels) (*)|
|`absolute`| Boolean|| set bottom right absolute position (*)|
|`fixed`| Boolean|| set bottom right fixed position (*)|
|`event`|String| optional | optional event to emit on click  |
|`event-target`|Object| vm.$root | optional event target, defaults to root bus |
|`event-args`|Array| [] | optional event args |

> (*) initializer attribute, not dynamic propertie


### Custom Icons

> You can ommit the icon prop to render your custom icons 

**Font Awsome**

```html
  <mdc-fab class="fa fa-star"></mdc-fab>
```


**SVG Icons**

```html
  <mdc-fab> 
    <svg ...> 
  </mdc-fab>
```


### Reference
- https://material.io/components/web/catalog/buttons/floating-action-buttons/