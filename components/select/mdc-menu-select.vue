<template>
  <div class="mdc-select mdc-menu-anchor" role="listbox" :tabindex="tabIndex" 
    :class="classes" :style="styles">
    <span class="mdc-select__selected-text">{{ selectedTextContent }}</span>
    <mdc-menu ref="menu" :style="menuStyles">
        <li class="mdc-list-item" role="option" aria-disabled="true" data-value="">
        {{label}}
        </li>
        <slot></slot>
    </mdc-menu>
  </div>
</template>

<script lang="babel">
import MDCSelectFoundation from '@material/select/foundation'

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    multiple: Boolean,
    value: [String, Array],
    disabled: Boolean,
    label: String
  },
  data () {
    return {
      classes: {},
      styles: {},
      menuStyles: {},
      tabIndex: 0,
      selectedTextContent: ''
    }
  },
  mounted () {
    this.foundation = new MDCSelectFoundation({
      addClass: (className) =>
        this.$set(this.classes, className, true),
      removeClass: (className) =>
        this.$delete(this.classes, className),
      setAttr: (attr, value) =>
        this.$el.setAttribute(attr, value),
      rmAttr: (attr, value) =>
        this.$el.removeAttribute(attr, value),
      computeBoundingRect: () =>
        this.$el.getBoundingClientRect(),
      registerInteractionHandler: (type, handler) =>
        this.$el.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) =>
        this.$el.removeEventListener(type, handler),
      focus: () =>
        this.$el.focus(),
      makeTabbable: () => {
        this.tabIndex = 0
      },
      makeUntabbable: () => {
        this.tabIndex = -1
      },
      getComputedStyleValue: (prop) =>
        window.getComputedStyle(this.$el).getPropertyValue(prop),
      setStyle: (propertyName, value) =>
        this.$set(this.styles, propertyName, value),
      create2dRenderingContext: () =>
        document.createElement('canvas').getContext('2d'),
      setMenuElStyle: (propertyName, value) =>
        this.$set(this.menuStyles, propertyName, value),
      setMenuElAttr: (attr, value) =>
        this.$refs.menu.$el.setAttribute(attr, value),
      rmMenuElAttr: (attr) =>
        this.$refs.menu.$el.removeAttribute(attr),
      getMenuElOffsetHeight: () =>
        this.$refs.menu.$el.offsetHeight,
      openMenu: (focusIndex) =>
        this.$refs.menu.show({focusIndex}),
      isMenuOpen: () =>
        this.$refs.menu.isOpen(),
      setSelectedTextContent: (selectedTextContent) => {
        this.selectedTextContent = selectedTextContent
      },
      getNumberOfOptions: () =>
        this.$refs.menu.items.length,
      getTextForOptionAtIndex: (index) =>
        this.$refs.menu.items[index].textContent.trim(),
      getValueForOptionAtIndex: (index) =>
        this.$refs.menu.items[index].dataset.value ||
          this.$refs.menu.items[index].textContent.trim(),
      setAttrForOptionAtIndex: (index, attr, value) =>
        this.$refs.menu.items[index].setAttribute(attr, value),
      rmAttrForOptionAtIndex: (index, attr) =>
        this.$refs.menu.items[index].removeAttribute(attr),
      getOffsetTopForOptionAtIndex: (index) =>
        this.$refs.menu.items[index].offsetTop,
      registerMenuInteractionHandler: (type, handler) =>
        this.$refs.menu.foundation.adapter_.registerInteractionHandler(type, handler),
      deregisterMenuInteractionHandler: (type, handler) =>
        this.$refs.menu.foundation.adapter_.deregisterInteractionHandler(type, handler),
      notifyChange: () => {
        this.$emit('change', this.foundation.getValue())
      },
      getWindowInnerHeight: () =>
        window.innerHeight
    })
    this.foundation.init()

    let idx = 0
    let options = this.$refs.menu.items
    for (let i = 0; i < options.length; i++) {
      let optionValue = options[i].dataset.value || options[i].textContent.trim()
      if (this.value === optionValue) {
        idx = i
      }
    }
    this.foundation.setSelectedIndex(idx)
    this.foundation.setDisabled(this.disabled)
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
