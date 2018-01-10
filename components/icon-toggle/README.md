## Usage

```html
  <!-- material icons -->
  <mdc-icon-toggle v-model="toggle"
    toggle-on="favorite"
    toggle-off="favorite_border">
  </mdc-icon-toggle>

  <!-- material icons with label -->
  <mdc-icon-toggle v-model="toggle"
    :toggle-on="{icon:'favorite', label: 'Remove from favorites'}"
    :toggle-off="{icon: 'favorite_border', label: 'Add to favorites'}">
  </mdc-icon-toggle>

  <!-- font-awesome -->
  <mdc-icon-toggle primary v-model="toggle"
    :toggle-on="{cssClass:'fa fa-favorite'}"
    :toggle-off="{cssClass: 'fa fa-favorite-o'}">
  </mdc-icon-toggle>

  <!-- font-awesome with label -->
  <mdc-icon-toggle primary v-model="toggle"
    :toggle-on="{cssClass:'fa fa-favorite', label: 'Remove from favorites' }"
    :toggle-off="{cssClass: 'fa fa-favorite-o', label: 'Add to favorites'}">
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

| prop       | Type             | Default   | Description |
|------------|------------------|-----------|-------------|
|`v-model`   | Boolean          | value     | togggle state binding |
|`disabled`  | Boolean          | false     | whether component is disabled |
|`accent`    | Boolean          | false     | set accent theme |
|`toggle-on` | [String, Object] | undefined | toggle on material icon name or options (*) |
|`toggle-off`| [String, Object] | undefined | toggle off material icon name or options (*)|

- (*) Material Icons case

| prop  | Type    | Description        |
|-------|---------|--------------------|
|`label`| Boolean | label              |
|`icon` | String  | material icon name |

- (*) Custom Icons case

| prop      | Type    | Description  |
|-----------|---------|--------------|
|`label`    | Boolean | label        |
|`content`  | String  | icon content |
|`cssClass` | String  | icon class   |

### Reference

- <https://material.io/components/web/catalog/buttons/icon-toggle-buttons>