## Usage

Cards are composed of different content blocks which are typically laid out in vertical succession.
The card package provides the building blocks for composing your card components.

| Component                 | Usage                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------- |
| `mdc-card`                | Mandatory, for the card component                                                      |
| `mdc-card-media`          | Media area that displays a custom background-image with background-size: cover         |
| `mdc-card-primary-action` | The main tappable area of the card                                                     |
| `mdc-card-actions`        | Row containing action buttons and/or icons                                             |
| `mdc-card-action-buttons` | A group of action buttons, displayed on the left side of the card (in LTR)             |
| `mdc-card-action-icons`   | A group of supplemental action icons, displayed on the right side of the card (in LTR) |
| `mdc-card-action-button`  | An action button with text                                                             |
| `mdc-card-action-icon`    | An action icon with no text                                                            |

### Card

```html
<mdc-card>
  <mdc-card-primary-action>
    <mdc-card-media :src="card">
    </mdc-card-media>
  </mdc-card-primary-action>
  <mdc-card-header
    title="Title goes here"
    subtitle="subtitle here" >
  </mdc-card-header>
  <mdc-card-actions>
    <mdc-card-action-buttons>
      <mdc-card-action-button>ACTION</mdc-card-action-button>
    </mdc-card-action-buttons>
    <mdc-card-action-icons>
      <mdc-card-action-icon icon="star" />
    </mdc-card-action-icons>
  </mdc-card-actions>
</mdc-card>
```

| props     | Type    | Default | Description                                               |
| --------- | ------- | ------- | --------------------------------------------------------- |
| `stroked` | Boolean |         | Removes the shadow and displays a hairline stroke instead |

### Primary Action

Typically contains most (or all) card content except mdc-card-actions.
Only applicable to cards that have a primary action that the main surface should trigger.

| event    | Description                 |
| -------- | --------------------------- |
| `@click` | emited on action area click |

| prop           | Type           | Default   | Description                                 |
| -------------- | -------------- | --------- | ------------------------------------------- |
| `event`        | String         | undefined | optional event to emit on click             |
| `event-target` | Object         | vm.$root  | optional event target, defaults to root bus |
| `event-args`   | Array          | []        | optional event args                         |
| `href`         | String         | undefined | link's href                                 |
| `to`           | String, Object | undefined | router-link property _(\*)_                 |
| `replace`      | Boolean        | false     | router-link property _(\*)_                 |
| `append`       | Boolean        | false     | router-link property _(\*)_                 |

> _(\*)_ Requires [vue-router](https://router.vuejs.org).
> If the `to` property is defined, the item behaves as a
> [router-link](https://router.vuejs.org/en/api/router-link.html).

### Media

```html
<mdc-card>
  <mdc-card-media :src="media.jpg" />
</mdc-card>
```

`mdc-card-media` is used for showing rich media in cards and optionally as a
container:

```html
<mdc-card>
  <mdc-card-media :src="media.img">
    <mdc-card-title>Title</mdc-card-title>
  </mdc-card-media>
</mdc-card>
```

| props    | Type    | Default  | Description                                                     |
| -------- | ------- | -------- | --------------------------------------------------------------- |
| `src`    | String  | required | the backgound image source                                      |
| `square` | Boolean |          | Automatically scales the media area’s height to equal its width |

> by default the media area size is 16x9

### Header (Title/Subtitle)

```html
<mdc-card>
  <mdc-card-header :title="title" :subtitle="subtitle" />
</mdc-card>
```

| props         | Type    | Default | Description                       |
| ------------- | ------- | ------- | --------------------------------- |
| `title`       | String  |         | the title                         |
| `subtitle`    | String  |         | the subtitle                      |
| `large-title` | Boolean |         | whether the title should be large |

### Supporting Text

```html
<mdc-card>
  <mdc-card-text> {{ text }} </mdc-card-text>
</mdc-card>
```

### Actions

```html
<mdc-card>
  <mdc-card-actions>
    <mdc-card-action-button>Action</mdc-card-action-button>
  </mdc-card-actions>
</mdc-card>
```

| props        | Type    | Default | Description                                                                                                                            |
| ------------ | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `full-bleed` | Boolean |         | Removes the action area’s padding and causes its only child (an mdc-card\_\_action element) to consume 100% of the action area’s width |

### Action Buttons

```html
<mdc-card>
  <mdc-card-actions>
    <mdc-card-action-button>Action1</mdc-card-action-button>
    <mdc-card-action-button>Action2</mdc-card-action-button>
  </mdc-card-actions>
</mdc-card>
```

| props                | Type           | Default                  | Description                                            |
| -------------------- | -------------- | ------------------------ | ------------------------------------------------------ |
| `disabled`           | boolean        | false                    | whether the button is disabled                         |
| `accent`             | Boolean        |                          | secondary color theme                                  |
| `compact`            | Boolean        |                          | reduces the amount of horizontal padding in the button |
| `event`              | String         | optional                 | optional event to emit on click                        |
| `event-target`       | Object         | vm.$root                 | optional event target, defaults to root bus            |
| `event-args`         | Array          | []                       | optional event args                                    |
| `href`               | String         |                          | link's href, renders anchor (see notes below)          |
| `to`                 | String, Object | undefined                | router-link property _(\*)_                            |
| `replace`            | Boolean        | false                    | router-link property _(\*)_                            |
| `append`             | Boolean        | false                    | router-link property _(\*)_                            |
| `exact`              | Boolean        | false                    | router-link property _(\*)_                            |
| `active-class`       | String         | router-link-active       | router-link property _(\*)_                            |
| `exact-active-class` | String         | router-link-exact-active | router-link property _(\*)_                            |

> _(\*)_ Requires [vue-router](https://router.vuejs.org)

Using the `href` attribute will render `<a role="button">`

> Accessibility Warning:  
> Buttons are expected to be triggered using the Space or Enter key,
> while links are expected to be triggered using the Enter key.
> Additionally, button and links have different behavior on right click.
> see this [MDN note](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role#Keyboard_and_focus)

### Action Icons

```html
<mdc-card>
  <mdc-card-actions>
    <mdc-card-action-icon icon="star">
    <mdc-card-action-icon icon="favorite">
  </mdc-card-actions>
</mdc-card>
```

| props  | Type   | Default   | Description   |
| ------ | ------ | --------- | ------------- |
| `icon` | String | undefined | material icon |

> for custom icon markup, do not set the _icon_ prop

### Action Button & Icons

you can group Buttons and icons on the same line

```html
    <mdc-card>
      <mdc-card-actions>
        <mdc-card-action-buttons>
          <mdc-card-action-button>ACTION</mdc-card-action-button>
        </mdc-card-action-buttons>
        <mdc-card-action-icons>
          <mdc-card-action-icon icon="star" />
        </mdc-card-action-icons>
      </mdc-card-actions>
    </mdc-card>
  </div>
```

### Reference

* <https://material.io/components/web/catalog/cards>
