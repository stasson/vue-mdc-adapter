<template>
<a href="#" class="mdc-top-app-bar--action mdc-top-app-bar__action-item" :class="actioniconClasses" v-on="listeners">
  <slot>{{icon}}</slot>
</a>
</template>

<script>
import { DispatchEventMixin } from '../base';
import { RippleMixin } from '../ripple';

export default {
  name: 'mdc-top-app-bar--action',
  mixins: [DispatchEventMixin, RippleMixin],
  props: {
    icon: String,
    iconClasses: Object,
  },
  computed: {
    actioniconClasses() {
      return {
        'material-icons': !!this.icon,
        ...this.iconClasses,
      };
    },
  },
};
</script>
