<template>
  <div>
    <mdc-display typo="display3">
      Material Components for Vue
    </mdc-display>
    <readme class="markdown" />
  </div>
</template>

<script>
const Readme = () => import('../components/README.md')

export default {
  components: {
    readme: Readme
  }
}
</script>