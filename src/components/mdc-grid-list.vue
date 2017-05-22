<template>
  <div class="mdc-grid-list" :class="classes" :style=styles>
    <ul class="mdc-grid-list__tiles">
      <slot></slot>
    </ul>
  </div>
</template>


<script lang="babel">

import { MDCGridListFoundation } from '@material/grid-list'

export default {
  name: 'mdc-grid-list',
  data () {
    return {
      foundation: null
    }
  },
  props: {
    width: [String, Number],
    ratio: String,
    narrowPadding: Number,
    headerCaption: Boolean,
    withIconStart: Boolean,
    withIconEnd: Boolean,
    withSupportText: Boolean
  },
  computed: {
    classes () {
      var classes = []
      if (this.narrowPadding) {
        classes.push('mdc-grid-list--tile-gutter-1')
      }
      if (this.headerCaption) {
        classes.push('mdc-grid-list--header-caption')
      }
      if (this.ratio) {
        classes.push(`mdc-grid-list--tile-aspect-${this.ratio}`)
      }
      if (this.withIconStart) {
        classes.push(`mdc-grid-list--with-icon-align-start`)
      }
      if (this.withIconEnd) {
        classes.push(`mdc-grid-list--with-icon-align-end`)
      }
      if (this.withSupportText) {
        classes.push(`mdc-grid-list--twoline-caption`)
      }

      return classes
    },
    styles () {
      var styles = {}
      if (this.width) {
        styles['--mdc-grid-list-tile-width'] = `${this.width}px`
      }
      return styles
    }
  },
  mounted () {
    let vm = this
    this.foundation = new MDCGridListFoundation({
      getOffsetWidth () {
        return vm.$el.offsetWidth
      },
      getNumberOfTiles () {
        return vm.$el.querySelectorAll(
          MDCGridListFoundation.strings.TILE_SELECTOR).length
      },
      getOffsetWidthForTileAtIndex (index) {
        return vm.$el.querySelectorAll(
          MDCGridListFoundation.strings.TILE_SELECTOR)[index].offsetWidth
      },
      setStyleForTilesElement (property, value) {
        vm.$el.querySelector(
          MDCGridListFoundation.strings.TILES_SELECTOR).style[property] = value
      },
      registerResizeHandler (handler) {
        window.addEventListener('resize', handler)
      },
      deregisterResizeHandler (handler) {
        window.removeEventListener('resize', handler)
      }
    })
    this.foundation.init()
  }
}
</script>



<style lang="scss">
@import "@material/grid-list/mdc-grid-list";
</style>
