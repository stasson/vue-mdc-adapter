# Cards

The card package provides the building blocks to compose your card components

```html
<mdc-card>
  <mdc-card-header :title="title" :subtitle="subtitle" />
  <mdc-card-text> {{ text }} </mdc-card-text> 
  <mdc-card-actions :actions="actions" @action="onAction" />
</mdc-card>
```

```javascript
var vm = new Vue({
  data: {
    title: 'Title',
    subtitle: 'Subtitle',
    text: 'Lorem ipsum dolor sit amet, ...',
    actions: ['action1', 'action2'],
  },
  methods: {
    onAction: function (action) {
      console.log('card action triggered: '+ action)
    } 
  }
})
```

## Content blocks

Cards are composed of different content blocks, which are typically laid out in 
vertical succession.

### Rich Media

```html
<mdc-card>
  <mdc-card-media :src="media.jpg" :height="90" />
</mdc-card>
```

`mdc-card-media` is used for showing rich media in cards, and optionally as a 
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
|`dark`|String|| wether the image is dark, applies dark-theme |


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
|`large-title`| Boolean || wether the title should be large |

### Supporting Text

```html
<mdc-card>
  <mdc-card-text> {{ text }} </mdc-card-text> 
</mdc-card>
```

### Actions

```html
<mdc-card>
  <mdc-card-actions :actions="actions" @action="onAction" />
</mdc-card>
```

This area is used for showing different actions the user can take. The `actions`
property is an array of { action, text } object litteral. The `action` member is 
passed as parameter to the `action` event. The `text` member is action button 
text:

```html
<mdc-card>
  <mdc-card-actions 
  :actions="[{action: 'action1', text: 'Do something'}, ...]"  />
</mdc-card>
```

The actions array items can also be Strings for shorthand:    

```html
<mdc-card>
  <mdc-card-actions :actions="['action1', 'action2']"  />
</mdc-card>
```

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`:actions`| String|| array of action Objects or action Strings |
|`@action`| number|| binds action event |

### Horizontal block

You can stack multiple card blocks horizontally instead of vertically, by 
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

`mdc-media-img` is designed to be used in horizontal blocks, taking up a 
fixed height, rather than stretching to the width of the card.

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
|`mult`| Number|| optional size multiplicator, can be `1.5`, `2` or `3`" |


> Unlike media blocks, media items are not designed to be used as optional 
containers.


### Reference
- https://material.io/components/web/catalog/cards

