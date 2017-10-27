<a name="0.0.48"></a>
## [0.0.48](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.47...v0.0.48) (2017-10-27)


### Bug Fixes

* **demo:** fix router home links ([58ce57d](https://github.com/stasson/vue-mdc-adapter/commit/58ce57d))
* **drawer:** drawer has no --selected item style ([16cd196](https://github.com/stasson/vue-mdc-adapter/commit/16cd196))
* **drawer:** fix drawer behavior ([f446a11](https://github.com/stasson/vue-mdc-adapter/commit/f446a11)), closes [#92](https://github.com/stasson/vue-mdc-adapter/issues/92)
* **drawer:** fix responsive behavior of the drawer [#76](https://github.com/stasson/vue-mdc-adapter/issues/76) ([aff0a97](https://github.com/stasson/vue-mdc-adapter/commit/aff0a97))



<a name="0.0.47"></a>
## [0.0.47](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.46...v0.0.47) (2017-10-23)



<a name="0.0.46"></a>
## [0.0.46](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.45...v0.0.46) (2017-10-23)



<a name="0.0.45"></a>
## [0.0.45](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.44...v0.0.45) (2017-10-23)


### Bug Fixes

* **components:** fix missing 'name' option in the Vue components ([b31e66d](https://github.com/stasson/vue-mdc-adapter/commit/b31e66d))
* **layout-app:** allow main content to shrink ([ba21537](https://github.com/stasson/vue-mdc-adapter/commit/ba21537))
* **textfield:** label overlaps with content ([#86](https://github.com/stasson/vue-mdc-adapter/issues/86)) ([4964b91](https://github.com/stasson/vue-mdc-adapter/commit/4964b91))
* **util:** fix ripple for ssr ([809e3dd](https://github.com/stasson/vue-mdc-adapter/commit/809e3dd))


### Features

* **demo:** add readme and demos ([9334fa8](https://github.com/stasson/vue-mdc-adapter/commit/9334fa8))
* **demo:** publish new site ([45493a9](https://github.com/stasson/vue-mdc-adapter/commit/45493a9))
* **mdc-layout-app:** add new mdc-layout-app component ([e9fd92d](https://github.com/stasson/vue-mdc-adapter/commit/e9fd92d))



<a name="0.0.44"></a>
## [0.0.44](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.43...v0.0.44) (2017-10-06)


### Bug Fixes

* **button:** button click event is not being dispatched ([8d90920](https://github.com/stasson/vue-mdc-adapter/commit/8d90920))



<a name="0.0.43"></a>
## [0.0.43](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.42...v0.0.43) (2017-10-06)


### Features

* **textfield:** align textfield on mdc 0.22 ([05a93bc](https://github.com/stasson/vue-mdc-adapter/commit/05a93bc))



<a name="0.0.42"></a>
## [0.0.42](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.41...v0.0.42) (2017-10-04)


### Bug Fixes

* **ssr:** avoid fetching matches property on server ([#77](https://github.com/stasson/vue-mdc-adapter/issues/77)) ([e114841](https://github.com/stasson/vue-mdc-adapter/commit/e114841))


### Features

* **button:** add support for button links ([#79](https://github.com/stasson/vue-mdc-adapter/issues/79)) ([5b9f678](https://github.com/stasson/vue-mdc-adapter/commit/5b9f678))
* **util:** add custom element component ([65899c6](https://github.com/stasson/vue-mdc-adapter/commit/65899c6))



<a name="0.0.41"></a>
## [0.0.41](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.40...v0.0.41) (2017-09-30)


### Bug Fixes

* **button:** buttons accessibility isssue ([0a2613b](https://github.com/stasson/vue-mdc-adapter/commit/0a2613b)), closes [#72](https://github.com/stasson/vue-mdc-adapter/issues/72)
* **card:** action button should render a <button> tag ([30e7f25](https://github.com/stasson/vue-mdc-adapter/commit/30e7f25))
* **fab:** fix fab accessibility issue ([4322914](https://github.com/stasson/vue-mdc-adapter/commit/4322914))
* **infra:** fix release script ([f89c7a8](https://github.com/stasson/vue-mdc-adapter/commit/f89c7a8))


### Features

* **button:** add style for mdc-icon ([95fcbff](https://github.com/stasson/vue-mdc-adapter/commit/95fcbff))
* **icon:** add mdc-icon component ([f747ac1](https://github.com/stasson/vue-mdc-adapter/commit/f747ac1))
* **toolbar:** add support for custom icons ([d975a18](https://github.com/stasson/vue-mdc-adapter/commit/d975a18))


### BREAKING CHANGES

* **toolbar:** - mdc-toolbar-menu replaces mdc-toolbar-icon-menu
- use icon prop instead of slot to set the icon
* **fab:** use icon prop instead vs slot to set material icon content
* **button:** href abd icon props removed



<a name="0.0.40"></a>
## [0.0.40](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.39...v0.0.40) (2017-09-29)


### Features

* **changelog:** moving to angular git commit convention ([e07d5ab](https://github.com/stasson/vue-mdc-adapter/commit/e07d5ab)), closes [#71](https://github.com/stasson/vue-mdc-adapter/issues/71)



<a name="0.0.39"></a>
## [0.0.39](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.38...v0.0.39) (2017-09-19)

### BREAKING CHANGES

* **button:** remove button primary and accent prop as per MDC 0.21.0


<a name="0.0.38"></a>
## [0.0.38](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.37...v0.0.38) (2017-09-10)


### BREAKING CHANGES

* **fab:** fab can not be disabled mdc@^0.20.0



