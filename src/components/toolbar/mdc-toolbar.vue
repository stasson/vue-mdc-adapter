<template>
  <header>
    <!--Toolbar-->
    <div ref="root" :class="rootClasses" :style="rootStyles">
        <slot></slot>
    </div>
    <!-- Fixed Adjust Element-->
    <div ref="fixed-adjust" class="mdc-toolbar-fixed-adjust" 
      :style="adjustStyles"
      v-if="fixed || waterfall || fixedLastrow"></div>
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
      'flexible-default': { type: Boolean, default: true }
    },
    data () {
      return {
        rootClasses: {
          'mdc-toolbar': true,
          'mdc-toolbar--fixed': this.fixed || this.waterfall ||
                                  this.fixedLastrow,
          'mdc-toolbar--waterfall': this.waterfall,
          'mdc-toolbar--fixed-lastrow-only': this.fixedLastrow,
          'mdc-toolbar--flexible': this.flexible,
          'mdc-toolbar--flexible-default-behavior': this.flexible &&
                                                      this.flexibleDefault
        },
        rootStyles: {
          // fix for toolbar fixed z-index
          'z-index': 10
        },
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
