## Usage

```html
<mdc-select v-model="selected" label=">Please select one">
  <mdc-option>A</mdc-option>
  <mdc-option>B</mdc-option>
  <mdc-option>C</mdc-option>
</mdc-select>
<span>Selected: {{ selected }}</span>
```

```javascript
var vm = new Vue({
  data () {
    return {
      selected: '',
    }
  }
})
```
> For better cross-device experiennce, `<mdc-select>` will switch from menu to 
> native rendering based on the media query
> `(max-width: 600px) and (pointer: coarse)`.

### Props

#### mdc-select

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`disabled`|Boolean| false | whether this select is disabled |
|`label`|String| | the selection label |
|`value`|[String, Array]| | bind with v-model (update on `change` event)|
|`multiple`|Boolean| | whether the select accept multiple values|
|`max-size`|Boolean| 8 | multi select max size |

#### mdc-option

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`disabled`|Boolean| false | whether this option is disabled |
|`value`|String| | option value |

### events

#### mdc-select

| event | args | Description |
|-------|------|-------------|
|`@focus`| - |emitted on focus gained |
|`@blur`| - |emitted on focus lost |


### Multiple select

```html
<mdc-select multiple v-model="selected" label="Please select one or more">
  <mdc-option>A</mdc-option>
  <mdc-option>B</mdc-option>
  <mdc-option>C</mdc-option>
</mdc-select>
<span>Selected: {{ selected }}</span>
```

```javascript
var vm = new Vue({
  data () {
    return {
      selected: [],
    }
  }
})
```

> multi-select are always rendered natively. the size is reactive and is caped  
> by the max-size property    

### Option value

> If no option value is specified, the select component will take the option' 
> textContent.

```html
<mdc-select v-model="selected" label=">Please select one">
  <mdc-option value="a">A</mdc-option>
  <mdc-option value="b">B</mdc-option>
  <mdc-option value="c">C</mdc-option>
</mdc-select>
```

### Reference
- <https://material.io/components/web/catalog/input-controls/select-menus>
