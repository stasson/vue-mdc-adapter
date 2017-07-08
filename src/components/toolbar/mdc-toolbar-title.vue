<template>
    <span class="mdc-toolbar__title">
        <slot></slot>
    </span>
</template>

<style lang="scss">
@import "@material/toolbar/mdc-toolbar";
</style>

<script lang="babel">
export default {
  name: 'mdc-toolbar-title'
}
</script>
