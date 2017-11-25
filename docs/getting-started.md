
> This Guide assumes you are familiar with [Vue.js](https://vuejs.org/v2/guide/index.html)
components and plugin system.

## Quick Start

#### Playground

Fork the [reference template](https://codepen.io/stasson/pen/XzmMKp)
or one of the [vue-mdc-adapter collection](https://codepen.io/collection/XBpwxq/) 

#### CDN

```html
<head>
  <!-- import reset material icons, fonts and vue-mdc-adapter stylesheets -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" type="text/css">

  <!-- import vue and then vue-mdc-adapter -->
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vue-mdc-adapter"></script>
</head>
<body>
  <!-- vue mdc markup -->
<body>
```

#### Vue CLI

```console
npm install -g vue-cli
vue init stasson/vue-mdc-adapter-simple my-project
```

## Getting Serious

> Vue.js version `^2.5.3` is required as a peer dependency.  
> Material Components are bundled and do need to be installed.  
> Material Icons and Fonts are not bundled and need to be fetched.

### UMD Distribution

The  ES5 distribution is available at
[unpkg.com/vue-mdc-adapter/dist](https://unpkg.com/vue-mdc-adapter/dist/) or via npm.

```console
npm install --save vue-mdc-adapter
```

The distribution comes in two flavors:

#### standalone plugin

| distribution | env   | description |
| ------------ | ----- | ----------- |
| dist/index.js | development | plugin (injected styles) |
| dist/index.min.js | production | minified plugin (ES5)  |
| dist/index.min.css | production | minified stylecheet (CSS)|

#### _a la carte_  plugins

| distribution | env   | description |
| ------------ | ----- | ----------- |
| dist/[plugin].js | development | plugin (styles are injected) |
| dist/[plugin].min.js | production | minified plugin (ES5)  |
| dist/[plugin].min.css | production | minified stylesheet (CCS) |

### Source Distribution

> Advanced users may want to leverage the ES6 / SASS source distribution.
material components modules are required so you need to make sure your
webpack/rollup config resolves node_modules for transpiling and sass imports
(see _Building from ES6 Sources_ below.)

#### standalone plugin

| distribution | description |
| ------------ | ----------- |
| components/index.js |  ES6 module |
| components/styles.sass |  SASS module |
| components/entry.js |  Bundler entry |

#### _a la carte_  plugins

| distribution | description |
| ------------ | ----------- |
| components/[plugin]/index.js | ES6 module |
| components/[plugin]/styles.sass | SASS module |
| components/[plugin]/entry.js | Bundler entry |

## Webpack Config

> The following guide assumes you are familiar with [Webpack](https://webpack.js.org/).

### Using the UMD Distribution

#### Add dependencies to html template

```html
<!-- index.html template -->
<head>
  <!-- import reset material icons, fonts and vue-mdc-adapter stylesheets -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500">
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
```
#### configure [resolve.alias](https://webpack.js.org/configuration/resolve/) to point to the UMD distribution.

```javascript
  // webpack.config.js
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.runtime.esm.js',
      'vue-mdc-adapter': 'vue-mdc-adapter/dist/index.js',
    }
  }
```

#### You can now import the _standalone_ plugin

```javascript
import Vue from 'vue'
import VueMDCAdapter from 'vue-mdc-adapter'
Vue.use(VueMdcAdapter)
```

####  or cherry pick _a la carte_ plugins:

```javascript
import Vue from 'vue'
import VueMDCButton from 'vue-mdc-adapter/dist/vue-mdc-button.js'
Vue.use(VueMDCButton)
```

> Bundling vue-mdc-adapter and vue libraries may not be optimal. Alternatively you can setup vue-mdc-adapter as an [external libray](https://webpack.js.org/configuration/externals/#externals).

```html
<!-- index.html template -->
<head>
      <!-- import reset material icons, fonts and vue-mdc-adapter stylesheets -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500">
    <link rel="stylesheet" href="https://unpkg.com/vue-mdc-adapter/dist/index.min.css">
    <!-- import vue and then vue-mdc-adapter -->
    <script src="https://unpkg.com/vue/dist/vue.runtime.min.js"></script>
    <script src="https://unpkg.com/vue-mdc-adapter/dist/index.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
```

```javascript
  // webpack.config.js
externals: {
  'vue': 'Vue',
  'vue-mdc-adapter': 'VueMDCAdapter',
}
```

### Building from ES6 Sources

#### resolve vue-mdc-adapter sources

```javascript
  // webpack.config.js
  resolve: {
    alias: {
      'vue-mdc-adapter$': 'vue-mdc-adapter/components',
    }
  }
```

#### Make sure @material imports are transpiled

```javascript
// babel loader config
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      path.resolve(__dirname, 'node_modules/@material')
    ]
  }
```

#### Make sure sass modules can be imported

```javascript
// sass loader config
  {
    loader: 'sass-loader',
    options: {
      sourceMap: false,
      includePaths: [path.resolve(__dirname,'./node_modules')],
    },
  },
```

#### create your own theme file

> Material Components styles come as highly themable SASS framework. To be able to theme
and avoid any duplicates/ordering style issue in the bundle, we recommend to manage styles globaly:

```scss
/* theme.scss */
$mdc-theme-primary: #212121;
$mdc-theme-accent: #41B883;
$mdc-theme-background: #fff;

@import "vue-mdc-adapter/components/styles.scss";
```

#### You can now import the _standalone_ plugin

```javascript
// main.js
import `./theme.scss`
import Vue from 'vue'
import VueMDCAdapter from 'vue-mdc-adapter'
Vue.use(VueMdcAdapter)
```

####  or cherry pick _a la carte_ plugins:

```scss
/* theme.scss */
$mdc-theme-primary: #212121;
$mdc-theme-accent: #41B883;
$mdc-theme-background: #fff;

@import "vue-mdc-adapter/components/button/styles.scss";
@import "vue-mdc-adapter/components/fab/styles.scss";
```

```javascript
// main.js
import `./theme.scss`
import Vue from 'vue'
import VueMDCButton from 'vue-mdc-adapter/button'
import VueMDCFAB from 'vue-mdc-adapter/fab'
Vue.use(VueMDCButton)
Vue.use(VueMDCFAB)
```

> If you do not want to manage styles globally and want to import them in your `.vue` single file components,
> we recommend that you import the css from the distribution and not use the sass source tree.  
> Refer to [Material Components Theming Guide](https://material.io/components/web/docs/theming/)
> to learn how to create your own CSS theme or leverage CSS variables 

### _A la carte_ component imports

In case you want to import the mdc component directly (avoiding plugin registration):

```html
<template>
    <div class="my-own-component">
        <mdcButton  @click="onClick" />
    </div>
</template>

<script>
    import { mdcButton } from 'vue-mdc-adapter/button'

    export default {
        components: { mdcButton }
    }
</script>
```

or to import all components (kebab-case) from a plugin at once:

```html
<template>
    <div class="my-own-component">
        <mdc-display >Display</mdc-display>
        <mdc-headline>Headline</mdc-headline>
        <mdc-title>Title <mdc-caption>Caption</mdc-caption></mdc-title>
        <mdc-subheading >Subheading</mdc-subheading>
        <mdc-body >Body</mdc-body>
    </div>
</template>

<script>
    import VueMDCTypography from 'vue-mdc-adapter/typography'

    export default {
        components: VueMDCTypography.components
    }
</script>
```
