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
300, 400 and 500.

### mdc-text

`mdc-text` is the base typography component, it has no restriction on props.

```html
<mdc-text typo='body2' tag="span" adjust-margin></mdc-text>
```

| prop           | Type    | Default | Description              |
|----------------|---------|---------|--------------------------|
|`typo`          | String  | `body1` | one of the styles (*)    |
|`tag`           | String  | `p`     | rendering tag            |
|`adjust-margin` | Boolean | `false` | whether to adjust margin (**) |

(*) styles: display4, display3 , display2, display1, headline, title, subheading1,
subheading2, body1, body2, caption, button


(**)  the `adjust-margin` property should only be used in a text context; using this 
property on UI elements such as buttons might cause them to be positioned incorrectly.

> wrap typography components with  `mdc-text-section` to force margin adjustment:

```html
<mdc-text-section>
  <mdc-headline>Headline</mdc-headline>
  <mdc-title>Title <mdc-caption>Caption</mdc-caption></mdc-title>
  <mdc-subheading >Subheading</mdc-subheading>
  <mdc-body>Body</mdc-body>
  <mdc-body typo='body2'>Callout</mdc-body>
</mdc-text-section>
```

### mdc-display

| prop  | Type   | Default   | Description |
|-------|--------|-----------|-------------|
|`typo` | String | `display1` | one of the styles (*) |
|`tag`  | String | `h1`       | rendering tag |
|`adjust-margin` | Boolean   | `false` | whether to adjust margin |

(*) styles: display4, display3, display2, display1 

### mdc-headline

| prop  | Type   | Default  | Description |
|-------|--------|----------|-------------|
|`tag`  | String | `h2`     | rendering tag |
|`adjust-margin` | Boolean | `false` | whether to adjust margin |



### mdc-title 

| prop  | Type   | Default   | Description |
|-------|--------|-----------|-------------|
|`tag`  | String | `h3`       | rendering tag |
|`adjust-margin` | Boolean   | `false` | whether to adjust margin |

### mdc-caption

| prop  | Type   | Default   | Description |
|-------|--------|-----------|-------------|
|`tag`  | String | `span`       | rendering tag |
|`adjust-margin` | Boolean   | `false` | whether to adjust margin |


### mdc-subheading

| prop  | Type   | Default   | Description |
|-------|--------|-----------|-------------|
|`typo` | String | `subheading2` | one of the styles (*) |
|`tag`  | String | `h4`       | rendering tag |
|`adjust-margin` | Boolean   | `false` | whether to adjust margin |

(*) styles: subheading1, subheading2



### mdc-body

| prop  | Type   | Default   | Description |
|-------|--------|-----------|-------------|
|`typo` | String | `body1` | one of the styles (*) |
|`tag`  | String | `p`       | rendering tag |
|`adjust-margin` | Boolean    | `false` | whether to adjust margin |

(*) styles: body1, body2

> use body2 for text calling out something


### Reference

- <https://material.io/components/web/catalog/typography>