## Select

```html
<mdc-select v-model="selected" label=">Please select one">
  <mdc-select-option>A</mdc-select-option>
  <mdc-select-option>B</mdc-select-option>
  <mdc-select-option>C</mdc-select-option>
</mdc-select>
<span>Selected: {{ selected }}</span>
```

```javascript
var vm = new Vue({
  data () {
    return {
      selected: String,
    }
  }
})
```

### props

#### mdc-select

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`disabled`|Boolean| false | whether this select is disabled |
|`label`|String| | the selection label |
|`value`|String| | v-model: update on `change` event|

#### mdc-select-option

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`disabled`|Boolean| false | whether this option is disabled |
|`value`|String| | option value |

### Values

> If no option value is specified, the select component will take the option' 
> textContent.

```html
<mdc-select v-model="selected" label=">Please select one">
  <mdc-select-option value="a">A</mdc-select-option>
  <mdc-select-option value="b">B</mdc-select-option>
  <mdc-select-option value="c">C</mdc-select-option>
</mdc-select>
```

### Rich vs Native Select

> `<mdc-select>` will switch from native to rich version of the component based 
> on media query for better cross-device UX. Use `<mdc-native-select>` or 
> `<mdc-rich-select>` to force the behaviour

```html
<mdc-native-select v-model="selected" label=">Please select one">
  <mdc-native-select-option>A</mdc-native-select-option>
  <mdc-native-select-option>B</mdc-native-select-option>
  <mdc-native-select-option>C</mdc-native-select-option>
</mdc-native-select>
<span>Selected: {{ selected }}</span>
```

```html
<mdc-rich-select v-model="selected" label=">Please select one">
  <mdc-rich-select-option>A</mdc-rich-select-option>
  <mdc-rich-select-option>B</mdc-rich-select-option>
  <mdc-rich-select-option>C</mdc-rich-select-option>
</mdc-rich-select>
<span>Selected: {{ selected }}</span>
```
### Reference
- https://material.io/components/web/catalog/input-controls/select-menus
