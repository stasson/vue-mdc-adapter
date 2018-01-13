## Usage

```html
<mdc-tab-bar>
  <mdc-tab>item one</mdc-tab>              
  <mdc-tab>item two</mdc-tab>              
  <mdc-tab>item three</mdc-tab>              
</mdc-tab-bar>
```

### props

#### mdc-tab

mdc-tab behaves as a navigational link. Add an `href` for simple link behavior
or the `to` property for router-link behavior. mdc-tab dispatches `@click` event.


| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`active`|Boolean| false | set the tab active |
|`event`|String| optional | optional event to emit on click  |
|`event-target`|Object| vm.$root | optional event target, defaults to root bus |
|`event-args`|Array| [] | optional event args |
|`to`|String, Object| undefined | router-link property _(*)_ |
|`replace`|Boolean| false | router-link property _(*)_ |
|`append`|Boolean| false | router-link property _(*)_ |
|`exact`|Boolean| false | router-link property _(*)_ |
|`active-class`|String| router-link-active | router-link property _(*)_ |
|`exact-active-class`|String| router-link-exact-active | router-link property _(*)_ |

> _(*)_ Requires [vue-router](https://router.vuejs.org)
> If the `to` property is defined, the item behaves as a
> [router-link](https://router.vuejs.org/en/api/router-link.html)

#### mdc-tab-bar

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`indicator-primary`|Boolean| false | whether the indicator has the primary color |
|`indicator-accent`|Boolean| false | whether the indicator has the accent color  |

> emits `@change` event with the active index as parameter


### Tabs with icons

```html
<mdc-tab-bar>
  <mdc-tab icon="phone"></mdc-tab>
  <mdc-tab icon="{className: 'fa fa-favorite'}"></mdc-tab>
  <mdc-tab><svg slot="icon">...</svg></mdc-tab>
</mdc-tab-bar>
```

> use `icon` slot for custom icon markup

### Tabs with icons and text

```html
<mdc-tab-bar>
  <mdc-tab icon="phone">Recents</mdc-tab>
  <mdc-tab icon="favorite">Favorites</mdc-tab>
  <mdc-tab icon="personal_pin">Nearby</mdc-tab>
</mdc-tab-bar>
```

### reference
- <https://material.io/components/web/catalog/tabs>
