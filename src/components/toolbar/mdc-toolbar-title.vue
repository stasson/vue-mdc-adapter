<template>
    <a class="mdc-toolbar__title">
        <slot></slot>
    </a>
</template>

<script lang="babel">
export default {
  name: 'mdc-toolbar-title'
}
</script>

<style lang="css">
.mdc-toolbar__title {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
