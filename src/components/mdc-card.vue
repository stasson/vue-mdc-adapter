<template>
  <div class="mdc-card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  @import '@material/card/mdc-card';

  .horizontal-block {
    @extend .mdc-card__horizontal-block;
  }

  .media-item	{
    @extend .mdc-card__media-item;
    &-1dot5x {@extend .mdc-card__media-item--1dot5x;}
    &-2x {@extend .mdc-card__media-item--2x;}
    &-3x {@extend .mdc-card__media-item--3x;}
  }

</style>

