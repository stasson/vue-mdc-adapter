## Usage

```html
<mdc-top-app-bar title="Title2" @click="openDrawer">
  <mdc-top-app-bar--action @click="showHelp" icon="help"></mdc-top-app-bar--action>
</mdc-top-app-bar>
```

### top-app-bars

`mdc-top-app-bar` acts as a container for multiple rows containing items such as
application title, navigation menu, and tabs, among other things.
top-app-bars scroll with content by default.

| props       | Type    | Default | Description                                                     |
| ----------- | ------- | ------- | --------------------------------------------------------------- |
| `short`     | Boolean |         | Short top app bars should only be used with one action item     |
| `collapsed` | String  | false   | Short top app bars can be configured to always appear collapsed |
| `dense`     | Boolean | false   | optional changes tpo app bar to be dense                        |

Short top app bars should only be used with one action item.
Short top app bars can be configured to always appear collapsed by applying the `collapsed` attribute.

### Action icons

* `mdc-top-app-bar--action` wraps any icons placed on the right side of an
  mdc-top-app-bar.

  | props  | Type   | Default | Description            |
  | ------ | ------ | ------- | ---------------------- |
  | `icon` | String |         | the material icon name |

```html
<mdc-top-app-bar title="Title" @MDCTopAppBar:nav="openDrawer">
    <mdc-top-app-bar--action @click="showHelp" icon="help"></mdc-top-app-bar--action>
    <mdc-top-app-bar--action @click="doDownload" icon="file_download"></mdc-top-app-bar--action>
</mdc-top-app-bar>
```

> You may also use the underlying material-components-web navigation event `MDCTopAppBar:nav`

> do not set the icon prop to render your custom icons

**Font Awsome**

```html
  <mdc-top-app-bar--action @click="showHelp" iconClasses="fa fa-star"></mdc-top-app-bar--action>
```

refer to the [MDC Documentation](https://material.io/components/web/catalog/toolbar/#flexible-toolbar-requires-javascript) to learn about customization options.

### Reference

* <https://material.io/components/web/catalog/top-app-bar>
