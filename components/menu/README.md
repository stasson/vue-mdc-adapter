## Usage

```html
<mdc-menu-anchor>
  <mdc-button raised @click="showMenu">Open Menu</mdc-button>
  <mdc-menu ref="menu" @select="onSelect" @cancel="onCancel">
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
  methods: {
    showMenu () {
      this.$refs.menu.show()
    },
    onSelect (selected) {
      console.log('selected index: ' + selected.index)
    },
    onCancel () {
      console.log('menu cancelled')
    },
  }
})
```

### Positioning

The menu can either be positioned manually, or automatically, by anchoring it to an element.

The anchor is a wrapper element that contains the actual visible element to attach to:

```html
<mdc-menu-anchor>
  <mdc-button>Menu</mdc-button>
  <mdc-menu >
    <!-- ... -->
  </mdc-menu>
</mdc-menu-anchor>
```

> for manual positioning see  https://material.io/components/web/catalog/menus/#manual-positioning


### Props

#### mdc-menu

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`open-from-top-left`|Boolean| false | overrides opening point |
|`open-from-top-right`|Boolean| false | overrides opening point |
|`open-from-bottom-left`|Boolean| false | overrides opening point |
|`open-from-bottom-right`|Boolean| false | overrides opening point |

#### mdc-menu-item
| props | Type | Default | Description |
|-------|------|---------|-------------|
|`:disabled`|Boolean| false | wether item is disabled |



### Events 
| props | arg | Description |
|-------|-----|-------------|
|`@select`| `{ index: Number, item: HTMLElement }` | emited when a menu item is selected   |
|`@cancel`| | emited when menu is cancelled   |

> select event data specisfies index and item :  


### Methods

- `open({focusIndex: number} = {}) => void`  
Opens the menu. Takes an options object containing a focusIndex property that 
specifies the index of the menu item to be focused.
If the options object or focusIndex is omitted, no menu item will be focused.

- `close() => void`  
Closes the menu.

### Reference
- <https://material.io/components/web/catalog/menus>
