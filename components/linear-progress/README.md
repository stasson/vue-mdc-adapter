## Usage

The MDC Linear Progress component is a spec-aligned linear progress indicator 
component 


```html
<mdc-linear-progress :progresValue=""></mdc-linear-progress>
```

```javascript
var vm = new Vue({
  data:{
    progresValue: 0.5
  }
})
```

### props

| prop | Type | Default | Description |
|-------|------|---------|-------------|
|`open`|Boolean| true | whether the component is shown |
|`accent`|Boolean|false| accent color |
|`indeterminate`|Boolean|false| indeterminate style |
|`reverse`|Boolean|false| reverse style |
|`progress`|Number|undefined| a number between 0 and 1 |
|`buffer`|Number|undefined| a number between 0 and 1 |


* Determinate

```html
<mdc-linear-progress progress=0.5></mdc-linear-progress>
```

* Buffer

```html
<mdc-linear-progress progress=0.5 buffer=0.75></mdc-linear-progress>
```

* Indeterminate

```html
<mdc-linear-progress indeterminate></mdc-linear-progress>
```

* Reverse

```html
<mdc-linear-progress reverse progress=0.5></mdc-linear-progress>
```
* Accent

```html
<mdc-linear-progress accent progress=0.5></mdc-linear-progress>
```

### Reference
- <https://material.io/components/web/catalog/linear-progress>

