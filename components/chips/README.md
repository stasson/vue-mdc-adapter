## Usage

```html
  <!-- material icons -->
  <mdc-chip-set>
    <mdc-chip leadingIcon="face" trailingIcon="more_vert">Jane Smith</mdc-chip>
    <mdc-chip leadingIcon="face" trailingIcon="more_vert">John Doe</mdc-chip>
  </mdc-chip-set>

  <!-- font-awesome -->
  <mdc-chip-set>
    <mdc-chip :leadingIconClasses="{fa:1,'fa-font-awesome':1 }" :trailingIconClasses="{fa:1,'fa-ellipsis-v':1}">Jane Smith</mdc-chip>
    <mdc-chip :leadingIconClasses="{fa:1, 'fa-smile-o':1}" :trailingIconClasses="{fa:1, 'fa-ellipsis-v':1}">John Doe</mdc-chip>
  <mdc-chip-set>
```

### props

#### mdc-chip

mdc-chip is a compact element that allows a user to enter information or select a choice.

| prop                  | Type   | Default  | Description                                   |
| --------------------- | ------ | -------- | --------------------------------------------- |
| `event`               | String | optional | optional event to emit on click               |
| `event-target`        | Object | vm.$root | optional event target, defaults to root bus   |
| `event-args`          | Array  | []       | optional event args                           |
| `leadingIcon`         | String | optional | optional leading icon                         |
| `trailingIcon`        | String | optional | optional trailing icon                        |
| `leadingIconClasses`  | Object | optional | optional leading icon classes (font-awesome)  |
| `trailingIconClasses` | Object | optional | optional trailing icon classes (font-awesome) |

| event  | description                 |
|--------|-----------------------------|
| @click | emitted on chip interaction |

### Chips with icons

```html
<mdc-chip-set>
  <mdc-chip leadingIcon="face" trailingIcon="more_vert">Jane Smith</mdc-chip>
  <mdc-chip leadingIcon="face" trailingIcon="more_vert">John Doe</mdc-chip>
</mdc-chip-set>
```

### reference

* <https://material.io/components/web/catalog/chips>
