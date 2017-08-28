## Typography

The mdc-typography components defines basic properties for text, such as the 
typeface and antialiasing settings.

```html
<mdc-display>Display</mdc-display>
<mdc-headline>Headline</mdc-headline>
<mdc-title>Title <mdc-caption>Caption</mdc-caption></mdc-title>
<mdc-subheading>Subheading</mdc-subheading>
<mdc-body>Body</mdc-body>
```

>  mdc-typography componentsshould only be used in a text context; using this 
property on UI elements such as buttons may cause them to be positioned incorrectly.

> Material Design typography uses the Roboto font. mdc-typography only uses 
300, 400 and 500.



### mdc-display

```html
<mdc-display typo='display4'>Display4</mdc-display>
<mdc-display typo='display3'>Display3</mdc-display>
<mdc-display typo='display2'>Display2</mdc-display>
<mdc-display typo='display1'>Display1</mdc-display>
```

| prop | Type | Default | Description |
|-------|------|---------|------------|
|`typo`| String| `display1` | `display1`, `display2`, `display3` or `display4`|

> mdc-display renders as `<h1>`


### mdc-headline

```html
<mdc-headline>Headline</mdc-headline>
```

> mdc-headline renders as `<h1>`


### mdc-subheading

```html
<mdc-subheading typo='subheading2'>Subheading2</mdc-subheading>
<mdc-subheading typo='subheading1'>Subheading1</mdc-subheading>
```

| prop | Type | Default | Description |
|-------|------|---------|------------|
|`typo`| String| `subheading2` | `subheading1` or `subheading2`|

> mdc-subheading renders as `<h2>` (subheading2) or `<h3>` (subheading1)


### mdc-title & mdc-caption

```html
<mdc-title>Title <mdc-caption>Caption</mdc-caption></mdc-title>
```
> mdc-title renders as `<h2>` 
> mdc-caption renders as `<span>`


### mdc-body

```html
<mdc-body typo='body1'>Body1</mdc-body>
<mdc-body typo='body2'>Body2</mdc-body>
```

| prop | Type | Default | Description |
|-------|------|---------|------------|
|`typo`| String| `body1` | `body1` or `body2`|

> mdc-body renders as `<p>`
> use body2 for text calling out something


### Reference

- https://material.io/components/web/catalog/typography/