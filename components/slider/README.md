## Usage

```html
<mdc-slider min=0 max=10 step=1 v-model="sliderValue" />
```

```javascript
var vm = new Vue({
  data: {
    sliderValue: 0
  }
})
```

### props

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`value`|Number| - | The current value of the slider. Changing this will update the slider’s value. |
|`min`|Number| 0 | The minimum value a slider can have. Values set programmatically will be clamped to this minimum value. Changing this property will update the slider’s value if it is lower than the new minimum |
|`max`|Number| 100 |  The maximum value a slider can have. Values set programmatically will be clamped to this maximum value. Changing this property will update the slider’s value if it is greater than the new maximum |
|`step`|Number| 0| Specifies the increments at which a slider value can be set. Can be any positive number, or `0` for no step. Changing this property will update the slider’s value to be quantized along the new step increments |
|`disabled`| Boolean|false| Whether or not the slider is disabled |
|`display-markers`| Boolean|false| whether to display discrete markers |

- Continuous Slider

```html
<mdc-slider min=0 max=10 v-model="sliderValue" />
```

- Discrete Slider

```html
<mdc-slider min=0 max=10 step=1 v-model="sliderValue" />
```

- Discrete Slider with Markers

```html
<mdc-slider min=0 max=10 step=1 display-markers v-model="sliderValue" />
```

### events

- `input` event is emitted whenever the slider value is changed by way of a user event, e.g. when a user is dragging the slider or changing the value using the arrow keys. 
- `change` event is emitted whenever the slider value is changed and committed by way of a user event, e.g. when a user stops dragging the slider or changes the value using the arrow keys.

### model

The v-model directive is `lazy`,  update happens on the `change` event.  

> In order to get update on input, fallback to explicit binding:
```html
<mdc-slider :value="sliderValue" @input="value => { sliderValue = value }" />
```

### Reference
- <https://material.io/components/web/catalog/input-controls/sliders>
