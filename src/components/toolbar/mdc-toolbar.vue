<template>
  <header class="mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-theme--primary">
    <!-- here are some sugar slots -->
    <div class="mdc-toolbar__row" v-if="$slots.icon || $slots.title">
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
    name: 'Toolbar',
    props: ['titleElement', 'flexibleRowElement', 'fixedAdjustElement'],
    data () {
      return {
        classes: {},
        foundation: null
      }
    },
    updated () { // should this be beforeUpdate?
      this.foundation.updateAdjustElementStyles()
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
          window.innerWidth
        },
        getViewportScrollY () {
          window.pageYOffset
        },
        getOffsetHeight () {
          vm.$el.offsetHeight
        },
        getFlexibleRowElementOffsetHeight () {
          // due to a bug in MDC, this still gets called even when the toolbar has no flexible row
          // therefore we add `|| vm.$el` to get around a TypeError
          (vm.$props.flexibleRowElement || vm.$slots.flexibleRow || vm.$el).offsetHeight
        },
        notifyChange (evtData) {
          vm.$emit(CHANGE_EVENT, evtData)
        },
        setStyle (property, value) {
          vm.$el.style.setProperty(property, value)
        },
        setStyleForTitleElement (property, value) {
          (vm.$props.titleElement || vm.$slots.title).style.setProperty(property, value)
        },
        setStyleForFlexibleRowElement (property, value) {
          // same deal here, `|| vm.$el` should not be here
          (vm.$props.flexibleRowElement || vm.$slots.flexibleRow || vm.$el).style.setProperty(property, value)
        },
        setStyleForFixedAdjustElement (property, value) {
          vm.$props.fixedAdjustElement.style.setProperty(property, value)
        }
      })
      this.foundation.init()
    },
    beforeDestroy () {
      this.foundation.destroy()
    }
  }
</script>
