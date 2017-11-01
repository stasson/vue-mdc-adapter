<template>
  <div role="progressbar" class="mdc-linear-progress" 
    :class="classes" :style="styles">
    <div class="mdc-linear-progress__buffering-dots"></div>
    <div ref="buffer" class="mdc-linear-progress__buffer"></div>
    <div ref="primary" class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
  </div>  
</template>

<script>
import MDCLinearProgressFoundation from '@material/linear-progress/foundation'

const ProgressPropType = {
  type: [Number, String],
  validator (value) {
    return Number(value) >= 0 && Number(value) <= 1
  }
}

export default {
  name: 'mdc-linear-progress',
  props: {
    'open': { type: Boolean, default: true },
    'indeterminate': Boolean,
    'reverse': Boolean,
    'accent': Boolean,
    'progress': ProgressPropType,
    'buffer': ProgressPropType
  },
  data () {
    return {
      classes: {'mdc-linear-progress--accent': this.accent},
      styles: {}
    }
  },
  watch: {
    open () {
      if (this.open) {
        this.foundation.open()
      } else {
        this.foundation.close()
      }
    },
    progress () {
      this.foundation.setProgress(Number(this.progress))
    },
    buffer () {
      this.foundation.setBuffer(Number(this.buffer))
    },
    indeterminate () {
      this.foundation.setDeterminate(!this.indeterminate)
    },
    reverse () {
      this.foundation.setReverse(this.reverse)
    }
  },
  mounted () {
    this.foundation = new MDCLinearProgressFoundation({
      addClass: (className) => {
        this.$set(this.classes, className, true)
      },
      getPrimaryBar: () => /* el: Element */ {
        return this.$refs.primary
      },
      getBuffer: () => /* el: Element */ {
        return this.$refs.buffer
      },
      hasClass: (className) => {
        this.$el.classList.contains(className)
      },
      removeClass: (className) => {
        this.$delete(this.classes, className)
      },
      setStyle: (el, styleProperty, value) => {
        el.style[styleProperty] = value
      }
    })
    this.foundation.init()

    this.foundation.setReverse(this.reverse)
    this.foundation.setProgress(Number(this.progress))
    this.foundation.setBuffer(Number(this.buffer))
    this.foundation.setDeterminate(!this.indeterminate)
    if (this.open) {
      this.foundation.open()
    } else {
      this.foundation.close()
    }
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
