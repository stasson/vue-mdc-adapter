## Usage

```html
<mdc-chip-set>
  <mdc-chip>Chip content 1</mdc-chip>
  <mdc-chip>Chip content 2</mdc-chip>
  <mdc-chip>Chip content 3</mdc-chip>
</mdc-chip-set>
```

### props

#### mdc-chip

mdc-chip is a compact element that allows a user to enter information or select a choice. mdc-chip dispatches
`@MDCChip:interaction` event.

| prop           | Type    | Default  | Description                                 |
| -------------- | ------- | -------- | ------------------------------------------- |
| `event`        | String  | optional | optional event to emit on click             |
| `event-target` | Object  | vm.$root | optional event target, defaults to root bus |
| `event-args`   | Array   | []       | optional event args                         |
| `icon`         | String  | optional | optional leading or trailing icon           |
| `trailing`     | Boolean | false    | if true icon is a trailing icon             |

> emits `@MDCChip:interaction` event with the chip as parameter

### Chips with icons

```html
<mdc-chip-set>
  <mdc-chip icon="save">Chip content 1</mdc-chip>
  <mdc-chip icon="delete" trailing>Chip content 2</mdc-chip>
  <mdc-chip>Chip content 3</mdc-chip>
</mdc-chip-set>
```

### reference

* <https://material.io/components/web/catalog/chips>
