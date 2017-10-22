## Getting Started


### CDN

```html
<head>
  <!-- import reset material icons, fonts and vue-mdc-adapter stylesheets -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">  
  <link rel="stylesheet" href="https://unpkg.com/vue-mdc-adapter/dist/vue-mdc-adapter.min.css">  
  
  <!-- import vue and then vue-mdc-adapter -->
  <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-mdc-adapter/dist/vue-mdc-adapter.min.js"></script>
</head>
<body>
  <!-- vue mdc markup -->
<body>
```
> Quick start with vue-cli

```bash
npm install -g vue-cli 
vue init stasson/vue-mdc-adapter-simple my-project
```


### Webpack/Rollup

```bash
npm install --save vue-mdc-adapter
```

> vue-mdc-adapter and material components uses es6 for code and sass for styles
> make sure your webpack/rollup config resolves node_modules for transpiling 
> and sass imports

- ES6 Imports 

```javascript
import Vue from 'vue'
import VueMdcAdapter from 'vue-mdc-adapter'
Vue.use(VueMdcAdapter)
```

- SCSS Theming

```scss
$mdc-theme-primary: #212121;
$mdc-theme-accent: #41B883;
$mdc-theme-background: #fff;

@import "vue-mdc-adapter/components/styles";
```

> or cherry pick components:

- ES6 Imports 
```javascript
import Vue from 'vue'
import VueMdcButton from 'vue-mdc-adapter/components/button'
Vue.use(VueMdcButton)
```

- SCSS
```scss
@import "vue-mdc-adapter/components/button/mdc-button";
```
