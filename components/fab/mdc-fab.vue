<template>
  <a :href="disabled?undefined:href" >
    <button class="mdc-fab material-icons" :class="classes" :style="styles"
      :disabled="disabled" @click="dispatchEvent" >
      <span class="mdc-fab__icon">
        <slot>
        </slot>
      </span>
    </button>
  </a>
</template>


<style lang="css">
.mdc-fab--absolute {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.mdc-fab--fixed {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
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
import {RippleBase, DispatchEventMixin} from '../util'

export default {
  name: 'mdc-fab',
  mixins: [DispatchEventMixin],
  props: {
    href: String,
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
    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy () {
    this.ripple.destroy()
  }
}
</script>
