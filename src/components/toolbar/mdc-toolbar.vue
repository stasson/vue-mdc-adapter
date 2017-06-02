<template>
  <header class="mdc-toolbar">
    <!-- here are some sugar slots -->
    <div class="mdc-toolbar__row" v-if="$slots.icon || $slots.title" ref="firstRow">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start" v-if="$slots.icon">
        <slot name="icon" />
      </section>
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start" v-if="$slots.title">
         <slot name="title" />
      </section>
    </div>
    <!-- if the user doesn't want to use the sugar slots then they can inject their own content here -->
    <slot/>
  </header>
</template>

<script lang="babel">
  import MDCToolbarFoundation from '@material/toolbar/foundation'
  import * as util from '@material/toolbar/util'

  export default {
    name: 'mdc-toolbar',
    props: ['titleElement', 'flexibleRowElement', 'fixedAdjustElement', 'firstRowElement'],
    data () {
      return {
        classes: {},
        foundation: null
      }
    },
    methods: {
      /**
       * Init the foundation manually if it exists.
       * Should be useful for testing/debugging.
       *
       * @return {void}
       */
      initFoundation () {
        if (this.foundation) {
          this.foundation.init()
        }
      },
      /**
       * Destroy the foundation manually if it exists.
       * Should be useful for testing/debugging.
       *
       * @return {void}
       */
      destroyFoundation () {
        if (this.foundation) {
          this.foundation.destroy()
        }
      },
      /**
       * Update the fixed adjust element's style
       * @return {void}
       */
      updateAdjustElementStyles () {
        if (this.foundation) {
          this.foundation.updateAdjustElementStyles()
        }
      }
    },
    updated () { // should this be beforeUpdate?
      this.updateAdjustElementStyles() // this may be a factor in waterfall functionality not working correctly
    },
    mounted () {
      const CHANGE_EVENT = (MDCToolbarFoundation.strings.CHANGE_EVENT || 'MDCToolbar:change') // because `MDCToolbarFoundation.strings.CHANGE_EVENT` is undefined. WTF?

      let vm = this
      this.foundation = new MDCToolbarFoundation({
        addClass (className) {
          vm.$set(vm.classes, className, true)
        },
        removeClass (className) {
          vm.$delete(vm.classes, className)
        },
        hasClass (className) {
          return Boolean(vm.classes[className]) || (vm.$el && vm.$el.classList.contains(className))
        },
        // I think this is the wrong implementation. Does not work correctly in electron.
        registerScrollHandler (handler) {
          window.addEventListener('scroll', handler, util.applyPassive())
        },
        deregisterScrollHandler (handler) {
          window.removeEventListener('scroll', handler, util.applyPassive())
        },
        //
        registerResizeHandler (handler) {
          window.addEventListener('resize', handler)
        },
        deregisterResizeHandler (handler) {
          window.removeEventListener('resize', handler)
        },
        getViewportWidth () {
          return window.innerWidth()
        },
        getViewportScrollY () {
          return window.pageYOffset()
        },
        getOffsetHeight () {
          return vm.$el.offsetHeight()
        },
        // all `if (el)` checks are because there is no guarantee that the element has been initialized yet
        // probably need to wait until next tick or something
        getFlexibleRowElementOffsetHeight () { // TODO: rename this to getFirstRowElementOffsetHeight when toolbar is updated to new version
          let el = (vm.$props.firstRowElement || vm.$refs.firstRow || vm.$props.flexibleRowElement || vm.$slots.flexibleRow)
          if (el) {
            return el.offsetHeight()
          }
        },
        notifyChange (evtData) {
          vm.$emit(CHANGE_EVENT, evtData)
        },
        setStyle (property, value) {
          vm.$el.style.setProperty(property, value)
        },
        setStyleForTitleElement (property, value) {
          let el = (vm.$props.titleElement || vm.$slots.title)
          if (el) {
            el.style.setProperty(property, value)
          }
        },
        setStyleForFlexibleRowElement (property, value) {
          let el = (vm.$props.flexibleRowElement || vm.$slots.flexibleRow)
          if (el) {
            el.style.setProperty(property, value)
          }
        },
        setStyleForFixedAdjustElement (property, value) {
          let el = vm.$props.fixedAdjustElement
          if (el) {
            el.style.setProperty(property, value)
          }
        }
      })
      this.initFoundation()
    },
    beforeDestroy () { // beforeDestroy or destroyed?
      this.destroyFoundation()
    }
  }
</script>
