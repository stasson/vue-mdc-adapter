## Icon Toggle

```html
  <mdc-icon-toggle v-model="toggle"
    toggle-on="favorite" label-on="Remove from favorites"
    toggle-off="favorite_border" label-off="Add to favorites" >
  </mdc-icon-toggle>
```

```javascript
var vm = new Vue({
  data: {
    toggle: false  
  }
})
```

> refer to [Material Design Icon Font](https://material.io/icons/) for the list of icons 


### props

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`v-model`|Boolean|| togggle state binding |
|`:disabled`|Boolean|| wether component is disabled |
|`primary`|Boolean|| set primary theme |
|`accent`|Boolean|| set accent theme |
|`toggle-on`|String|| toggled on icon name |
|`toggle-off`|String|| toggled off icon  name |
|`label-on`|String|| toggled on aria-label attribute |
|`label-off`|String||  toggled on aria-label attribute |
|`class-on`|String|| optional css class when toggled on|
|`class-off`|String|| optional css class when toggled off |


### Reference
- https://material.io/components/web/catalog/buttons/icon-toggle-buttons