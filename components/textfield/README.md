## Usage

### Single-line
```html
<mdc-textfield v-model="text" label="Hint text" />
<mdc-textfield v-model="text" label="Hint text dense" />
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
<mdc-textfield v-model="text" fullwidth multiline rows="10" label="Hint text" />
```

### box and outline style

```html
<mdc-textfield v-model="text" label="Hint text" box/>
<mdc-textfield v-model="text" label="Hint text" outline/>
```

> use props to set  trailing  or leading icon

```html
<mdc-textfield v-model="text" label="Hint text" box leading-icon="event"/>
<mdc-textfield v-model="text" label="Hint text" outline trailing-icon="event"/>
```

> custom icon
```html
<mdc-textfield v-model="text" label="Hint text" box :leading-icon="{className: 'fa fa-font-awesome'}" />
```

```html
<mdc-textfield v-model="text" label="Hint text" outline>
  <svg slot="traling-icon">...</svg>
</mdc-textfield>
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
|`disabled`| [Number, String] | | binds to disabled state  |
|`label`| String | | hint text |
|`dense`| Boolean | | compresses the textfield to make it slightly smaller |
|`outline`| Boolean | | whether the textfield is outlined  |
|`box`| Boolean | | whether the textfield is a box  |
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
|`trailing-icon`|[String, Array, Object ] | | trailing icon _*_|
|`leading-icon`| [String, Array, Object ] | | leading icon _*_ |

(*) icon prop usage: 
- use `String` for material icons
- use `Array` to specify icon classList
- use `{className: String, textContent: String}` for custom class and/or content
- use `trailing-icon` or `leading-icon` slots for  custom icon markup (svg, ...).

### events

| event | args | Description |
|-------|------|-------------|
|`@focus`| - |emitted on focus gained |
|`@blur`| - |emitted on focus lost |
|`@icon-action`| - |emitted on icon action |

### Reference
- <https://material.io/components/web/catalog/input-controls/text-fields>
