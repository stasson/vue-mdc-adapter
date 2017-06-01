<template>
  <button class="mdc-fab material-icons" :class="classes"
    :disabled="disabled" @click="dispatchEvent" >
    <span class="mdc-fab__icon">
      <slot>
      </slot>
    </span>
  </button>
</template>


<style lang="scss">
@import '@material/fab/mdc-fab';
  
.mdc-fab--absolute {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

@media(min-width: 1024px) {
   .mdc-fab--absolute {
    bottom: 3rem;
    right: 5rem;
  }
}
</style>


<script>
import {MDCRipple} from '@material/ripple'

export default {
  props: {
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    absolute: Boolean
  },
  computed: {
    classes: function () {
      return {
        'mdc-fab--mini': this.mini,
        'mdc-fab--plain': this.plain,
        'mdc-fab--absolute': this.absolute
      }
    }
  },
  methods: {
    dispatchEvent (event) {
      this.$emit(event.type)
    }
  },
  mounted () {
    this.$el.classList.add('mdc-ripple-surface')
    this.mdc_ripple_ = MDCRipple.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdc_ripple_.destroy()
    delete this.mdc_ripple_
  }
}

</script>
