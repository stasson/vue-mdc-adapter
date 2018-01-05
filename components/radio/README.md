## Usage

```html
<mdc-radio v-model="answer" label="Yes for sure"  />
<mdc-radio v-model="answer" label="definitely NO!" />
<mdc-radio v-model="answer" label="I guess"  checked />

<p>Answer:  {{ answer }}</p>
```

```javascript
var vm = new Vue({
  data: {
    answer: null
  }
})
```

### props

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`label`| String|static| radio label |
|`align-end`| Boolean|| align the radio after the label |
|`name`|String|| radio group name  |
|`value`|String| `label`| radio value, defaults to label value if any |
|`checked`|Boolean|| forces this radio to be selected. follows v-model otherwise |
|`:disabled`| Boolean|| whether the radio is disabled |
|`v-model`| String || tracks selected radio's value |

### events

| event | args | Description |
|-------|------|-------------|
|`@focus`| - |emitted on focus gained |
|`@blur`| - |emitted on focus lost |


### Reference
- <https://material.io/components/web/catalog/input-controls/radio-buttons>

