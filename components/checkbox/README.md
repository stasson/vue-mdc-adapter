
## Usage

```html
<mdc-checkbox  :label="label" v-model="checked"/>
```

```javascript
var vm = new Vue({
  data: {
    label: 'This is a checkbox',
    checked: true
  }
})
```

### Indeterminate checkbox
```html
<mdc-checkbox  :label="label" v-model="checked"
    :indeterminate.sync="indeterminate" />
```

```javascript
var vm = new Vue({
  data: {
    label: 'This is a checkbox',
    checked: false,
    indeterminate: true
  }
})
```

### events

| event | args | Description |
|-------|------|-------------|
|`@blur`||emitted on input blur (focus lost) |

### props

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`checked`|Boolean|| whether the checkbox is checked, bind with `v-model` |
|`indeterminate`|Boolean|| whether the checkbox is in an indeterminate state bind with `.sync` modifier | |
|`disabled`| Boolean|| whether the checkbox is disabled |
|`label`| String|| checkbox label |
|`align-end`| Boolean|| whether to align the checkbox after the label |
|`value`|String| `'on'`| checkbox value |


### Reference
- <https://material.io/components/web/catalog/input-controls/checkboxes>
