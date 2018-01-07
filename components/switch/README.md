## Usage

The switch component is rendered as an input with checkbox type

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

> or use default slot for label

```html
<mdc-switch v-model="checked">{{Label}}</mdc-switch>
```

### props

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`checked`|Boolean|| whether the checkbox is checked, bind with `v-model` |
|`disabled`| Boolean|| whether the checkbox is disabled |
|`label`| String|| checkbox label |
|`align-end`| Boolean|| align the checkbox after the label |
|`value`|String| `'on'`| checkbox value |

### events

| event | args | Description |
|-------|------|-------------|
|`@focus`| - |emitted on focus gained |
|`@blur`| - |emitted on focus lost |


### Reference
- <https://material.io/components/web/catalog/input-controls/switches>
