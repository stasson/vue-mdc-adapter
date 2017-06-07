<template>
  <header>
    <!--Toolbar-->
    <div ref="root" :class="classes" :style="rootStyles">
        <slot></slot>
    </div>
    <!-- Fixed Adjust Element-->
    <div ref="fixed-adjust" class="mdc-toolbar-fixed-adjust" 
      :style="adjustStyles"
      v-if="isFixed"></div>
  </header>
</template>

<style lang="scss">
  @import "@material/toolbar/mdc-toolbar";
</style>


<script lang="babel">

  import MDCToolbarFoundation from '@material/toolbar/foundation'
  import * as util from '@material/toolbar/util'

  export default {
    name: 'mdc-toolbar',
    props: {
      'fixed': Boolean,
      'waterfall': Boolean,
      'fixed-lastrow': Boolean,
      'flexible': Boolean,
      'flexible-default': { type: Boolean, default: true },
      'type': String
    },
    computed: {
      // by computing each of the classes individually, it will
      // improve the performance of the `classes` computation
      // otherwise, it would unnecessarily recompute every
      // single one of classes every time `classes` is accessed
      isFixed () {
        return this.fixed ||
                this.waterfall ||
                this.fixedLastrow ||
                this.type === 'fixed' ||
                this.type === 'waterfall' ||
                this.type === 'fixed-lastrow'
      },
      isWaterfall () {
        return this.waterfall || this.type === 'waterfall'
      },
      isFixedLastrowOnly () {
        return this.fixedLastrow || this.type === 'fixed-lastrow'
      },
      isFlexible () {
        return this.flexible || this.type === 'flexible'
      },
      hasFlexibleDefaultBehavior () {
        return (this.flexible || this.type === 'flexible') &&
        (this.flexibleDefault || this.type === 'flexible-default')
      },
      classes () {
        return {
          'mdc-toolbar': true,
          'mdc-toolbar--fixed': this.isFixed,
          'mdc-toolbar--waterfall': this.isWaterfall,
          'mdc-toolbar--fixed-lastrow-only': this.isFixedLastrowOnly,
          'mdc-toolbar--flexible': this.isFlexible,
          'mdc-toolbar--flexible-default-behavior': this.hasFlexibleDefaultBehavior,
          ...this.rootClasses // spread the classes from data, so changes by the
                              // foundation are reflected in the element
        }
      }
    },
    data () {
      return {
        rootClasses: {},
        rootStyles: {},
        adjustStyles: {
          height: '0.1px' // to avoid top margin collapse with :after el
                          // 0.1 px should be rounded to 0px
                          // TODO: find a better trick
        },
        foundation: null
      }
    },
    mounted () {
      let vm = this
      this.foundation = new MDCToolbarFoundation({
        addClass (className) {
          vm.$set(vm.rootClasses, className, true)
        },
        removeClass (className) {
          vm.$delete(vm.rootClasses, className)
        },
        hasClass (className) {
          return Boolean(vm.rootClasses[className])
        },
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
          return window.innerWidth
        },
        getViewportScrollY () {
          return window.pageYOffset
        },
        getOffsetHeight () {
          return vm.$refs.root.offsetHeight
        },
        getFlexibleRowElementOffsetHeight () {
          let el = vm.$refs.root.querySelector(MDCToolbarFoundation.strings.FLEXIBLE_ROW_SELECTOR)
          return (el) ? el.offsetHeight : undefined
        },
        notifyChange (evtData) {
          vm.$emit('change', evtData)
        },
        setStyle (property, value) {
          vm.$set(vm.rootStyles, property, value)
        },
        setStyleForTitleElement (property, value) {
          let el = vm.$refs.root.querySelector(MDCToolbarFoundation.strings.TITLE_SELECTOR)
          if (el) el.style.setProperty(property, value)
        },
        setStyleForFlexibleRowElement (property, value) {
          let el = vm.$refs.root.querySelector(MDCToolbarFoundation.strings.FLEXIBLE_ROW_SELECTOR)
          if (el) el.style.setProperty(property, value)
        },
        setStyleForFixedAdjustElement (property, value) {
          vm.$set(vm.adjustStyles, property, value)
        }
      })
      this.foundation.init()
    },
    beforeDestroy () {
      this.foundation.destroy()
    }
  }
</script>
