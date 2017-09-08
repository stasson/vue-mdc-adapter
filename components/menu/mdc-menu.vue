<template>
  <div ref="root" :class="classes" tabindex="-1">
    <ul ref="items" class="mdc-simple-menu__items mdc-list" 
      role="menu" :aria-hidden="isOpen()?'false':'true'">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="babel">
import MDCSimpleMenuFoundation from '@material/menu/simple/foundation'
import {getTransformPropertyName} from '@material/menu/util'
import {emitCustomEvent} from '../util'

export default {
  props: {
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
    }
    refreshItems()
    this.slotObserver = new MutationObserver(() => refreshItems())
    this.slotObserver.observe(this.$el, { childList: true })

    const transformPropertyName = getTransformPropertyName(window)
    this._previousFocus = undefined

    this.foundation = new MDCSimpleMenuFoundation({
      addClass: (className) => this.$set(this.classes, className, true),
      removeClass: (className) => this.$delete(this.classes, className),
      hasClass: (className) => this.$refs.root.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.$refs.items),
      getAttributeForEventTarget: (target, attributeName) =>
        target.getAttribute(attributeName),
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
      setScale: (x, y) => {
        this.$refs.root.style[transformPropertyName] = `scale(${x}, ${y})`
      },
      setInnerScale: (x, y) => {
        this.$refs.items.style[transformPropertyName] = `scale(${x}, ${y})`
      },
      getNumberOfItems: () => this.items.length,
      registerInteractionHandler: (type, handler) =>
        this.$refs.root.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) =>
        this.$refs.root.removeEventListener(type, handler),
      registerBodyClickHandler: (handler) =>
        document.body.addEventListener('click', handler),
      deregisterBodyClickHandler: (handler) =>
        document.body.removeEventListener('click', handler),
      getYParamsForItemAtIndex: (index) => {
        const {offsetTop: top, offsetHeight: height} = this.items[index]
        return {top, height}
      },
      setTransitionDelayForItemAtIndex: (index, value) =>
        this.items[index].style.setProperty('transition-delay', value),
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
        this.$refs.root.style[`${getTransformPropertyName(window)}-origin`] =
          origin
      },
      setPosition: (position) => {
        this.$refs.root.style.left =
          'left' in position ? position.left : null
        this.$refs.root.style.right =
          'right' in position ? position.right : null
        this.$refs.root.style.top =
          'top' in position ? position.top : null
        this.$refs.root.style.bottom =
          'bottom' in position ? position.bottom : null
      },
      getAccurateTime: () => window.performance.now()
    })

    /** -- temporary fix for duplicate $emit */
    // TODO: MDCFIX
    this.foundation.clickHandler_ = (evt) => {
      evt.stopPropagation()
      this.foundation.handlePossibleSelected_(evt)
    }

    this.foundation.keydownHandler_ = (evt) => {
      evt.stopPropagation()
      this.foundation.handleKeyboardDown_(evt)
    }

    this.foundation.keyupHandler_ = (evt) => {
      evt.stopPropagation()
      this.foundation.handleKeyboardUp_(evt)
    }

    this.foundation.documentClickHandler_ = (evt) => {
      evt.stopPropagation()
      this.foundation.adapter_.notifyCancel()
      this.foundation.close(evt)
    }
    /* -- temporary fix for duplicate $emit **/

    this.foundation.init()
  },
  beforeDestroy () {
    this._previousFocus = null
    this.slotObserver.disconnect()
    this.foundation.destroy()
  }
}
</script>
