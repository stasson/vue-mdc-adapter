## Usage

```html
<mdc-select v-model="selected" label=">Please select one">
  <option>A</option>
  <option>B</option>
  <option>C</option>
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
| `label`    | String          |         | the selection label (placeholder)            |
| `value`    | [String, Array] |         | bind with v-model (update on `change` event) |

| event    | Description             |
| -------- | ----------------------- |
| `@focus` | emitted on focus gained |
| `@blur`  | emitted on focus lost   |

```html
<mdc-select v-model="selected" label=">Please select one">
  <optgroup label="Meats">
    <option value="steak">Steak</option>
    <option value="hamburger">Hamburger</option>
  </optgroup>
    <optgroup label="Vegetables">
    <option value="beet">Beet</option>
    <option value="carrot">Carrot</option>
  </optgroup>
</mdc-select>
```

### Reference

* <https://material.io/components/web/catalog/input-controls/select-menus>
