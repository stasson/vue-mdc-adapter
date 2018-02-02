<template>
  <div class="mdc-select mdc-menu-select" 
    role="listbox" 
    :class="classes">
    <div ref="surface" class="mdc-select__surface"
      :style="surfaceStyles" :tabindex="tabIndex">
        <div ref="label" class="mdc-select__label"
          :class="labelClasses"
        >{{label}}</div>
        <div ref="selectedContent" class="mdc-select__selected-text" 
        >{{selectedTextContent}}</div>
        <div ref="bottomLine" class="mdc-select__bottom-line"
          :class="bottomLineClasses"></div>
    </div>
    <mdc-menu ref="menu" 
      class="mdc-select__menu"
      @update="refreshIndex">
      <slot></slot>
    </mdc-menu>
  </div>
</template>

<script>
import { mdcMenu } from '../menu'
import MDCSelectFoundation from '@material/select/foundation'

export default {
  name: 'mdc-menu-select',
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
      labelClasses: {},
      bottomLineClasses: {},
      surfaceStyles: {},
      tabIndex: 0,
      selectedTextContent: ''
    }
  },
  components: {
    'mdc-menu': mdcMenu 
  },
  watch: {
    disabled (value) {
      this.foundation && this.foundation.setDisabled(value)
    },
    value () {
      this.refreshIndex()
    } 
  },
  methods: {
    refreshIndex () {
      if (this.foundation) {
        let options = this.$refs.menu.items
        for (let i = 0; i < options.length; i++) {
          let optionValue = options[i].getAttribute('data-value') || options[i].textContent.trim()
          if (this.value == optionValue) {
            this.foundation.setSelectedIndex(i)
            //TODO: MDCFIX force float above if value is valid
            this.$set(this.labelClasses, 'mdc-select__label--float-above', true);
            return;
          }
        }
        //TODO: MDCFIX force float above if value is valid
        this.foundation.setSelectedIndex(-1)
        this.$set(this.labelClasses, 'mdc-select__label--float-above', false);
        this.$emit('change', this.foundation.getValue()) // TODO: MDCFIX
      }
    },
  },
  mounted () {
    this.foundation  = new MDCSelectFoundation({
      addClass: (className) =>
        this.$set(this.classes, className, true),
      removeClass: (className) =>
        this.$delete(this.classes, className),
      addClassToLabel: (className) =>
        this.$set(this.labelClasses, className, true),
      removeClassFromLabel: (className) =>
        this.$delete(this.labelClasses, className),
      addClassToBottomLine: (className) => 
        this.$set(this.bottomLineClasses, className, true),
      removeClassFromBottomLine: (className) =>
        this.$delete(this.bottomLineClasses, className),
      setBottomLineAttr: (attr, value) => 
        this.$refs.bottomLine.setAttribute(attr, value),
      setAttr: (attr, value) =>
        this.$el.setAttribute(attr, value),
      rmAttr: (attr, value) =>
        this.$el.removeAttribute(attr, value),
      computeBoundingRect: () =>
        this.$refs.surface.getBoundingClientRect(),
      registerInteractionHandler: (type, handler) =>
        this.$refs.surface.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) =>
        this.$refs.surface.removeEventListener(type, handler),
      focus: () =>
        this.$refs.surface.focus(),
      makeTabbable: () => {
        this.tabIndex = 0
      },
      makeUntabbable: () => {
        this.tabIndex = -1
      },
      getComputedStyleValue: (prop) =>
        window.getComputedStyle(this.$refs.surface).getPropertyValue(prop),
      setStyle: (propertyName, value) =>
        this.$set(this.surfaceStyles, propertyName, value),
      create2dRenderingContext: () =>
        document.createElement('canvas').getContext('2d'),
      setMenuElStyle: (propertyName, value) =>
        this.$refs.menu.$el.style[propertyName] = value,
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
      getValueForOptionAtIndex: (index) => {
        return this.$refs.menu.items[index].getAttribute('data-value') 
          || this.$refs.menu.items[index].textContent.trim()
      },
      setAttrForOptionAtIndex: (index, attr, value) =>
        this.$refs.menu.items[index].setAttribute(attr, value),
      rmAttrForOptionAtIndex: (index, attr) =>
        this.$refs.menu.items[index].removeAttribute(attr),
      getOffsetTopForOptionAtIndex: (index) =>
        this.$refs.menu.items[index].offsetTop,
      registerMenuInteractionHandler: (type, handler) =>
        this.$refs.menu.$el.addEventListener(type, handler),
      deregisterMenuInteractionHandler: (type, handler) =>
        this.$refs.menu.$el.removeEventListener(type, handler),
      notifyChange: () => {
        this.$emit('change', this.foundation.getValue())
      },
      getWindowInnerHeight: () => window.innerHeight,
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
    })


    //TODO: MDCFIX
    let foundation = this.foundation
    foundation.resize = () => {
      
      const font = foundation.adapter_.getComputedStyleValue('font');
      const letterSpacing = parseFloat(foundation.adapter_.getComputedStyleValue('letter-spacing'));

      if (font) {
        foundation.ctx_.font = font;
      } else {
        const primaryFontFamily = foundation.adapter_.getComputedStyleValue('font-family').split(',')[0];
        const fontSize = foundation.adapter_.getComputedStyleValue('font-size');
        foundation.ctx_.font = `${fontSize} ${primaryFontFamily}`;
      }

      let maxTextLength = 0;

      const surfacePaddingRight = parseInt(foundation.adapter_.getComputedStyleValue('padding-right'), 10);
      const surfacePaddingLeft = parseInt(foundation.adapter_.getComputedStyleValue('padding-left'), 10);
      const selectBoxAddedPadding = surfacePaddingRight + surfacePaddingLeft;

      for (let i = 0, l = foundation.adapter_.getNumberOfOptions(); i < l; i++) {
        const txt = foundation.adapter_.getTextForOptionAtIndex(i).trim();
        const {width} = foundation.ctx_.measureText(txt);
        const addedSpace = letterSpacing * txt.length;

        maxTextLength =
          Math.max(maxTextLength, Math.ceil(width + addedSpace + selectBoxAddedPadding));
      }

      const labelTxt = this.label;
      const {width} = foundation.ctx_.measureText(labelTxt);
      const addedSpace = letterSpacing * labelTxt.length;

      maxTextLength =
        Math.max(maxTextLength, Math.ceil(width + addedSpace + selectBoxAddedPadding));


      foundation.adapter_.setStyle('width', `${maxTextLength}px`);
    }
    /// 
    
    this.foundation.init()
    this.foundation.setDisabled(this.disabled)
    this.refreshIndex ()
    if (this.value !== this.foundation.getValue()) {
      this.$emit('change', this.foundation.getValue())
    }
  },
  beforeDestroy () {
    let foundation = this.foundation
    this.foundation = null
    foundation.destroy()
  }
}
</script>
