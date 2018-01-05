## Usage

### Single-line
```html
<mdc-textfield v-model="text" label="Hint text" />
```

```javascript
var vm = new Vue({
  data: {
    text: ""
  }
})

```


### Help text
```html
<mdc-textfield v-model="text" label="Hint text"  helptext="Help text...">
```

### Multiline
```html
<mdc-textfield v-model="text" label="Hint text" multiline rows="8" cols="40" />
```

### Full width
```html
<mdc-textfield v-model="text" fullwidth label="Hint text" />
<mdc-textfield v-model="text" fullwidth multiline rows="8" label="Hint text" />
```

### Validation
```html
<mdc-textfield type="password" label="Password"
  required minlength=8 maxlength=10
  helptext="passord must be 8 to 10 characters"
  helptext-persistent helptext-validation
  v-model="password" />
```

### props

| props | Type | default | Description |
|-------|------|---------|-------------|
|`v-model`| String || binds textfield value |
|`dense`| Boolean | | compresses the textfield to make it slightly smaller |
|`label`| String | | hint text |
|`helptext`| String | |  help text |
|`helptext-persistent`| Boolean | | whether help text is persistent |
|`helptext-validation`| Boolean | | whether help text is a validation  |
|`required`| Boolean | |  validation: whether this field is required|
|`minlength`| [Number, String] | |  validation: minimal length|
|`maxlength`| [Number, String] | |  validation: max length|
|`size`| [Number, String] | 20 |  textfield size (chars) |
|`fullwidth`| Boolean | | whether the textfield is full width |
|`multiline`| Boolean | | whether the textfield is multiline  |
|`rows`| [Number, String] | 8 | multiline: number of rows |
|`cols`| [Number, String] | 40 |multiline: number of columns  |
|`disabled`| [Number, String] | | binds to disabled state  |

### events

| event | args | Description |
|-------|------|-------------|
|`@focus`| - |emitted on focus gained |
|`@blur`| - |emitted on focus lost |

### Reference
- <https://material.io/components/web/catalog/input-controls/text-fields>

