## Tabs

```html
<mdc-tab-bar>
  <mdc-tab>item one</mdc-tab>              
  <mdc-tab>item two</mdc-tab>              
  <mdc-tab>item three</mdc-tab>              
</mdc-tab-bar>
```

### props

#### mdc-tab

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`active`|Boolean| false | set the tab active |
|`event`|String| optional | optional event to emit on click  |
|`event-target`|Object| vm.$root | optional event target, defaults to root bus |
|`event-args`|Array| [] | optional event args |

> emits `click` event

> set an `href` for link behaviour

#### mdc-tab-bar

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`indicator-primary`|Boolean| false | whether the indicator has the primary color |
|`indicator-accent`|String| optional | whether the indicator has the accent color  |

> emits `change` event with the active index as parameter


### Tabs with icons

```html
<mdc-tab-bar>
  <mdc-tab icon="phone"></mdc-tab>
  <mdc-tab icon="favorite"></mdc-tab>
  <mdc-tab icon="personal_pin"></mdc-tab>
</mdc-tab-bar>
```

### Tabs with icons and text

```html
<mdc-tab-bar>
  <mdc-tab icon="phone">Recents</mdc-tab>
  <mdc-tab icon="favorite">Favorites</mdc-tab>
  <mdc-tab icon="personal_pin">Nearby</mdc-tab>
</mdc-tab-bar>
```

### reference
- https://material.io/components/web/catalog/tabs
