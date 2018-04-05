<template>
  <div class="mdc-grid-list">
    <ul class="mdc-grid-list__tiles" :class="classes" :style="styles">
        <slot></slot>
    </ul>
  </div>
</template>

<script>
import MDCGridListFoundation from '@material/grid-list/foundation';

export default {
  name: 'mdc-grid-list',
  props: {
    width: [String, Number],
    ratio: String,
    'narrow-gutter': Boolean,
    'header-caption': Boolean,
    'icon-align-start': Boolean,
    'icon-align-end': Boolean,
    'with-support-text': Boolean,
    interactive: Boolean,
  },
  provide() {
    return { mdcGrid: this };
  },
  computed: {
    classes() {
      let classes = {};

      classes['mdc-grid-list--tile-gutter-1'] = this.narrowGutter;
      classes['mdc-grid-list--header-caption'] = this.headerCaption;
      classes[`mdc-grid-list--tile-aspect-${this.ratio}`] = this.ratio;
      classes['mdc-grid-list--with-icon-align-start'] = this.iconAlignStart;
      classes['mdc-grid-list--with-icon-align-end'] = this.iconAlignEnd;
      classes['mdc-grid-list--twoline-caption'] = this.withSupportText;
      classes['mdc-grid-list--non-interactive'] = !this.interactive;

      return classes;
    },
    styles() {
      var defaultWidth = 200;
      return {
        '--mdc-grid-list-tile-width': `${this.width || defaultWidth}px`,
      };
    },
  },
  mounted() {
    this.foundation = new MDCGridListFoundation({
      getOffsetWidth: () => {
        return this.$el.offsetWidth;
      },
      getNumberOfTiles: () => {
        return this.$el.querySelectorAll(
          MDCGridListFoundation.strings.TILE_SELECTOR,
        ).length;
      },
      getOffsetWidthForTileAtIndex: index => {
        return this.$el.querySelectorAll(
          MDCGridListFoundation.strings.TILE_SELECTOR,
        )[index].offsetWidth;
      },
      setStyleForTilesElement: (property, value) => {
        this.$el.querySelector(
          MDCGridListFoundation.strings.TILES_SELECTOR,
        ).style[property] = value;
      },
      registerResizeHandler: handler => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: handler => {
        window.removeEventListener('resize', handler);
      },
    });
    this.foundation.init();
  },
  beforeDestroy() {
    this.foundation.destroy();
  },
};
</script>
