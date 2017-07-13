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
|`:disabled`|String|| disable the button |
|`primary`|Boolean|| primary color |
|`accent`|Boolean|| accent color |
|`compact`| Boolean|| compact design |
|`dense`| String|| dense design |
|`raised`| Boolean|| raised design |
|`event`|String| optional | optional event to emit on click  |
|`event-target`|Object| vm.$root | optional event target, defaults to root bus |
|`event-args`|Array| [] | optional event args |


Add `primary` `accent` `dense` `compact` or `raised` attributes to change the 
design:

```html
<mdc-button dense>Dense Button</mdc-button>
<mdc-button raised primary>Primary Raised Button </mdc-button>
<mdc-button raised compact accent>Accent Compact Raised Button</mdc-button>
```

> note: those are initializer attributes, not dynamic properties

### button link

```html
<a href="#"><mdc-button dense>Link</mdc-button></a>
```

### Reference
- https://material-components-web.appspot.com/button.html
- https://material.io/guidelines/components/buttons.html

