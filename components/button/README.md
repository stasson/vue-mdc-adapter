## Button

```html
  <mdc-button @click="onClick" :disabled="buttonDisabled">click me</mdc-button>
```

```javascript
var vm = new Vue({
  data:{
    buttonDisabled: false
  },
  methods: {
    onClick () {...} 
  }
})
```

### events

| event | args | Description |
|-------|------|-------------|
|`@click`||emited on click |


### props

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`disabled`|String|| disable the button |
|`raised`| Boolean|| a contained button that is elevated upon the surface  (*)|
|`unelevated`| Boolean|| a contained button that is flush with the surface (*)|
|`stroked`| Boolean|| a contained button that is flush with the surface and has a visible border(*)|
|`dense`| String||  compresses the button text to make it slightly smaller (*)|
|`compact`| Boolean|| reduces the amount of horizontal padding in the button (*)|
|`event`|String| optional | optional event to emit on click  |
|`event-target`|Object| vm.$root | optional event target, defaults to root bus |
|`event-args`|Array| [] | optional event args |

> (*) initializer attribute, not dynamic propertie

### text buttons

```html
<mdc-button>Baseline</mdc-button>
<mdc-button compact>Compact</mdc-button>
<mdc-button dense>Dense</mdc-button>
```

### Raised Button

```html
<mdc-button raised>Baseline</mdc-button>
<mdc-button raised compact>Compact</mdc-button>
<mdc-button raised dense>Dense</mdc-button>
```

### Uneleveted buttons

```html
<mdc-button unelevated>Baseline</mdc-button>
<mdc-button unelevated compact>Compact</mdc-button>
<mdc-button unelevated dense>Dense</mdc-button>
```

### Icon buttons

```html
<mdc-button ><mdc-icon icon="favorite"></mdc-icon>like</mdc-button>
```

### Reference
- https://material.io/guidelines/components/buttons.html

