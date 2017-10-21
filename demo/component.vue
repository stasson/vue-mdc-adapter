<template>
  <div>
    <mdc-display>{{title}}</mdc-display>
    <component :is="demo" v-if="demo" />
    <mdc-display v-else>TBD</mdc-display>  
  </div>
</template>

<script>
import demos from './demos'
import {capitalize} from './utils'

const components = {...demos}

export default {
  components,
  computed : {
    demo() {
      let key = this.$route.params.id + '-demo'
      return (key in demos) ? key : undefined
    },
    title () {
      return capitalize(this.$route.params.id)
    }
  }  
}
</script>
