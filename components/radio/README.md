## Usage

```html
<mdc-radio v-model="answer" name="radios" label="Yes for sure"  />
<mdc-radio v-model="answer" name="radios" label="definitely NO!" />
<mdc-radio v-model="answer" name="radios" label="I guess"  checked />

<p>Answer:  {{ answer }}</p>
```

```javascript
var vm = new Vue({
  data: {
    answer: null
  }
})
```

> or use default slot for label

```html
<mdc-radio v-model="answer" name="radios">Yes for sure</mdc-radio>
<mdc-radio v-model="answer" name="radios">definitely NO!</mdc-radio>
<mdc-radio v-model="answer" name="radios"checked>"I guess"</mdc-radio>
```

### props

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`name`|String || radio group name (__*__)  |
|`label`| String|static| radio label |
|`align-end`| Boolean|| align the radio after the label |
|`value`|String| `label`| radio value, defaults to label value if any |
|`checked`|Boolean|| forces this radio to be selected. follows v-model otherwise |
|`:disabled`| Boolean|| whether the radio is disabled |
|`v-model`| String || tracks selected radio's value |

> (__*__) name prop is required for proper behavior.

### events

| event | args | Description |
|-------|------|-------------|
|`@focus`| - |emitted on focus gained |
|`@blur`| - |emitted on focus lost |

### Reference

- <https://material.io/components/web/catalog/input-controls/radio-buttons>
