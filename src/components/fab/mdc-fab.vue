<template>
  <button class="mdc-fab material-icons" :class="classes" :style="styles"
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

.mdc-fab--fixed {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

@media(min-width: 1024px) {
  .mdc-fab--absolute {
    bottom: 3rem;
    right: 5rem;
  }

  .mdc-fab--fixed {
    bottom: 3rem;
    right: 5rem;
  }
}


</style>


<script>
import {VueMDCRipple} from '../base'
import {DispatchEventMixin} from '../util'

export default {
  name: 'mdc-fab',
  mixins: [DispatchEventMixin],
  props: {
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    absolute: Boolean,
    fixed: Boolean
  },
  data () {
    return {
      classes: {
        'mdc-fab--mini': this.mini,
        'mdc-fab--plain': this.plain,
        'mdc-fab--absolute': this.absolute,
        'mdc-fab--fixed': this.fixed
      },
      styles: {}
    }
  },
  mounted () {
    this.ripple = new VueMDCRipple(this)
    this.ripple.init()
  },
  beforeDestroy () {
    this.ripple.destroy()
  }
}

</script>
