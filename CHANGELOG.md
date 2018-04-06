# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.14.0"></a>

# [0.14.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.13.4...v0.14.0) (2018-04-06)

### Bug Fixes

* Remove event listeners on component destroy ([34a31d4](https://github.com/stasson/vue-mdc-adapter/commit/34a31d4))
* Update for material-components-web breaking changes ([6a7616e](https://github.com/stasson/vue-mdc-adapter/commit/6a7616e))
* **mdc-dialog:** use vue-mdc-adapter unique id ([0ceec66](https://github.com/stasson/vue-mdc-adapter/commit/0ceec66))
* **mdc-snackbar:** typo in removing event source listener ([3222267](https://github.com/stasson/vue-mdc-adapter/commit/3222267))
* **mdc-tab-bar:** Guard against deactivating a tab that no longer exists ([bfce806](https://github.com/stasson/vue-mdc-adapter/commit/bfce806))
* **mdc-textfield:** Add unique id to textfield element input ([71fda09](https://github.com/stasson/vue-mdc-adapter/commit/71fda09))
* **mdc-textfield:** Support number as permitted type attribute value. ([2089135](https://github.com/stasson/vue-mdc-adapter/commit/2089135))
* **mdc-top-app-bar:** Missing listeners on element root. ([c2da57c](https://github.com/stasson/vue-mdc-adapter/commit/c2da57c))

### Features

* dispatchevent ([dfb923a](https://github.com/stasson/vue-mdc-adapter/commit/dfb923a))
* isolate internal eventbus ([5adfe34](https://github.com/stasson/vue-mdc-adapter/commit/5adfe34))
* **mdc-checkbox:** Support array as v-model. ([1c8ca1a](https://github.com/stasson/vue-mdc-adapter/commit/1c8ca1a))
* **mdc-chip:** Allow underlying events to be emitted as first class Vue events. ([18a6d27](https://github.com/stasson/vue-mdc-adapter/commit/18a6d27))
* **mdc-layout-grid:** add support for overall grid layout alignment ([2a21775](https://github.com/stasson/vue-mdc-adapter/commit/2a21775))
* **mdc-select:** Implement native select ([755ffac](https://github.com/stasson/vue-mdc-adapter/commit/755ffac))
* **mdc-top-app-bar:** Support dense mode ([bf72305](https://github.com/stasson/vue-mdc-adapter/commit/bf72305))

<a name="0.13.5"></a>

## [0.13.5](https://github.com/stasson/vue-mdc-adapter/compare/v0.13.4...v0.13.5) (2018-03-26)

### Bug Fixes

<a name="0.13.4"></a>

## [0.13.4](https://github.com/stasson/vue-mdc-adapter/compare/v0.13.3...v0.13.4) (2018-03-26)

### Bug Fixes

<a name="0.13.3"></a>

## [0.13.3](https://github.com/stasson/vue-mdc-adapter/compare/v0.13.2...v0.13.3) (2018-03-26)

### Bug Fixes

* **mdc-tab:** show icons in tabs ([739bfb3](https://github.com/stasson/vue-mdc-adapter/commit/739bfb3))
* **mdc-textfield:** Bind scope attributes to input elements. ([d188482](https://github.com/stasson/vue-mdc-adapter/commit/d188482))

<a name="0.13.2"></a>

## [0.13.2](https://github.com/stasson/vue-mdc-adapter/compare/v0.13.1...v0.13.2) (2018-03-23)

### Bug Fixes

<a name="0.13.1"></a>

## [0.13.1](https://github.com/stasson/vue-mdc-adapter/compare/v0.13.0...v0.13.1) (2018-03-23)

### Bug Fixes

* **mdc-menu:** Remove unused import and unavailable export ([38b4248](https://github.com/stasson/vue-mdc-adapter/commit/38b4248)), closes [#326](https://github.com/stasson/vue-mdc-adapter/issues/326)

<a name="0.13.0"></a>

# [0.13.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.12.1...v0.13.0) (2018-03-22)

### Bug Fixes

* Update for material-components-web@0.33.0 ([9d04004](https://github.com/stasson/vue-mdc-adapter/commit/9d04004))
* **mdc-button:** Remove compact variant as removed from material-components-web@0.33.0 ([a267f34](https://github.com/stasson/vue-mdc-adapter/commit/a267f34))
* **mdc-dialog:** add missing classes to footer buttons. Resolves [#309](https://github.com/stasson/vue-mdc-adapter/issues/309) ([b17c83a](https://github.com/stasson/vue-mdc-adapter/commit/b17c83a))
* **mdc-select:** Add menu prop ([c2daafc](https://github.com/stasson/vue-mdc-adapter/commit/c2daafc))
* **mdc-select:** Correct a typo in foundationLabel in the beforeDestroy method ([ed3d391](https://github.com/stasson/vue-mdc-adapter/commit/ed3d391))
* **mdc-slider:** Set min and max taking into account current max value. ([2d61239](https://github.com/stasson/vue-mdc-adapter/commit/2d61239))
* **mdc-top-app-bar:** Use variant specific foundation according to material-web-components@0.33.0 ([a51ada8](https://github.com/stasson/vue-mdc-adapter/commit/a51ada8))
* **package:** update material-components-web to version 0.33.0 ([00c7e21](https://github.com/stasson/vue-mdc-adapter/commit/00c7e21))

### Features

* **mdc-chips:** Implement checkmark for filter chips ([40e6caa](https://github.com/stasson/vue-mdc-adapter/commit/40e6caa))
* **mdc-menu:** Add new anchor postioning functionality. ([00eb3c3](https://github.com/stasson/vue-mdc-adapter/commit/00eb3c3))
* **mdc-menu:** Add support for quick-open. ([eace817](https://github.com/stasson/vue-mdc-adapter/commit/eace817))

<a name="0.12.1"></a>

## [0.12.1](https://github.com/stasson/vue-mdc-adapter/compare/v0.12.0...v0.12.1) (2018-03-12)

<a name="0.12.0"></a>

# [0.12.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.11.2...v0.12.0) (2018-03-11)

### Bug Fixes

* **grid-list:** Default width attribute ([a71ab3a](https://github.com/stasson/vue-mdc-adapter/commit/a71ab3a))
* **grid-list:** Resolve Lint error in SCSS ([177ca62](https://github.com/stasson/vue-mdc-adapter/commit/177ca62))
* **grid-tile:** Remove console.log ([b540ecc](https://github.com/stasson/vue-mdc-adapter/commit/b540ecc))
* Update other components to pass tests with mdc 0.32.0 ([615c2f3](https://github.com/stasson/vue-mdc-adapter/commit/615c2f3))

### Features

* **chips:** Implement filter and choice chip-set variants. ([f09aa67](https://github.com/stasson/vue-mdc-adapter/commit/f09aa67))
* **grid-list:** Add interactive support ([24063e4](https://github.com/stasson/vue-mdc-adapter/commit/24063e4))
* **grid-list:** Update README ([bfdcc1b](https://github.com/stasson/vue-mdc-adapter/commit/bfdcc1b))
* **textfield:** Update mdc-textfield for floating-label in mdc v0.32.0 ([24ee306](https://github.com/stasson/vue-mdc-adapter/commit/24ee306))
* **textfield:** use mdc-floating-label as per MDCWeb 0.32.0 ([8c2dbeb](https://github.com/stasson/vue-mdc-adapter/commit/8c2dbeb))
* **top-app-bar:** Implement mdc-top-app-bar ([c6a46dd](https://github.com/stasson/vue-mdc-adapter/commit/c6a46dd))

<a name="0.11.2"></a>

## [0.11.2](https://github.com/stasson/vue-mdc-adapter/compare/v0.11.1...v0.11.2) (2018-02-25)

### Reverts

* **select:** allow Number and Object value types ([f6974f6](https://github.com/stasson/vue-mdc-adapter/commit/f6974f6))

<a name="0.11.1"></a>

## [0.11.1](https://github.com/stasson/vue-mdc-adapter/compare/v0.11.0...v0.11.1) (2018-02-25)

### Features

* **card:** add support for primary action as per MDCWeb 0.31.0 ([8c4caec](https://github.com/stasson/vue-mdc-adapter/commit/8c4caec)), closes [#276](https://github.com/stasson/vue-mdc-adapter/issues/276)
* **dialog:** add accent and accept-disabled property ([42c0c01](https://github.com/stasson/vue-mdc-adapter/commit/42c0c01))
* **dialog:** add support for custom accept validation logic ([7b01357](https://github.com/stasson/vue-mdc-adapter/commit/7b01357)), closes [#278](https://github.com/stasson/vue-mdc-adapter/issues/278)
* **select:** allow Number and Object value types ([6a031dd](https://github.com/stasson/vue-mdc-adapter/commit/6a031dd)), closes [#275](https://github.com/stasson/vue-mdc-adapter/issues/275)
* **textfield:** keep non input attributes on the outer element ([c8795d9](https://github.com/stasson/vue-mdc-adapter/commit/c8795d9)), closes [#280](https://github.com/stasson/vue-mdc-adapter/issues/280)

<a name="0.11.0"></a>

# [0.11.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.10.0...v0.11.0) (2018-02-24)

### Bug Fixes

* remove mdc-chip icon element from mdc-chip\_\_text element ([44d9849](https://github.com/stasson/vue-mdc-adapter/commit/44d9849))
* Support leading and trailing icons simultaneously (needs material-components-web@0.31.0). ([ddafc68](https://github.com/stasson/vue-mdc-adapter/commit/ddafc68))
* Support leading and trailing icons simultaneously (needs material-components-web@0.31.0). ([8f4a414](https://github.com/stasson/vue-mdc-adapter/commit/8f4a414))
* **drawer:** item classes are not applied ([5ec5ec6](https://github.com/stasson/vue-mdc-adapter/commit/5ec5ec6)), closes [#247](https://github.com/stasson/vue-mdc-adapter/issues/247)
* **package:** update material-components-web to version 0.31.0 ([b43017a](https://github.com/stasson/vue-mdc-adapter/commit/b43017a))
* **select:** refactor label foundation as per MDCWeb 0.31.0 ([0db8ad6](https://github.com/stasson/vue-mdc-adapter/commit/0db8ad6)), closes [#274](https://github.com/stasson/vue-mdc-adapter/issues/274)
* **slider:** slider thumbContainer is offset when drawer open/close ([a1516ec](https://github.com/stasson/vue-mdc-adapter/commit/a1516ec)), closes [#268](https://github.com/stasson/vue-mdc-adapter/issues/268)
* **textfield:** validation should happen on first unfocus ([b327b6a](https://github.com/stasson/vue-mdc-adapter/commit/b327b6a)), closes [#272](https://github.com/stasson/vue-mdc-adapter/issues/272)

### Features

* **chips:** Add 'mdc-chip-set' and 'mdc-chip' ([adbfa3d](https://github.com/stasson/vue-mdc-adapter/commit/adbfa3d))
* **chips:** add mdc-chip-set and mdc-chip [#267](https://github.com/stasson/vue-mdc-adapter/issues/267) ([d63ab16](https://github.com/stasson/vue-mdc-adapter/commit/d63ab16))
* **drawer:** expose open/close events ([4a2bd78](https://github.com/stasson/vue-mdc-adapter/commit/4a2bd78)), closes [#268](https://github.com/stasson/vue-mdc-adapter/issues/268) [#271](https://github.com/stasson/vue-mdc-adapter/issues/271)

<a name="0.10.0"></a>

# [0.10.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.9.2...v0.10.0) (2018-02-17)

### Bug Fixes

* **icon:** icon component typo ([9ecfafc](https://github.com/stasson/vue-mdc-adapter/commit/9ecfafc))
* **list:** make props reactive ([989b09a](https://github.com/stasson/vue-mdc-adapter/commit/989b09a)), closes [#231](https://github.com/stasson/vue-mdc-adapter/issues/231)
* **package:** update material-components-web to version 0.30.0 ([3402eab](https://github.com/stasson/vue-mdc-adapter/commit/3402eab))
* **radio:** fix unit tests err log ([639e28c](https://github.com/stasson/vue-mdc-adapter/commit/639e28c))
* **radio:** name prop is required ([b6bdac7](https://github.com/stasson/vue-mdc-adapter/commit/b6bdac7)), closes [#251](https://github.com/stasson/vue-mdc-adapter/issues/251)
* **select:** make disabled prop reactive ([f22883d](https://github.com/stasson/vue-mdc-adapter/commit/f22883d)), closes [#231](https://github.com/stasson/vue-mdc-adapter/issues/231)
* **switch:** make alignEnd prop reactive ([c5cde20](https://github.com/stasson/vue-mdc-adapter/commit/c5cde20)), closes [#231](https://github.com/stasson/vue-mdc-adapter/issues/231)
* **tabs:** property link is missing on custom-link ([e3fbf80](https://github.com/stasson/vue-mdc-adapter/commit/e3fbf80))
* **textfield:** disallow outline or box style for fullwidth textfield ([2d2502d](https://github.com/stasson/vue-mdc-adapter/commit/2d2502d)), closes [#243](https://github.com/stasson/vue-mdc-adapter/issues/243)

### Features

* **card:** card components updated as per MDCWeb 0.30.0 ([d4215d4](https://github.com/stasson/vue-mdc-adapter/commit/d4215d4)), closes [#258](https://github.com/stasson/vue-mdc-adapter/issues/258)
* **checkbox:** refactor checkmark as per MDCWeb 0.30.0 ([4a455b4](https://github.com/stasson/vue-mdc-adapter/commit/4a455b4))
* **drawer:** add support for drawer-item activated style ([94c6c59](https://github.com/stasson/vue-mdc-adapter/commit/94c6c59)), closes [#247](https://github.com/stasson/vue-mdc-adapter/issues/247)
* **list:** support item [@click](https://github.com/click) when list is interactive ([5f0527d](https://github.com/stasson/vue-mdc-adapter/commit/5f0527d)), closes [#246](https://github.com/stasson/vue-mdc-adapter/issues/246)
* **menu:** support item select attributes as per MDCWeb 0.30.0 ([2eb6322](https://github.com/stasson/vue-mdc-adapter/commit/2eb6322))
* **ripple:** new ripple style and behavior as per MDCWeb 0.30.0 ([5f81089](https://github.com/stasson/vue-mdc-adapter/commit/5f81089))
* **select:** add non box version as per MDCWeb 0.30.0 ([990b091](https://github.com/stasson/vue-mdc-adapter/commit/990b091)), closes [#260](https://github.com/stasson/vue-mdc-adapter/issues/260)
* **textfield:** add readonly support ([63c7834](https://github.com/stasson/vue-mdc-adapter/commit/63c7834)), closes [#252](https://github.com/stasson/vue-mdc-adapter/issues/252) [#250](https://github.com/stasson/vue-mdc-adapter/issues/250)
* **textfield:** new ripl line as per MDCWeb 0.30.0 ([9f7c555](https://github.com/stasson/vue-mdc-adapter/commit/9f7c555))
* **textfield:** pass event-listeners and attributes to input element ([8cc88e2](https://github.com/stasson/vue-mdc-adapter/commit/8cc88e2)), closes [#242](https://github.com/stasson/vue-mdc-adapter/issues/242)

### BREAKING CHANGES

* **card:** mdc-card-horizontal and mdc-card-img have been removed, check doc for new action
  block api

<a name="0.9.2"></a>

## [0.9.2](https://github.com/stasson/vue-mdc-adapter/compare/v0.9.1...v0.9.2) (2018-02-02)

### Bug Fixes

* **dialog:** workarround fixed element position issue whith transform ([c658ff9](https://github.com/stasson/vue-mdc-adapter/commit/c658ff9)), closes [#238](https://github.com/stasson/vue-mdc-adapter/issues/238)
* **select:** select model should be reactive ([2dea85c](https://github.com/stasson/vue-mdc-adapter/commit/2dea85c)), closes [#239](https://github.com/stasson/vue-mdc-adapter/issues/239)

### Features

* **textfield:** add focus/blur method ([975033b](https://github.com/stasson/vue-mdc-adapter/commit/975033b))

<a name="0.9.1"></a>

## [0.9.1](https://github.com/stasson/vue-mdc-adapter/compare/v0.9.0...v0.9.1) (2018-01-31)

### Bug Fixes

* **list:** make props reactive ([bb6aeea](https://github.com/stasson/vue-mdc-adapter/commit/bb6aeea)), closes [#231](https://github.com/stasson/vue-mdc-adapter/issues/231)
* **select:** make disabled prop reactive ([6da65cc](https://github.com/stasson/vue-mdc-adapter/commit/6da65cc)), closes [#231](https://github.com/stasson/vue-mdc-adapter/issues/231)
* **switch:** make alignEnd prop reactive ([61380ef](https://github.com/stasson/vue-mdc-adapter/commit/61380ef)), closes [#231](https://github.com/stasson/vue-mdc-adapter/issues/231)

### Features

* **list:** add mdc-list-item selected and activated property ([cccda1d](https://github.com/stasson/vue-mdc-adapter/commit/cccda1d)), closes [#235](https://github.com/stasson/vue-mdc-adapter/issues/235)

<a name="0.9.0"></a>

# [0.9.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.8.3...v0.9.0) (2018-01-27)

### Bug Fixes

* **package:** update material-components-web to version 0.29.0 ([f13d0b5](https://github.com/stasson/vue-mdc-adapter/commit/f13d0b5))
* **select:** fix stylelint issues ([a03c907](https://github.com/stasson/vue-mdc-adapter/commit/a03c907))
* **select:** multi select styles removed from mdc 0.29.0 ([44b8711](https://github.com/stasson/vue-mdc-adapter/commit/44b8711))
* **texfield:** update textfield adapters as per mdc 0.29.0 ([d565a31](https://github.com/stasson/vue-mdc-adapter/commit/d565a31))
* **textfield:** make helptext-persistent and helptext-validation props persitent ([85811a9](https://github.com/stasson/vue-mdc-adapter/commit/85811a9)), closes [#231](https://github.com/stasson/vue-mdc-adapter/issues/231)

### Features

* **list:** add support for interactive prop, default to non-interactive ([d3b9edb](https://github.com/stasson/vue-mdc-adapter/commit/d3b9edb)), closes [#224](https://github.com/stasson/vue-mdc-adapter/issues/224)

<a name="0.8.3"></a>

## [0.8.3](https://github.com/stasson/vue-mdc-adapter/compare/v0.8.2...v0.8.3) (2018-01-21)

### Bug Fixes

* **select:** set menu styles synchronuously ([9a9a1b6](https://github.com/stasson/vue-mdc-adapter/commit/9a9a1b6))

### Features

* **drawer:** add openOn and closeOn property ([ec1ef88](https://github.com/stasson/vue-mdc-adapter/commit/ec1ef88))

<a name="0.8.2"></a>

## [0.8.2](https://github.com/stasson/vue-mdc-adapter/compare/v0.8.1...v0.8.2) (2018-01-19)

### Bug Fixes

* Component properties ([f3fcff4](https://github.com/stasson/vue-mdc-adapter/commit/f3fcff4))
* **textfield:** textarea model value ignored ([737e391](https://github.com/stasson/vue-mdc-adapter/commit/737e391)), closes [#215](https://github.com/stasson/vue-mdc-adapter/issues/215)

### Features

* add name property to texfield, checkbox, select, switch ([0de50f9](https://github.com/stasson/vue-mdc-adapter/commit/0de50f9)), closes [#212](https://github.com/stasson/vue-mdc-adapter/issues/212)

<a name="0.8.1"></a>

## [0.8.1](https://github.com/stasson/vue-mdc-adapter/compare/v0.8.0...v0.8.1) (2018-01-16)

### Bug Fixes

* **textfield:** add missing type attribute ([fb796aa](https://github.com/stasson/vue-mdc-adapter/commit/fb796aa)), closes [#210](https://github.com/stasson/vue-mdc-adapter/issues/210)

<a name="0.8.0"></a>

# [0.8.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.7.6...v0.8.0) (2018-01-13)

### Bug Fixes

* **base:** custom link and button should dispatch click event when rendering router-link ([bfd3e5a](https://github.com/stasson/vue-mdc-adapter/commit/bfd3e5a)), closes [#206](https://github.com/stasson/vue-mdc-adapter/issues/206)
* **drawer-item:** emit click event regardless of router link presence ([217413f](https://github.com/stasson/vue-mdc-adapter/commit/217413f)), closes [#206](https://github.com/stasson/vue-mdc-adapter/issues/206)
* **package:** update material-components-web to version 0.28.0 ([73eae0e](https://github.com/stasson/vue-mdc-adapter/commit/73eae0e))

### Features

* **drawer:** refactor classes as per mdc 0.28.0 ([6a9dc05](https://github.com/stasson/vue-mdc-adapter/commit/6a9dc05))
* **icon-toggle:** remove primary property as per mdc 0.28.0 ([69c983a](https://github.com/stasson/vue-mdc-adapter/commit/69c983a))
* **list:** add new padded prop to list-deivider as per mdc 0.28.0 ([21f3a2f](https://github.com/stasson/vue-mdc-adapter/commit/21f3a2f))
* **menu:** refactor adapter as per mdc 0.28.0 ([6d0e0c1](https://github.com/stasson/vue-mdc-adapter/commit/6d0e0c1))
* **ripple:** refactor adapter as per mdc 0.28.0 ([10afb2e](https://github.com/stasson/vue-mdc-adapter/commit/10afb2e))
* **select:** refactor markup and adapter as per mdc 0.28.0 ([a7e29d5](https://github.com/stasson/vue-mdc-adapter/commit/a7e29d5))
* **snackbar:** add show and hide event as per mdc 0.28.0 ([eb372d2](https://github.com/stasson/vue-mdc-adapter/commit/eb372d2))
* **tabs:** add support for vue-router and custom icons ([38d2d51](https://github.com/stasson/vue-mdc-adapter/commit/38d2d51)), closes [#195](https://github.com/stasson/vue-mdc-adapter/issues/195)
* **text-field:** add text-field--box support ([40a03ce](https://github.com/stasson/vue-mdc-adapter/commit/40a03ce))
* **textfield:** add support for leading and trailing icons ([f95274e](https://github.com/stasson/vue-mdc-adapter/commit/f95274e)), closes [#174](https://github.com/stasson/vue-mdc-adapter/issues/174)
* **textfield:** refactor foundation and markup as per mdc 0.28.0 ([70dfab9](https://github.com/stasson/vue-mdc-adapter/commit/70dfab9))

<a name="0.7.6"></a>

## [0.7.6](https://github.com/stasson/vue-mdc-adapter/compare/v0.7.5...v0.7.6) (2018-01-07)

### Features

* **button:** add button accent property ([fd3e124](https://github.com/stasson/vue-mdc-adapter/commit/fd3e124)), closes [#147](https://github.com/stasson/vue-mdc-adapter/issues/147)
* **button:** add support for vue-router ([43a9d3f](https://github.com/stasson/vue-mdc-adapter/commit/43a9d3f))
* **card:** add accent property to mdc-card action ([01a0f7e](https://github.com/stasson/vue-mdc-adapter/commit/01a0f7e))
* **card:** add vue-router support for action button ([52ddaf2](https://github.com/stasson/vue-mdc-adapter/commit/52ddaf2))
* **fab:** add support for vue-router ([383dffa](https://github.com/stasson/vue-mdc-adapter/commit/383dffa))

<a name="0.7.5"></a>

## [0.7.5](https://github.com/stasson/vue-mdc-adapter/compare/v0.7.4...v0.7.5) (2018-01-07)

### Bug Fixes

* **webpack:** common chunks plugin typo ([014df1f](https://github.com/stasson/vue-mdc-adapter/commit/014df1f))

### Features

* **checkbox:** allow custom label markup ([3bf6547](https://github.com/stasson/vue-mdc-adapter/commit/3bf6547)), closes [#185](https://github.com/stasson/vue-mdc-adapter/issues/185)
* **switch:** allow custom label markup with default slot ([e89a618](https://github.com/stasson/vue-mdc-adapter/commit/e89a618))

<a name="0.7.4"></a>

## [0.7.4](https://github.com/stasson/vue-mdc-adapter/compare/v0.7.3...v0.7.4) (2018-01-05)

### Bug Fixes

* **drawer:** make responsive behaviour consistent ([9b1395a](https://github.com/stasson/vue-mdc-adapter/commit/9b1395a)), closes [#76](https://github.com/stasson/vue-mdc-adapter/issues/76)
* **drawer:** toolbar spacer should be inside the mdc-drawer\_\_drawer element [#187](https://github.com/stasson/vue-mdc-adapter/issues/187) ([e45a8f0](https://github.com/stasson/vue-mdc-adapter/commit/e45a8f0))
* **select:** select with pre-selected option doesn't float label [#188](https://github.com/stasson/vue-mdc-adapter/issues/188) ([f296d42](https://github.com/stasson/vue-mdc-adapter/commit/f296d42))

### Features

* add focus/blur events to inputs ([4c99d44](https://github.com/stasson/vue-mdc-adapter/commit/4c99d44)), closes [#181](https://github.com/stasson/vue-mdc-adapter/issues/181)
* distribution should have a version [#129](https://github.com/stasson/vue-mdc-adapter/issues/129) ([a9bf69d](https://github.com/stasson/vue-mdc-adapter/commit/a9bf69d))

<a name="0.7.3"></a>

## [0.7.3](https://github.com/stasson/vue-mdc-adapter/compare/v0.7.2...v0.7.3) (2017-12-29)

### Bug Fixes

* **layout-app:** use display:block for ie11 ([de40002](https://github.com/stasson/vue-mdc-adapter/commit/de40002))

<a name="0.7.2"></a>

## [0.7.2](https://github.com/stasson/vue-mdc-adapter/compare/v0.7.1...v0.7.2) (2017-12-29)

### Bug Fixes

* **layout-app:** flex min-height workarround vor ie11 ([4aea0ce](https://github.com/stasson/vue-mdc-adapter/commit/4aea0ce)), closes [#176](https://github.com/stasson/vue-mdc-adapter/issues/176)
* **textfield:** mdc-textfield should be inline-flex ([8d2d256](https://github.com/stasson/vue-mdc-adapter/commit/8d2d256)), closes [#166](https://github.com/stasson/vue-mdc-adapter/issues/166)

<a name="0.7.1"></a>

## [0.7.1](https://github.com/stasson/vue-mdc-adapter/compare/v0.7.0...v0.7.1) (2017-12-29)

### Bug Fixes

* **demo:** add missing meta tags ([5c5f2b4](https://github.com/stasson/vue-mdc-adapter/commit/5c5f2b4))
* **demo:** fix logo size for ie11 ([ffb154d](https://github.com/stasson/vue-mdc-adapter/commit/ffb154d))

### Features

* **demo:** add compatibility meta tag ([a555a9d](https://github.com/stasson/vue-mdc-adapter/commit/a555a9d))
* **demo:** add ie11 support ([def1985](https://github.com/stasson/vue-mdc-adapter/commit/def1985))
* **drawer:** add drawer-type prop for easy drawer type switching ([ae97d16](https://github.com/stasson/vue-mdc-adapter/commit/ae97d16)), closes [#132](https://github.com/stasson/vue-mdc-adapter/issues/132)
* remove need for polyfill on ie11 ([e39f6b9](https://github.com/stasson/vue-mdc-adapter/commit/e39f6b9)), closes [#168](https://github.com/stasson/vue-mdc-adapter/issues/168)
* **textfield:** emit blur event from input or textarea element ([697b782](https://github.com/stasson/vue-mdc-adapter/commit/697b782)), closes [#172](https://github.com/stasson/vue-mdc-adapter/issues/172)

<a name="0.7.0"></a>

# [0.7.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.6.5...v0.7.0) (2017-12-19)

### Bug Fixes

* **list:** Correct "mdc-list-item\_\_secondary-text" ([308ea01](https://github.com/stasson/vue-mdc-adapter/commit/308ea01))
* **package:** update material-components-web to version 0.27.0 ([005c08e](https://github.com/stasson/vue-mdc-adapter/commit/005c08e))
* **select:** mdc 0.27.0 styles issues workarrounds ([4f37bd6](https://github.com/stasson/vue-mdc-adapter/commit/4f37bd6))
* **textfield:** label should be transparent ([d22cf3c](https://github.com/stasson/vue-mdc-adapter/commit/d22cf3c))

### Features

* **docs:** add style guide ([2334b74](https://github.com/stasson/vue-mdc-adapter/commit/2334b74))
* **drawer:** implement mdc v0.27.0 ([a3e3e3e](https://github.com/stasson/vue-mdc-adapter/commit/a3e3e3e))
* **drawer:** temporary drawer should be auto-scrollable [#159](https://github.com/stasson/vue-mdc-adapter/issues/159) ([d9588b5](https://github.com/stasson/vue-mdc-adapter/commit/d9588b5))
* **list:** implement mdc v0.27.0 ([b35cad7](https://github.com/stasson/vue-mdc-adapter/commit/b35cad7))
* **menu:** implement mdc v0.27.0 ([1179781](https://github.com/stasson/vue-mdc-adapter/commit/1179781))
* **radio:** mdc-radio's init should follow v-model when checked prop is unset? [#155](https://github.com/stasson/vue-mdc-adapter/issues/155) ([5e3263d](https://github.com/stasson/vue-mdc-adapter/commit/5e3263d))
* **select:** implement mdc v0.27.0 ([5247b59](https://github.com/stasson/vue-mdc-adapter/commit/5247b59))
* **textfield:** implement mdc v0.27.0 ([dbf39f8](https://github.com/stasson/vue-mdc-adapter/commit/dbf39f8))

<a name="0.6.5"></a>

## [0.6.5](https://github.com/stasson/vue-mdc-adapter/compare/v0.6.4...v0.6.5) (2017-12-07)

### Bug Fixes

* **drawer:** temporary drawer should close on item click ([0d9017c](https://github.com/stasson/vue-mdc-adapter/commit/0d9017c))
* **icon-toggle:** Custom Icons Don't work [#150](https://github.com/stasson/vue-mdc-adapter/issues/150) ([0a5f454](https://github.com/stasson/vue-mdc-adapter/commit/0a5f454))

<a name="0.6.4"></a>

## [0.6.4](https://github.com/stasson/vue-mdc-adapter/compare/v0.6.3...v0.6.4) (2017-12-06)

<a name="0.6.3"></a>

## [0.6.3](https://github.com/stasson/vue-mdc-adapter/compare/v0.6.2...v0.6.3) (2017-12-06)

<a name="0.6.2"></a>

## [0.6.2](https://github.com/stasson/vue-mdc-adapter/compare/v0.6.1...v0.6.2) (2017-12-06)

### Bug Fixes

* **demo:** rename iframe iports as per new distribution ([7688a86](https://github.com/stasson/vue-mdc-adapter/commit/7688a86))

<a name="0.6.1"></a>

## [0.6.1](https://github.com/stasson/vue-mdc-adapter/compare/v0.6.0...v0.6.1) (2017-12-06)

### Bug Fixes

* **dist:** add missing source distribution and fix unpkg name ([28980e7](https://github.com/stasson/vue-mdc-adapter/commit/28980e7))

<a name="0.6.0"></a>

# [0.6.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.5.3...v0.6.0) (2017-12-06)

### Bug Fixes

* **checkbox:** checkbox throws error if no label [#135](https://github.com/stasson/vue-mdc-adapter/issues/135) ([c3e7c97](https://github.com/stasson/vue-mdc-adapter/commit/c3e7c97))
* **tabs:** Fixing mdc-tab-bar bar property reference [#148](https://github.com/stasson/vue-mdc-adapter/issues/148) ([943d851](https://github.com/stasson/vue-mdc-adapter/commit/943d851))

### build

* **dist:** simplify webpack config as per new ESM distribution ([309bcd6](https://github.com/stasson/vue-mdc-adapter/commit/309bcd6))
* **sass:** add sass theme to distribution ([3f66f4e](https://github.com/stasson/vue-mdc-adapter/commit/3f66f4e))

### Features

* **button:** make all props reactive ([1b1a06b](https://github.com/stasson/vue-mdc-adapter/commit/1b1a06b))
* **demo:** add vue-analytics ([c25cf84](https://github.com/stasson/vue-mdc-adapter/commit/c25cf84))
* **dist:** add esm distribution for bundlers ([be55a74](https://github.com/stasson/vue-mdc-adapter/commit/be55a74))
* **dist:** add esm distribution for bundlers ([e55dd5b](https://github.com/stasson/vue-mdc-adapter/commit/e55dd5b))
* **theme:** implement mdc-theme ([385ca64](https://github.com/stasson/vue-mdc-adapter/commit/385ca64))

### BREAKING CHANGES

* **sass:** components source are not distributed. use sass from dist folder.
* **dist:** UMD distribution names have changed. see docs/getting-started.md

<a name="0.5.3"></a>

## [0.5.3](https://github.com/stasson/vue-mdc-adapter/compare/v0.5.2...v0.5.3) (2017-11-29)

### Bug Fixes

* **demo:** demo styles are not selected on production build ([16dcc93](https://github.com/stasson/vue-mdc-adapter/commit/16dcc93))

<a name="0.5.2"></a>

## [0.5.2](https://github.com/stasson/vue-mdc-adapter/compare/v0.5.1...v0.5.2) (2017-11-29)

### Bug Fixes

* **package:** fix unpkg field to new /dist/index.js ([917d528](https://github.com/stasson/vue-mdc-adapter/commit/917d528))

### Features

* **drawer:** add support for router-link mode ([45b6796](https://github.com/stasson/vue-mdc-adapter/commit/45b6796))

<a name="0.5.1"></a>

## [0.5.1](https://github.com/stasson/vue-mdc-adapter/compare/v0.5.0...v0.5.1) (2017-11-28)

### Bug Fixes

* **demo:** set iframe elevation to 1 ([1662382](https://github.com/stasson/vue-mdc-adapter/commit/1662382))

<a name="0.5.0"></a>

# [0.5.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.4.2...v0.5.0) (2017-11-28)

### Bug Fixes

* enforce class name convention ([5660b39](https://github.com/stasson/vue-mdc-adapter/commit/5660b39)), closes [#121](https://github.com/stasson/vue-mdc-adapter/issues/121)
* enforce component naming convention ([8f805c5](https://github.com/stasson/vue-mdc-adapter/commit/8f805c5))
* **package:** update material-components-web to version 0.26.0 ([d1f6da5](https://github.com/stasson/vue-mdc-adapter/commit/d1f6da5))
* **select:** size property not applied with mdc 0.26.0 ([9925308](https://github.com/stasson/vue-mdc-adapter/commit/9925308))

### Features

* **select:** implement foundation as per mdc 0.26.0 ([53c47db](https://github.com/stasson/vue-mdc-adapter/commit/53c47db))
* **textfield:** implement foundation as per mdc 0.26.0 ([426ceb9](https://github.com/stasson/vue-mdc-adapter/commit/426ceb9))

<a name="0.4.2"></a>

## [0.4.2](https://github.com/stasson/vue-mdc-adapter/compare/v0.4.1...v0.4.2) (2017-11-26)

<a name="0.4.1"></a>

## [0.4.1](https://github.com/stasson/vue-mdc-adapter/compare/v0.4.0...v0.4.1) (2017-11-25)

### Bug Fixes

* **demo:** fix iframes wrong imports ([f75773a](https://github.com/stasson/vue-mdc-adapter/commit/f75773a))

<a name="0.4.0"></a>

# [0.4.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.3.0...v0.4.0) (2017-11-25)

### Features

* **dist:** refactor exports in order to simplify components imports ([fa8d049](https://github.com/stasson/vue-mdc-adapter/commit/fa8d049))

### BREAKING CHANGES

* **dist:** new naming convention VueMDC[Plugin], mdc[Component] and new distribution filename. check docs/getting-started.md for more

<a name="0.3.0"></a>

# [0.3.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.2.1...v0.3.0) (2017-11-18)

### Bug Fixes

* **textfield:** disable property is not reactive ([575f526](https://github.com/stasson/vue-mdc-adapter/commit/575f526)), closes [#111](https://github.com/stasson/vue-mdc-adapter/issues/111)
* **toolbar:** mdc-toolbar-menu name is confusing ([395a431](https://github.com/stasson/vue-mdc-adapter/commit/395a431)), closes [#113](https://github.com/stasson/vue-mdc-adapter/issues/113)
* **toolbar:** should be built as a single plugin [#114](https://github.com/stasson/vue-mdc-adapter/issues/114) ([b68b75d](https://github.com/stasson/vue-mdc-adapter/commit/b68b75d))

### BREAKING CHANGES

* **toolbar:** rename mdc-toolbar-menu to mdc-tollbar-menu-icon

<a name="0.2.1"></a>

## [0.2.1](https://github.com/stasson/vue-mdc-adapter/compare/v0.2.0...v0.2.1) (2017-11-14)

### Bug Fixes

* **package:** update material-components-web to version 0.25.0 ([1ed7f64](https://github.com/stasson/vue-mdc-adapter/commit/1ed7f64))

<a name="0.2.0"></a>

# [0.2.0](https://github.com/stasson/vue-mdc-adapter/compare/v0.1.8...v0.2.0) (2017-11-08)

### Bug Fixes

* **select:** option can not be selected once children slots have changed [#97](https://github.com/stasson/vue-mdc-adapter/issues/97) ([6742194](https://github.com/stasson/vue-mdc-adapter/commit/6742194))
* **typography:** component should not force adjust-margin [#101](https://github.com/stasson/vue-mdc-adapter/issues/101) ([ceaa6c1](https://github.com/stasson/vue-mdc-adapter/commit/ceaa6c1))
* **typography:** fix typography test.spec ([f91e121](https://github.com/stasson/vue-mdc-adapter/commit/f91e121))

### BREAKING CHANGES

* **typography:** typography components no longer force margin-adjust, it must be explicitly set.

<a name="0.1.8"></a>

## [0.1.8](https://github.com/stasson/vue-mdc-adapter/compare/v0.1.6...v0.1.8) (2017-11-05)

<a name="0.1.7"></a>

## [0.1.7](https://github.com/stasson/vue-mdc-adapter/compare/v0.1.6...v0.1.7) (2017-11-05)

<a name="0.1.6"></a>

## [0.1.6](https://github.com/stasson/vue-mdc-adapter/compare/v0.1.5...v0.1.6) (2017-11-05)

<a name="0.1.5"></a>

## [0.1.5](https://github.com/stasson/vue-mdc-adapter/compare/v0.1.4...v0.1.5) (2017-11-05)

<a name="0.1.4"></a>

## [0.1.4](https://github.com/stasson/vue-mdc-adapter/compare/v0.1.3...v0.1.4) (2017-11-05)

<a name="0.1.3"></a>

## [0.1.3](https://github.com/stasson/vue-mdc-adapter/compare/v0.1.1...v0.1.3) (2017-11-04)

<a name="0.1.2"></a>

## [0.1.2](https://github.com/stasson/vue-mdc-adapter/compare/v0.1.1...v0.1.2) (2017-11-04)

<a name="0.0.49"></a>

## [0.0.49](https://github.com/stasson/vue-mdc-adapter/compare/v0.0.48...v0.0.49) (2017-11-01)

### Bug Fixes

* **checkbox:** fix missing adapter methods ([46fa83c](https://github.com/stasson/vue-mdc-adapter/commit/46fa83c))
* **dialog:** footer ripple missing ([46ac43a](https://github.com/stasson/vue-mdc-adapter/commit/46ac43a))
* **snackbar:** build failure ([359a609](https://github.com/stasson/vue-mdc-adapter/commit/359a609))
* **snackbar:** fix missing adapter api ([c6fb19e](https://github.com/stasson/vue-mdc-adapter/commit/c6fb19e))
* **test:** fix crashing test.spec ([e9e3594](https://github.com/stasson/vue-mdc-adapter/commit/e9e3594))
* **textfield:** adapter api mismatch ([d7311e5](https://github.com/stasson/vue-mdc-adapter/commit/d7311e5))

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
