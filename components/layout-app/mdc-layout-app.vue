<template>
  <div class="mdc-layout-app">

    <div class="mdc-layout-app--toolbar-wrapper">
      <slot name="toolbar" />
    </div>

    <div class="mdc-layout-app--main-container">

      <div class="mdc-layout-app--drawer-wrapper">
        <slot name="drawer" />
      </div>

      <div class="mdc-layout-app--content-wrapper">
        <slot />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'mdc-layout-app',
}
</script>