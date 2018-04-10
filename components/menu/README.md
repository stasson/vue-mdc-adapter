## Usage

```html
<mdc-menu-anchor>
  <mdc-button raised @click="open=true">Open Menu</mdc-button>
  <mdc-menu v-model="open" @select="onSelect" @cancel="onCancel">
    <mdc-menu-item>A Menu Item</mdc-menu-item>
    <mdc-menu-item>Another Menu Item</mdc-menu-item>
    <mdc-menu-item disabled>Disabled Menu Item</mdc-menu-item>
    <mdc-menu-divider>Another Menu Item</mdc-menu-divider>
    <mdc-menu-item>Parted Menu Item</mdc-menu-item>
  </mdc-menu>
</mdc-menu-anchor>
```

```javascript
var vm = new Vue({
  data: {
    open: false,
  },
  methods: {
    onSelect(selected) {
      console.log('selected index: ' + selected.index);
    },
    onCancel() {
      console.log('menu cancelled');
    },
  },
});
```

### Props

#### mdc-menu

| props           | Type              | Default   | Description                                                   |
| --------------- | ----------------- | --------- | ------------------------------------------------------------- |
| `open`          | Boolean or Object | false     | optional v-model when true opens menu                         |
| `quick-open`    | Boolean           | false     | sets whether the menu should open and close without animation |
| `anchor-corner` | Number            | undefined | set anchor corner alignment of menu corner                    |
| `anchor-margin` | Object            | undefined | set anchor margin of menu (top, right, bottom, left)          |

> if open is an object it should set {focusIndex: number} as per [MDC menu docs](https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu)

> for anchor corner and margin see the [MDC docs](https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu#MDCMenu)

#### mdc-menu-item

| props      | Type    | Default | Description              |
| ---------- | ------- | ------- | ------------------------ |
| `disabled` | Boolean | false   | whether item is disabled |

### Events

| props     | arg                                    | Description                                                |
| --------- | -------------------------------------- | ---------------------------------------------------------- |
| `@change` | Boolean                                | notify v-model/listeners that menu open state has changed. |
| `@select` | `{ index: Number, item: HTMLElement }` | emitted when a menu item is selected                       |
| `@cancel` |                                        | emitted when menu is cancelled                             |

> `select` event data specifies index and item :

### Methods

* `show({focusIndex: number} = {}) => void`  
  Shows the menu. Takes an options object containing a `focusIndex` property that
  specifies the index of the menu item to be focused.
  If the options object or `focusIndex` is omitted, no menu item will be focused.

* `hide() => void`  
  Closes the menu.

### Reference

* <https://material.io/components/web/catalog/menus>
