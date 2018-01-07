## Usage

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
|`@click`||emitted on click |


### props

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`disabled`|String|| disable the button |
|`accent`|Boolean|| secondary color theme |
|`raised`| Boolean|| a contained button that is elevated upon the surface |
|`unelevated`| Boolean|| a contained button that is flush with the surface |
|`stroked`| Boolean|| a contained button that is flush with the surface and has a visible border(*)|
|`dense`| String||  compresses the button text to make it slightly smaller |
|`compact`| Boolean|| reduces the amount of horizontal padding in the button |
|`event`|String| optional | optional event to emit on click  |
|`event-target`|Object| vm.$root | optional event target, defaults to root bus |
|`event-args`|Array| [] | optional event args |
|`href`|String|| link's href, renders anchor (see notes below) | 
|`to`|String, Object| undefined | router-link property _(*)_ |
|`replace`|Boolean| false | router-link property _(*)_ |
|`append`|Boolean| false | router-link property _(*)_ |
|`exact`|Boolean| false | router-link property _(*)_ |
|`active-class`|String| router-link-active | router-link property _(*)_ |
|`exact-active-class`|String| router-link-exact-active | router-link property _(*)_ |

> _(*)_ Requires [vue-router](https://router.vuejs.org)

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

### Link buttons

#### simple Link

Using the href attribute will render `<a role="button" href="...">`

```html
<mdc-button href="#">Home</mdc-button>
```

#### router-link

If the `to` property is defined, the item behaves as a
[router-link](https://router.vuejs.org/en/api/router-link.html)

```html
<mdc-button to="/home">Home</mdc-button>
```

#### Accessibility Warning:

> Buttons are expected to be triggered using the Space or Enter key, 
> while links are expected to be triggered using the Enter key. 
> Additionally, button and links have different behaviors on right click.
> see this [MDN note](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus)

You might want to keep button behavior and do the navigation programatically:

```html
<mdc-button @click="location.href='#'">Home</mdc-button>
<mdc-button @click="$router.push(...)">Home</mdc-button>
```

### Triggering events

```html
 <mdc-button event='my-event'>Do Something</mdc-button>
```

```javascript
 // register event from some component context
 this.$root.$on('my-event', () => doSomething())
```

### Reference
- <https://material.io/guidelines/components/buttons.html>
