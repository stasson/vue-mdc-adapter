
## Checkbox

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


### props

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`checked`|Boolean|| whether the checkbox is checkecked, bind with `v-model` |
|`indeterminate`|Boolean|| whether the checkbox is in indeterminate state bind with `.sync` modifier | |
|`disabled`| Boolean|| whether the checkbox is disabled |
|`label`| String|| checkbox label |
|`align-end`| Boolean|| align the checkbox after the label |
|`value`|String| `'on'`| checkbox value |


### Reference
- https://material.io/components/web/catalog/input-controls/checkboxes/
- https://material.io/guidelines/components/selection-controls.html#selection-controls-checkbox
