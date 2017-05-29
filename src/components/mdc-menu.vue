<template>
  <div ref="root" :class="classes" tabindex="-1">
  <ul ref="items" class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
    <slot></slot>
  </ul>
</div>
</template>

<style lang="scss">
  @import "@material/menu/mdc-menu";
</style>

<script lang="babel">
import MDCSimpleMenuFoundation from '@material/menu/simple/foundation'
import {getTransformPropertyName} from '@material/menu/util'

export default {
  props: {
    'open': Boolean,
    'open-from-top-left': Boolean,
    'open-from-top-right': Boolean,
    'open-from-bottom-left': Boolean,
    'open-from-bottom-right': Boolean
  },
  data () {
    return {
      classes: {
        'mdc-simple-menu': true,
        'mdc-simple-menu--open-from-top-left': this.openFromTopLeft,
        'mdc-simple-menu--open-from-top-right': this.openFromTopRight,
        'mdc-simple-menu--open-from-bottom-left': this.openFromBottomLeft,
        'mdc-simple-menu--open-from-bottom-right': this.openFromBottomRight
      },
      foundation: null,
      previousFocus_: null
    }
  },
  computed: {
    items () {
      return [].slice.call(
        this.$refs.items.querySelectorAll('.mdc-list-item[role]'))
    }
  },
  methods: {
    show () {
      this.foundation.open()
    },
    hide () {
      this.foundation.close()
    },
    isOpen () {
      return this.foundation.isOpen()
    }
  },
  mounted () {
    let vm = this
    this.foundation = new MDCSimpleMenuFoundation({
      addClass: (className) => vm.$set(vm.classes, className, true),
      removeClass: (className) => vm.$delete(vm.classes, className),
      hasClass: (className) => Boolean(vm.classes[className]),
      hasNecessaryDom: () => Boolean(vm.$refs.items),
      getInnerDimensions: () => {
        return {width: vm.$refs.items.offsetWidth, height: vm.$refs.items.offsetHeight}
      },
      hasAnchor: () => vm.$refs.root.parentElement && vm.$refs.root.parentElement.classList.contains('mdc-menu-anchor'),
      getAnchorDimensions: () => vm.$refs.root.parentElement.getBoundingClientRect(),
      getWindowDimensions: () => {
        return {width: window.innerWidth, height: window.innerHeight}
      },
      setScale: (x, y) => {
        vm.$refs.root.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`
      },
      setInnerScale: (x, y) => {
        vm.$refs.items.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`
      },
      getNumberOfItems: () => vm.items.length,
      registerInteractionHandler: (type, handler) => vm.$refs.root.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => vm.$refs.root.removeEventListener(type, handler),
      registerDocumentClickHandler: (handler) => document.addEventListener('click', handler),
      deregisterDocumentClickHandler: (handler) => document.removeEventListener('click', handler),
      getYParamsForItemAtIndex: (index) => {
        const {offsetTop: top, offsetHeight: height} = vm.items[index]
        return {top, height}
      },
      setTransitionDelayForItemAtIndex: (index, value) =>
        vm.items[index].style.setProperty('transition-delay', value),
      getIndexForEventTarget: (target) => vm.items.indexOf(target),
      notifySelected: (evtData) => vm.$emit('selected', {
        index: evtData.index,
        item: vm.items[evtData.index]
      }),
      notifyCancel: () => vm.$emit('cancel'),
      saveFocus: () => {
        vm.previousFocus_ = document.activeElement
      },
      restoreFocus: () => {
        if (vm.previousFocus_) {
          vm.previousFocus_.focus()
        }
      },
      isFocused: () => document.activeElement === vm.$refs.root,
      focus: () => vm.$refs.root.focus(),
      getFocusedItemIndex: () => vm.items.indexOf(document.activeElement),
      focusItemAtIndex: (index) => vm.items[index].focus(),
      isRtl: () => getComputedStyle(vm.$refs.root).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        vm.$refs.root.style[`${getTransformPropertyName(window)}-origin`] = origin
      },
      setPosition: (position) => {
        vm.$refs.root.style.left = 'left' in position ? position.left : null
        vm.$refs.root.style.right = 'right' in position ? position.right : null
        vm.$refs.root.style.top = 'top' in position ? position.top : null
        vm.$refs.root.style.bottom = 'bottom' in position ? position.bottom : null
      },
      getAccurateTime: () => window.performance.now()
    })
    this.foundation.init()
    if (this.open) this.foundation.open()
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
