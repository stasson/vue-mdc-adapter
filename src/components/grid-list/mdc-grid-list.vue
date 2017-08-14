<template>
  <div class="mdc-grid-list" :class="classes" :style=styles>
    <ul class="mdc-grid-list__tiles">
      <slot></slot>
    </ul>
  </div>
</template>


<style lang="scss">
  @import "@material/grid-list/mdc-grid-list";
</style>


<script>

import MDCGridListFoundation from '@material/grid-list/foundation'

export default {
  name: 'mdc-grid-list',
  props: {
    'width': [String, Number],
    'ratio': String,
    'narrow-gutter': Boolean,
    'header-caption': Boolean,
    'icon-align-start': Boolean,
    'icon-align-end': Boolean,
    'with-support-text': Boolean
  },
  data () {
    let classes = {}
    if (this.narrowGutter) {
      classes['mdc-grid-list--tile-gutter-1'] = true
    }
    if (this.headerCaption) {
      classes['mdc-grid-list--header-caption'] = true
    }
    if (this.ratio) {
      classes[`mdc-grid-list--tile-aspect-${this.ratio}`] = true
    }
    if (this.iconAlignStart) {
      classes['mdc-grid-list--with-icon-align-start'] = true
    }
    if (this.iconAlignEnd) {
      classes['mdc-grid-list--with-icon-align-end'] = true
    }
    if (this.withSupportText) {
      classes['mdc-grid-list--twoline-caption'] = true
    }

    let styles = {}
    if (this.width) {
      styles['--mdc-grid-list-tile-width'] = `${this.width}px`
    }

    return { classes, styles }
  },
  mounted () {
    this.foundation = new MDCGridListFoundation({
      getOffsetWidth: () => {
        return this.$el.offsetWidth
      },
      getNumberOfTiles: () => {
        return this.$el.querySelectorAll(
          MDCGridListFoundation.strings.TILE_SELECTOR).length
      },
      getOffsetWidthForTileAtIndex: (index) => {
        return this.$el.querySelectorAll(
          MDCGridListFoundation.strings.TILE_SELECTOR)[index].offsetWidth
      },
      setStyleForTilesElement: (property, value) => {
        this.$el.querySelector(
          MDCGridListFoundation.strings.TILES_SELECTOR).style[property] = value
      },
      registerResizeHandler: (handler) => {
        window.addEventListener('resize', handler)
      },
      deregisterResizeHandler: (handler) => {
        window.removeEventListener('resize', handler)
      }
    })
    this.foundation.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
