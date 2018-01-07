## Usage

The card package provides the building blocks for composing your card components

```html
<mdc-card>
  <mdc-card-header :title="title" :subtitle="subtitle" />
  <mdc-card-text> {{ text }} </mdc-card-text> 
  <mdc-card-actions>
    <mdc-card-action-button @click="onAction">Action</mdc-card-action-button>
  </mdc-card-actions>
</mdc-card>
```

```javascript
var vm = new Vue({
  data: {
    title: 'Title',
    subtitle: 'Subtitle',
    text: 'Lorem ipsum dolor sit amet, ...',
  },
  methods: {
    onAction: function (action) {
      console.log('card action triggered: '+ action)
    } 
  }
})
```

## Content blocks

Cards are composed of different content blocks which are typically laid out in 
vertical succession.

### Rich Media

```html
<mdc-card>
  <mdc-card-media :src="media.jpg" :height="90" />
</mdc-card>
```

`mdc-card-media` is used for showing rich media in cards and optionally as a 
container:

```html
<mdc-card>
  <mdc-card-media :src="media.img" :height="150" dark>
    <mdc-card-title>Title</mdc-card-title>
  </mdc-card-media>
</mdc-card>
```

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`src`| String|required| the backgound image source |
|`height`|number|| height of the rich media in px |
|`dark`|String|| whether the image is dark, applies dark-theme |


### Primary  (Title/Subtitle)

```html
<mdc-card>
  <mdc-card-header :title="title" :subtitle="subtitle" />
</mdc-card>
```

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`title`      | String  || the title |
|`subtitle`   | String  || the subtitle |
|`large-title`| Boolean || whether the title should be large |

### Supporting Text

```html
<mdc-card>
  <mdc-card-text> {{ text }} </mdc-card-text> 
</mdc-card>
```

### Actions

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`vertical`| boolean |false| whether action layout is vertical |

```html
<mdc-card>
  <mdc-card-actions vertical>
    <mdc-card-action-button>Action 1</mdc-card-action-button>
    <mdc-card-action-button>Action 2</mdc-card-action-button>
  </mdc-card-actions>
</mdc-card>
```

### Action Buttons

```html
<mdc-card>
  <mdc-card-actions>
    <mdc-card-action-button @click="onAction">Action</mdc-card-action-button>
  </mdc-card-actions>
</mdc-card>
```


| props | Type | Default | Description |
|-------|------|---------|-------------|
|`disabled`| boolean |false| whether the button is disabled |
|`accent`|Boolean|| secondary color theme |
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

Using the `href` attribute will render `<a role="button">`

> Accessibility Warning:  
> Buttons are expected to be triggered using the Space or Enter key, 
> while links are expected to be triggered using the Enter key. 
> Additionally, button and links have different behavior on right click.
> see this [MDN note](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus)


### Horizontal block

You can stack multiple card blocks horizontally instead of vertically by 
placing them inside of a `mdc-card-horizontal` block:

```html
<mdc-card>
  <mdc-card-horizontal>
    <mdc-card-header :title="title" :subtitle="subtitle" />
    <mdc-card-actions vertical :actions="['action1', 'action2']" />
  </mdc-card-horizontal> 
</mdc-card>
```

### Media image

`mdc-media-img` is designed to be used in horizontal blocks by taking up a 
fixed height rather than stretching to the width of the card.

```html
<mdc-card>
  <mdc-card-horizontal>
    <mdc-card-header :title="title" :subtitle="subtitle" />
    <mdc-card-img src="image.jpg" mult="1.5" />
  </mdc-card-horizontal> 
</mdc-card>
```

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`src`| String|| image source |
|`mult`| Number|| optional size multiplier, can be `1.5`, `2` or `3`" |


> Unlike media blocks, media items are not designed to be used as optional 
containers.

### Reference
- <https://material.io/components/web/catalog/cards>
