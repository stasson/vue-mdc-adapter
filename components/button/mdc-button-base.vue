<template>
  <custom-button ref="root"
    :class="classes" :style="styles"
    :href="href" :link="link" :disabled="disabled"
    v-on="listeners">
    <slot />
  </custom-button>
</template>

<script>
import { DispatchEventMixin, CustomButtonMixin } from '../base';
import { RippleMixin } from '../ripple';

export default {
  name: 'mdc-button-base',
  mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
  data() {
    return {
      classes: {},
      styles: {},
    };
  },
};
</script>
