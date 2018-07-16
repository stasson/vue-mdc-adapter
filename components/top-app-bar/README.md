## Usage

```html
<mdc-top-app-bar title="Title2" event="nav">
  <mdc-top-app-bar-action @click="showHelp" icon="help"></mdc-top-app-bar-action>
</mdc-top-app-bar>
<mdc-drawer toggle-on="nav" temporary/>
```

```javascript
var vm = new Vue({
  methods: {
    showHelp() {
      console.log('show help')
    }
  }
})
```

### top-app-bars

`mdc-top-app-bar` acts as a container for multiple rows containing items such as
application title, navigation menu, and tabs, among other things.
top-app-bars scroll with content by default.

| Props          | Type    | Default  | Description                                                     |
| -------------- | ------- | -------- | --------------------------------------------------------------- |
| `fixed`        | Boolean | false    | fixed at the top of the page                                    |
| `short`        | Boolean | false    | Short top app bars should only be used with one action item     |
| `collapsed`    | String  | false    | Short top app bars can be configured to always appear collapsed |
| `dense`        | Boolean | false    | optional changes top app bar to be dense                        |
| `prominent`    | Boolean | false    | optional changes too app bar style to be prominent              |
| `event`        | String  | optional | optional event to emit on navigation click                      |
| `event-target` | Object  | vm.$root | optional event target, defaults to root bus                     |

Short top app bars should only be used with one action item.
Short top app bars can be configured to always appear collapsed by applying the `collapsed` attribute.

### events

| Name  | Args | Description                                  |
| ----- | ---- | -------------------------------------------- |
| `nav` |      | emitted when the navigation icon is clicked. |

### Action icons

* `mdc-top-app-bar-action` wraps any icons placed on the right side of an
  mdc-top-app-bar.

  | props          | Type   | Default  | Description                                 |
  | -------------- | ------ | -------- | ------------------------------------------- |
  | `icon`         | String |          | the material icon name                      |
  | `event`        | String | optional | optional event to emit on action click      |
  | `event-target` | Object | vm.$root | optional event target, defaults to root bus |

```html
<mdc-top-app-bar title="Title" event="nav">
    <mdc-top-app-bar-action @click="show-help" icon="help"></mdc-top-app-bar-action>
    <mdc-top-app-bar-action @click="do-download" icon="file_download"></mdc-top-app-bar-action>
</mdc-top-app-bar>
```

> if the `event` property is not specified, use @click to catch click events.

> leave the icon prop not set to render custom icons.

**Font Awsome**

```html
  <mdc-top-app-bar-action event="show-help" iconClasses="fa fa-star"></mdc-top-app-bar-action>
```

refer to the [MDC Documentation](https://material.io/components/web/catalog/toolbar/#flexible-toolbar-requires-javascript) to learn about customization options.

### Tab Bar Row

* `mdc-top-app-bar` has an additional available slot for use when creating a
  top bar combined w/ top tabs, named `tabs`.


```html
<mdc-top-app-bar title="Title" event="nav" dense>
    <mdc-top-app-bar-action @click="show-help" icon="help"></mdc-top-app-bar-action>
    <mdc-top-app-bar-action @click="do-download" icon="file_download"></mdc-top-app-bar-action>
    <mdc-tab-bar slot="tabs">
      <mdc-tab to="/dogs">Dogs</mdc-tab>
      <mdc-tab to="/cats">Cats</mdc-tab>
    </mdc-tab-bar>
</mdc-top-app-bar>
```

### Reference

* <https://material.io/components/web/catalog/top-app-bar>
