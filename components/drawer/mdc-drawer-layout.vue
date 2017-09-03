<template>
  <div class="mdc-drawer-layout">
      <slot />
  </div> 
</template>

<style lang="css">
.mdc-drawer-layout {
  display: flex;
  flex-direction: row;
}

.mdc-drawer {
  order: -1;
}
</style>