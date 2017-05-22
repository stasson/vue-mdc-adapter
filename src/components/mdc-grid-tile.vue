<template>
  <li class="mdc-grid-tile">
    <div class="mdc-grid-tile__primary" v-if="cover">
      <div class="mdc-grid-tile__primary-content"
        :style="{ backgroundImage: 'url(' + src + ')' }"></div>
    </div>
    <div class="mdc-grid-tile__primary" v-else>
        <img class="mdc-grid-tile__primary-content" :src="src" />
    </div>
    <span class="mdc-grid-tile__secondary" v-if="hasContent">
      <i class="mdc-grid-tile__icon material-icons" v-if="icon">{{ icon }}</i>
      <span class="mdc-grid-tile__title" v-if="title">{{ title }}</span>
      <span class="mdc-grid-tile__support-text" v-if="supportText">{{ supportText }}</span>
    </span>
  </li>
</template>


<script>
export default {
  name: 'mdc-grid-tile',
  props: {
    src: String,
    cover: Boolean,
    icon: String,
    title: String,
    supportText: String
  },
  computed: {
    hasContent () {
      return this.title || this.caption
    }
  }
}
</script>
