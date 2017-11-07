## Usage

the switch component is rendered as an input with checkbox type

```html
<mdc-switch  :label="label" v-model="checked" />
```

```javascript
var vm = new Vue({
  data: {
    label: 'This is a switch',
    checked: true
  }
})
```

### props

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`checked`|Boolean|| whether the checkbox is checkecked, bind with `v-model` |
|`disabled`| Boolean|| whether the checkbox is disabled |
|`label`| String|| checkbox label |
|`align-end`| Boolean|| align the checkbox after the label |
|`value`|String| `'on'`| checkbox value |



### Reference
- <https://material.io/components/web/catalog/input-controls/switches>
