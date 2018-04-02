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
  data() {
    return {
      selected: '',
    };
  },
});
```

### mdc-select

| props      | Type            | Default | Description                                  |
| ---------- | --------------- | ------- | -------------------------------------------- |
| `disabled` | Boolean         | false   | whether this select is disabled              |
| `label`    | String          |         | the selection label                          |
| `value`    | [String, Array] |         | bind with v-model (update on `change` event) |
| `max-size` | Boolean         | 4       | multi select max size                        |
| `name`     | String          |         | native select name                           |

| event    | Description             |
| -------- | ----------------------- |
| `@focus` | emitted on focus gained |
| `@blur`  | emitted on focus lost   |

### mdc-option

| props      | Type    | Default | Description                     |
| ---------- | ------- | ------- | ------------------------------- |
| `disabled` | Boolean | false   | whether this option is disabled |
| `value`    | String  |         | option value                    |

> If no option value is specified, the select component will take the option's textContent.

```html
<mdc-select v-model="selected" label=">Please select one">
  <mdc-option value="a">A</mdc-option>
  <mdc-option value="b">B</mdc-option>
  <mdc-option value="c">C</mdc-option>
</mdc-select>
```

### Reference

* <https://material.io/components/web/catalog/input-controls/select-menus>
