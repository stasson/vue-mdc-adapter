<template>
  <nav class="mdc-permanent-drawer mdc-typography">
    <div class="mdc-permanent-drawer__toolbar-spacer" 
      v-if="toolbarSpacer"></div>
    <nav class="mdc-permanent-drawer__content">
      <slot />
    </nav>
  </nav>
</template>

<script lang="babel">
export default {
  name: 'mdc-permanent-drawer',
  props: {
    'toolbar-spacer': Boolean
  },
  data () {
    return {
      type: 'toto'
    }
  },
  methods: {
    open () {},
    close () {},
    toggle () {},
    isOpen () { return true }
  }
}
</script>
