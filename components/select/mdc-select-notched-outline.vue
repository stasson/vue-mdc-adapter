<template>
  <div>
    <div
      ref="outlined"
      :class="outlinedClasses"
      class="mdc-notched-outline">
      <svg>
        <path
          ref="outlinedPath"
          class="mdc-notched-outline__path"/>
      </svg>
    </div>
    <div
      ref="outlinedIdle"
      class="mdc-notched-outline__idle"/>
  </div>
</template>

<script>
import MDCnotchedOutlineFoundationFoundation from '@material/notched-outline/foundation'

export default {
  name: 'mdc-select-notched-outline',
  data() {
    return {
      outlinedClasses: {}
    }
  },
  mounted() {
    this.foundation = new MDCnotchedOutlineFoundationFoundation({
      getWidth: () => this.$refs.outlined.offsetWidth,
      getHeight: () => this.$refs.outlined.offsetHeight,
      addClass: className => {
        this.$set(this.outlinedClasses, className, true)
      },
      removeClass: className => {
        this.$delete(this.outlinedClasses, className)
      },
      setOutlinePathAttr: value => {
        const path = this.$refs.outlinedPath
        path.setAttribute('d', value)
      },
      getIdleOutlineStyleValue: propertyName => {
        return window
          .getComputedStyle(this.$refs.outlinedIdle)
          .getPropertyValue(propertyName)
      }
    })
    this.foundation.init()
  },
  beforeDestroy() {
    let foundation = this.foundation
    this.foundation = null
    foundation.destroy()
  }
}
</script>
