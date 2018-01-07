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
|`href`|String|| link's href, renders anchor (see notes below) | 
|`to`|String, Object| undefined | router-link property _(*)_ |
|`replace`|Boolean| false | router-link property _(*)_ |
|`append`|Boolean| false | router-link property _(*)_ |
|`exact`|Boolean| false | router-link property _(*)_ |
|`active-class`|String| router-link-active | router-link property _(*)_ |
|`exact-active-class`|String| router-link-exact-active | router-link property _(*)_ |

> _(*)_ Requires [vue-router](https://router.vuejs.org)


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

#### simple Link

Using the href attribute will render `<a role="button" href="...">`

```html
<mdc-fab icon="home" href="#">Home</mdc-fab>
```

#### router-link

If the `to` property is defined, the item behaves as a
[router-link](https://router.vuejs.org/en/api/router-link.html)

```html
<mdc-fab icon="home" to="/home">Home</mdc-fab>
```

#### Accessibility Warning:

> Buttons are expected to be triggered using the Space or Enter key, 
> while links are expected to be triggered using the Enter key. 
> Additionally, button and links have different behaviors on right click.
> see this [MDN note](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus)

You might want to keep button behavior and do the navigation programatically:

```html
<mdc-fab icon="home" @click="location.href='#'">Home</mdc-fab>
<mdc-fab icon="home" @click="$router.push(...)">Home</mdc-fab>
```

### Reference

- <https://material.io/components/web/catalog/buttons/floating-action-buttons>