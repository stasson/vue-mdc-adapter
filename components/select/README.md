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

> For better cross-device experiennce, `<mdc-select>` will switch from menu to
> native rendering based on the media query
> `(max-width: 600px) and (pointer: coarse)`.

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

### mdc-optgroup

| props      | Type    | Default | Description                     |
| ---------- | ------- | ------- | ------------------------------- |
| `disabled` | Boolean | false   | whether this option is disabled |
| `label`    | String  |         | optgroup label                  |

```html
<mdc-select v-model="selected" label=">Please select one">
  <mdc-optgroup label="Meats">
    <mdc-option value="steak">Steak</mdc-option>
    <mdc-option value="hamburger">Hamburger</mdc-option>
  </mdc-optgroup>
    <mdc-optgroup label="Vegetables">
    <mdc-option value="beet">Beet</mdc-option>
    <mdc-option value="carrot">Carrot</mdc-option>
  </mdc-optgroup>
</mdc-select>
```

### Reference

* <https://material.io/components/web/catalog/input-controls/select-menus>
