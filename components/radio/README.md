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
|`checked`|Boolean|| whether this radio is selected by default |
|`:disabled`| Boolean|| whether the radio is disabled |
|`v-model`| String || tracks selected radio's value |

### Reference
- <https://material.io/components/web/catalog/input-controls/radio-buttons>

