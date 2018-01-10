<template>
  <div ref="root" class="mdc-menu mdc-simple-menu"
    :class="classes" :style="styles" 
    tabindex="-1">
    <ul ref="items" class="mdc-simple-menu__items mdc-list" 
      role="menu" aria-hidden="true">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import {MDCSimpleMenuFoundation} from '@material/menu/simple/foundation'
import {getTransformPropertyName} from '@material/menu/util'
import {emitCustomEvent} from '../base'

export default {
  name: 'mdc-menu',
  props: {
    'open-from-top-left': Boolean,
    'open-from-top-right': Boolean,
    'open-from-bottom-left': Boolean,
    'open-from-bottom-right': Boolean
  },
  data () {
    return {
      classes: {
        'mdc-simple-menu--open-from-top-left': this.openFromTopLeft,
        'mdc-simple-menu--open-from-top-right': this.openFromTopRight,
        'mdc-simple-menu--open-from-bottom-left': this.openFromBottomLeft,
        'mdc-simple-menu--open-from-bottom-right': this.openFromBottomRight
      },
      styles: {},
      items: []
    }
  },
  methods: {
    show (options) {
      this.foundation.open(options)
    },
    hide () {
      this.foundation.close()
    },
    isOpen () {
      return this.foundation ? this.foundation.isOpen() : false
    }
  },
  mounted () {
    const refreshItems = () => {
      this.items = [].slice.call(
        this.$refs.items.querySelectorAll('.mdc-list-item[role]'))
      this.$emit('update')
    }
    this.slotObserver = new MutationObserver(() => refreshItems())
    this.slotObserver.observe(this.$el, { childList: true, subtree: true })

    this._previousFocus = undefined

    this.foundation = new MDCSimpleMenuFoundation({
      addClass: (className) => this.$set(this.classes, className, true),
      removeClass: (className) => this.$delete(this.classes, className),
      hasClass: (className) => this.$refs.root.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.$refs.items),
      getAttributeForEventTarget: (target, attributeName) =>
        target.getAttribute(attributeName),
      eventTargetHasClass: (target, className) => target.classList.contains(className),  
      getInnerDimensions: () => ({
        width: this.$refs.items.offsetWidth,
        height: this.$refs.items.offsetHeight
      }),
      hasAnchor: () => this.$refs.root.parentElement &&
        this.$refs.root.parentElement.classList.contains('mdc-menu-anchor'),
      getAnchorDimensions: () =>
        this.$refs.root.parentElement.getBoundingClientRect(),
      getWindowDimensions: () => ({
        width: window.innerWidth,
        height: window.innerHeight
      }),
      getNumberOfItems: () => this.items.length,
      registerInteractionHandler: (type, handler) =>
        this.$refs.root.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) =>
        this.$refs.root.removeEventListener(type, handler),
      registerBodyClickHandler: (handler) =>
        document.body.addEventListener('click', handler),
      deregisterBodyClickHandler: (handler) =>
        document.body.removeEventListener('click', handler),
      getIndexForEventTarget: (target) => this.items.indexOf(target),
      notifySelected: (evtData) => {
        const evt = {
          index: evtData.index,
          item: this.items[evtData.index]
        }
        this.$emit('select', evt)
        emitCustomEvent(this.$el,
          MDCSimpleMenuFoundation.strings.SELECTED_EVENT,
          evt)
      },
      notifyCancel: () => {
        this.$emit('cancel')
        emitCustomEvent(this.$el,
          MDCSimpleMenuFoundation.strings.CANCEL_EVENT,
          {})
      },
      saveFocus: () => { this._previousFocus = document.activeElement },
      restoreFocus: () => {
        if (this._previousFocus) {
          this._previousFocus.focus()
        }
      },
      isFocused: () => document.activeElement === this.$refs.root,
      focus: () => this.$refs.root.focus(),
      getFocusedItemIndex: () => this.items.indexOf(document.activeElement),
      focusItemAtIndex: (index) => this.items[index].focus(),
      isRtl: () => getComputedStyle(this.$refs.root)
        .getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        this.$set(this.styles, `${getTransformPropertyName(window)}-origin`, origin)
      },
      setPosition: (position) => {
        this.$set(this.styles,'left', position.left)
        this.$set(this.styles,'right', position.right)
        this.$set(this.styles,'top', position.top)
        this.$set(this.styles,'bottom', position.bottom)
      },
      setMaxHeight: (height) => {
        this.$set(this.styles,'max-height', height)
      },
    })

    refreshItems()
    this.foundation.init()
  },
  beforeDestroy () {
    this._previousFocus = null
    this.slotObserver.disconnect()
    this.foundation.destroy()
  }
}
</script>
