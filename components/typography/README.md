## Usage

The `mdc-typography` components defines basic properties for text, such as the
typeface and antialiasing settings.

```html
<mdc-display>Typography</mdc-display>
<mdc-headline>Headline</mdc-headline>
<mdc-title>Title <mdc-caption>Caption</mdc-caption></mdc-title>
<mdc-subheading>Subheading</mdc-subheading>
<mdc-body>Body</mdc-body>
```

> Material Design typography uses the Roboto font. mdc-typography only uses
> 300, 400 and 500.

### mdc-text

`mdc-text` is the base typography component, it has no restriction on props.

```html
<mdc-text typo='body2' tag="span" adjust-margin></mdc-text>
```

| prop   | Type   | Default | Description            |
| ------ | ------ | ------- | ---------------------- |
| `typo` | String | `body1` | one of the styles (\*) |
| `tag`  | String | `p`     | rendering tag          |

(\*) styles:

```javascript
const typos = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'headline5',
  'headline6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline'
]
```

### mdc-display

| prop   | Type   | Default     | Description            |
| ------ | ------ | ----------- | ---------------------- |
| `typo` | String | `headline4` | one of the styles (\*) |
| `tag`  | String | `h1`        | rendering tag          |

(\*) styles: 'headline1', 'headline2', 'headline3', 'headline4',

### mdc-headline

| prop  | Type   | Default | Description   |
| ----- | ------ | ------- | ------------- |
| `tag` | String | `h2`    | rendering tag |

### mdc-title

| prop  | Type   | Default | Description   |
| ----- | ------ | ------- | ------------- |
| `tag` | String | `h3`    | rendering tag |

### mdc-caption

| prop  | Type   | Default | Description   |
| ----- | ------ | ------- | ------------- |
| `tag` | String | `span`  | rendering tag |

### mdc-subheading

| prop   | Type   | Default     | Description            |
| ------ | ------ | ----------- | ---------------------- |
| `typo` | String | `subtitle2` | one of the styles (\*) |
| `tag`  | String | `h4`        | rendering tag          |

(\*) styles: 'subtitle1', 'subtitle2'

### mdc-body

| prop   | Type   | Default | Description            |
| ------ | ------ | ------- | ---------------------- |
| `typo` | String | `body1` | one of the styles (\*) |
| `tag`  | String | `p`     | rendering tag          |

(\*) styles: body1, body2

> use body2 for text calling out something

### Reference

* <https://material.io/components/web/catalog/typography>
