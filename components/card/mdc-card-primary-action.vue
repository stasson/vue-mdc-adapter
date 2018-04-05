<template>
  <custom-link 
    class="mdc-card-primary-action mdc-card__primary-action"
    :class="classes" :style="styles" 
    :link="link" 
    v-on="listeners">
    <slot />
  </custom-link>
</template>

<script>
import { DispatchEventMixin, CustomLinkMixin } from '../base';
import { RippleMixin } from '../ripple/index';
export default {
  name: 'mdc-card-primary-action',
  mixins: [DispatchEventMixin, CustomLinkMixin, RippleMixin],
  data() {
    return {
      classes: {},
      styles: {},
    };
  },
};
</script>
