<template>
  <header class="mdc-toolbar-wrapper">
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

<script>
import MDCToolbarFoundation from '@material/toolbar/foundation';

export default {
  name: 'mdc-toolbar',
  props: {
    fixed: Boolean,
    waterfall: Boolean,
    'fixed-lastrow': Boolean,
    flexible: Boolean,
    'flexible-default': { type: Boolean, default: true },
  },
  data() {
    return {
      rootClasses: {
        'mdc-toolbar': true,
        'mdc-toolbar--fixed': this.fixed || this.waterfall || this.fixedLastrow,
        'mdc-toolbar--waterfall': this.waterfall,
        'mdc-toolbar--fixed-lastrow-only': this.fixedLastrow,
        'mdc-toolbar--flexible': this.flexible,
        'mdc-toolbar--flexible-default-behavior':
          this.flexible && this.flexibleDefault,
      },
      rootStyles: {},
      adjustStyles: {
        // to avoid top margin collapse with :after el
        // 0.1 px should be rounded to 0px
        // TODO: find a better trick
        // height: '0.1px'
      },
      foundation: null,
    };
  },
  mounted() {
    this.foundation = new MDCToolbarFoundation({
      addClass: className => {
        this.$set(this.rootClasses, className, true);
      },
      removeClass: className => {
        this.$delete(this.rootClasses, className);
      },
      hasClass: className => {
        return this.$refs.root.classList.contains(className);
      },
      registerScrollHandler: handler => {
        window.addEventListener('scroll', handler);
      },
      deregisterScrollHandler: handler => {
        window.removeEventListener('scroll', handler);
      },
      registerResizeHandler: handler => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: handler => {
        window.removeEventListener('resize', handler);
      },
      getViewportWidth: () => {
        return window.innerWidth;
      },
      getViewportScrollY: () => {
        return window.pageYOffset;
      },
      getOffsetHeight: () => {
        return this.$refs.root.offsetHeight;
      },
      getFirstRowElementOffsetHeight: () => {
        let el = this.$refs.root.querySelector(
          MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR,
        );
        return el ? el.offsetHeight : undefined;
      },
      notifyChange: evtData => {
        this.$emit('change', evtData);
      },
      setStyle: (property, value) => {
        this.$set(this.rootStyles, property, value);
      },
      setStyleForTitleElement: (property, value) => {
        let el = this.$refs.root.querySelector(
          MDCToolbarFoundation.strings.TITLE_SELECTOR,
        );
        if (el) el.style.setProperty(property, value);
      },
      setStyleForFlexibleRowElement: (property, value) => {
        let el = this.$refs.root.querySelector(
          MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR,
        );
        if (el) el.style.setProperty(property, value);
      },
      setStyleForFixedAdjustElement: (property, value) => {
        this.$set(this.adjustStyles, property, value);
      },
    });
    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
};
</script>
