<template>
  <a class="mdc-toolbar-icon mdc-toolbar__icon" 
    :class="{'material-icons':!!icon}"
    v-on="listeners">
    <slot>{{icon}}</slot>
  </a>
</template>

<script>
import { DispatchEventMixin } from '../base';

export default {
  name: 'mdc-toolbar-icon',
  mixins: [DispatchEventMixin],
  props: {
    icon: String,
  },
};
</script>
