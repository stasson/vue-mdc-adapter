<template>
  <header 
    ref="root" 
    :class="rootClasses" 
    v-on="$listeners">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a 
          v-if="haveNavigationIcon" 
          ref="navigationIcon" 
          :class="naviconClasses" 
          href="#" 
          v-on="listeners">{{ icon }}</a>
        <span 
          v-if="!!title" 
          class="mdc-top-app-bar__title">{{ title }}</span>
      </section>
      <section 
        v-if="$slots.default" 
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <slot/>
      </section>
    </div>
  </header>
</template>

<script>
import MDCTopAppBarFoundation from '@material/top-app-bar/foundation'
import MDCShortTopAppBarFoundation from '@material/top-app-bar/short/foundation'
import { DispatchEventMixin, emitCustomEvent } from '../base'

export default {
  name: 'mdc-top-app-bar',
  mixins: [DispatchEventMixin],
  props: {
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    title: String,
    icon: {
      type: String,
      default: 'menu'
    },
    iconClasses: Object,
    dense: Boolean
  },
  data() {
    return {
      rootClasses: {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--dense': this.dense,
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.shortCollapsed,
        'mdc-top-app-bar--prominent': this.prominent
      },
      foundation: null
    }
  },
  computed: {
    haveNavigationIcon() {
      return !!this.icon || this.iconClasses
    },
    naviconClasses() {
      return {
        'mdc-top-app-bar__navigation-icon': true,
        'material-icons': !!this.icon,
        ...this.iconClasses
      }
    }
  },
  mounted() {
    const adapter = {
      addClass: className => {
        this.$set(this.rootClasses, className, true)
      },
      removeClass: className => {
        this.$delete(this.rootClasses, className)
      },
      hasClass: className => {
        return this.$refs.root.classList.contains(className)
      },
      registerNavigationIconInteractionHandler: (type, handler) => {
        if (this.$refs.navigationIcon) {
          this.$refs.navigationIcon.addEventListener(type, handler)
        }
      },
      deregisterNavigationIconInteractionHandler: (type, handler) => {
        if (this.$refs.navigationIcon) {
          this.$refs.navigationIcon.removeEventListener(type, handler)
        }
      },
      notifyNavigationIconClicked: () => {
        emitCustomEvent(
          this.$el,
          MDCTopAppBarFoundation.strings.NAVIGATION_EVENT,
          {},
          true
        )
      },
      registerScrollHandler: handler => {
        window.addEventListener('scroll', handler)
      },
      deregisterScrollHandler: handler => {
        window.removeEventListener('scroll', handler)
      },

      getViewportScrollY: () => {
        return window.pageYOffset
      },
      getTotalActionItems: () =>
        this.$refs.root.querySelectorAll(
          MDCTopAppBarFoundation.strings.ACTION_ITEM_SELECTOR
        ).length
    }

    this.foundation = this.short
      ? new MDCShortTopAppBarFoundation(adapter)
      : new MDCTopAppBarFoundation(adapter)

    this.foundation.init()
  },
  beforeDestroy() {
    this.foundation.destroy()
  }
}
</script>
