<template>
  <nav class="mdc-tab-bar" :class="classes">
    <slot></slot>
    <span ref="indicator" class="mdc-tab-bar__indicator" 
      :style="indicatorStyles"></span>
  </nav>  
</template>

<script lang="babel">
import MDCTabBarFoundation from '@material/tabs/tab-bar/foundation'
import MDCTabFoundation from '@material/tabs/tab/foundation'

export default {
  props: {
    'indicator-primary': Boolean,
    'indicator-accent': Boolean
  },
  data () {
    return {
      classes: {
        'mdc-tab-bar--indicator-primary': this.indicatorPrimary,
        'mdc-tab-bar--indicator-accent': this.indicatorAccent
      },
      indicatorStyles: {}
    }
  },
  computed: {
    tabs () {
      const tabElements = [].slice.call(
        this.$el.querySelectorAll(MDCTabBarFoundation.strings.TAB_SELECTOR))
      return tabElements.map((el) => el.__vue__)
    }
  },
  methods: {
    onSelect ({detail}) {
      const {tab} = detail
      const index = this.tabs.indexOf(tab)
      if (index < 0) {
        throw new Error('mdc-tab-bar internal error: index not found')
      }
      this.foundation.switchToTabAtIndex(index, true)
    }
  },
  mounted () {
    this.foundation = new MDCTabBarFoundation({
      addClass: (className) =>
        this.$set(this.classes, className, true),
      removeClass: (className) =>
        this.$delete(this.classes, className),
      bindOnMDCTabSelectedEvent: () => {
        this.$el.addEventListener(
          MDCTabFoundation.strings.SELECTED_EVENT, this.onSelect)
      },
      unbindOnMDCTabSelectedEvent: () =>
        this.$el.removeEventListener(
          MDCTabFoundation.strings.SELECTED_EVENT, this.onSelect),
      registerResizeHandler: (handler) =>
        window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) =>
        window.removeEventListener('resize', handler),
      getOffsetWidth: () =>
        this.$el.offsetWidth,
      setStyleForIndicator: (propertyName, value) =>
        this.$set(this.indicatorStyles, propertyName, value),
      getOffsetWidthForIndicator: () =>
        this.$refs.indicator.offsetWidth,
      notifyChange: (evtData) => {
        this.$emit('change', evtData.activeIndex)
      },
      getNumberOfTabs: () =>
        this.tabs.length,
      isTabActiveAtIndex: (index) =>
        this.tabs[index].isActive,
      setTabActiveAtIndex: (index, isActive) => {
        this.tabs[index].isActive = isActive
      },
      isDefaultPreventedOnClickForTabAtIndex: (index) =>
        this.tabs[index].preventDefaultOnClick,
      setPreventDefaultOnClickForTabAtIndex: (index, preventDefaultOnClick) => {
        this.tabs[index].preventDefaultOnClick = preventDefaultOnClick
      },
      measureTabAtIndex: (index) =>
        this.tabs[index].measureSelf(),
      getComputedWidthForTabAtIndex: (index) =>
        this.tabs[index].computedWidth,
      getComputedLeftForTabAtIndex: (index) =>
        this.tabs[index].computedLeft
    })
    this.foundation.init()

    let hasText, hasIcon
    const tabs = this.tabs
    for (let tab of tabs) {
      if (tab.hasText) {
        hasText = true
        break
      }
    }
    for (let tab of tabs) {
      if (tab.hasIcon) {
        hasIcon = true
        break
      }
    }
    if (hasText && hasIcon) {
      this.$set(this.classes, 'mdc-tab-bar--icons-with-text', true)
    } else if (hasIcon) {
      this.$set(this.classes, 'mdc-tab-bar--icon-tab-bar', true)
    }
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
