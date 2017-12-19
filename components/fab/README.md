## Usage

```html
  <mdc-fab icon="favorite"></mdc-fab>
  <mdc-fab mini icon="favorite"></mdc-fab>
  <mdc-fab fixed icon="home" @click="scrollToTop"></mdc-fab>
```

> refer to [Material Design Icon Font](https://material.io/icons/) for the list of icons 

> FAB can't be disabled

> add an `href` attribute for link


### events

| event   | args | Description |
|---------|------|-------------|
|`@click` |     | emitted on click |


### props

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`icon`|String || material-icon content (*)|
|`mini`|Boolean|| mini style (40x40 pixels) (*)|
|`absolute`| Boolean|| set bottom right absolute position (*)|
|`fixed`| Boolean|| set bottom right fixed position (*)|
|`event`|String| optional | optional event to emit on click  |
|`event-target`|Object| vm.$root | optional event target, defaults to root bus |
|`event-args`|Array| [] | optional event args |
|`href`|String|| link's href, renders anchor (see notes below) | 


> (*) initializer attribute, not dynamic property


### Custom Icons

**Font Awsome**

```html
  <mdc-fab>
    <mdc-icon class="fa fa-star"></mdc-icon>
  </mdc-fab>
```


**SVG Icons**

```html
  <mdc-fab> 
    <svg ...> 
  </mdc-fab>
```

### Link FAB

```html
<mdc-fab icon="home" href="#">Home</mdc-fab>
```

Using the `href` attribute will render `<a role="button">`

> Accessibility Warning:  
> Buttons are expected to be triggered using the Space or Enter key, 
> while links are expected to be triggered using the Enter key. 
> Also button and links have different behaviour on right click.
> see this MDN [note](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus)

You might want to keep button behavior and do the navigation programatically:

```html
<mdc-button @click="location.href='#'">Home</mdc-button>
```

### Reference

- <https://material.io/components/web/catalog/buttons/floating-action-buttons>