## Usage

### Basic List

```html
<mdc-list>
  <mdc-list-item>Single-line item</mdc-list-item>
  <mdc-list-item>Single-line item</mdc-list-item>
  <mdc-list-item>Single-line item</mdc-list-item>
</mdc-list>
```

### Props

#### mdc-list

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`dense`|Boolean|| dense style |
|`bordered`|Boolean|| bordered style |
|`two-line`|Boolean|| two-line style |
|`avatar-list`|Boolean|| set avatar style list |
|`interactive`|Boolean|| set interactive style for hover, focus, and press states |

#### mdc-list-item

| prop | Type | Default | Description |
|------|------|---------|-------------|
| `selected` | Boolean | | Styles the row in a selected state (*)|
| `activated` | Boolean | | Styles the row in an activated state (*)|

> Note: the difference between selected and activated states:
- Selected is ephemeral and likely to change soon. E.g., selecting one or more photos to share in Google Photos. Multiple items in a list can be selected at the same time.
- Activated is more permanent within the page’s lifetime. E.g., the currently highlighted destination in a nav drawer. Only one item in a list can be activated at a time.

> if the list is interactive, `mdc-list-item` will dispatch mouse and keyboard listeners (`@click`, ...)

### Dense List

```html
<mdc-list dense>
  <mdc-list-item>Dense item</mdc-list-item>
  <mdc-list-item>Dense item</mdc-list-item>
  <mdc-list-item>Dense item</mdc-list-item>
</mdc-list>
```
### Bordered List

```html
<mdc-list bordered>
  <mdc-list-item>Bordered item</mdc-list-item>
  <mdc-list-item>Bordered item</mdc-list-item>
  <mdc-list-item>Bordered item</mdc-list-item>
</mdc-list>
```

### Two-line lists

To insert a second line, set the slot attribute to `secondary`  

```html
<mdc-list two-line>
  <mdc-list-item>
    <span>First Line</span>
    <span slot="secondary">Second Line</span>
  </mdc-list-item>
  <mdc-list-item>
    <span>First Line</span>
    <span slot="secondary">Second Line</span>
  </mdc-list-item>
</mdc-list>
```

### List “Detail” Elements

To insert a detail, set the slot attribute to `start-detail` or `end-detail`

```html
<mdc-list>
  <mdc-list-item>
    <i slot="start-detail" class="material-icons">favorite_border</i>
    With start details
  </mdc-list-item>
  <mdc-list-item>
    With end details
    <i slot="end-detail" class="material-icons">star_border</i>
  </mdc-list-item>
</mdc-list>
```

### Avatar start detail


```html
<mdc-list avatar-list>
  <mdc-list-item>
    <img slot="start-detail" src="/users/1/profile_pic.png"
         width="56" height="56" alt="Picture of Janet Perkins">
    Janet Perkins
  </mdc-list-item>
  <mdc-list-item>
    <img slot="start-detail" src="/users/2/profile_pic.png"
         width="56" height="56" alt="Picture of Peter Carlsson">
    Peter Carlsson
  </mdc-list-item>
</mdc-list>
```

### List Dividers

```html
  <mdc-list>
    <mdc-list-item>Single-line item</mdc-list-item>
    <mdc-list-item>Single-line item</mdc-list-item>
    <mdc-list-divider />
    <mdc-list-item>Single-line item</mdc-list-item>
  </mdc-list>
```

> Separators span the entire list width by default, use the `padded` property to add padding

```html
  <mdc-list>
    <mdc-list-item>Single-line item</mdc-list-item>
    <mdc-list-divider padded />
    <mdc-list-item>Single-line item</mdc-list-item>
  </mdc-list>
```


> for avatar list, add the `inset` attribute to `mdc-list-divider`

```html
<mdc-list avatar-list>
  <mdc-list-item>
    <img slot="start-detail" src="/users/1/profile_pic.png"
         width="56" height="56" alt="Picture of Janet Perkins">
    Janet Perkins
  </mdc-list-item>
  <mdc-list-divider inset />
  <mdc-list-item>
    <img slot="start-detail" src="/users/2/profile_pic.png"
         width="56" height="56" alt="Picture of Peter Carlsson">
    Peter Carlsson
  </mdc-list-item>
</mdc-list>
```


### List Groups

```html
<mdc-list-group>
  <mdc-list-group-header>Group 1</mdc-list-group-header>
  <mdc-list>
    <mdc-list-item>Single-line item</mdc-list-item>
    <mdc-list-item>Single-line item</mdc-list-item>
    <mdc-list-item>Single-line item</mdc-list-item>
  </mdc-list>
  <mdc-list-group-divider />
  <mdc-list-group-header>Group 2</mdc-list-group-header>
  <mdc-list>
    <mdc-list-item>Single-line item</mdc-list-item>
    <mdc-list-item>Single-line item</mdc-list-item>
    <mdc-list-item>Single-line item</mdc-list-item>
  </mdc-list>
</mdc-list-group>
```

### Reference
- <https://material.io/components/web/catalog/lists>
