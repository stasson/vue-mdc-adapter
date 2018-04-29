<template>
  <div class="mdc-demo--appbar">
    <section class="mdc-demo">
      <mdc-toolbar
        slot="toolbar">
        <mdc-toolbar-row>
          <mdc-toolbar-section align-start >
            <mdc-toolbar-menu-icon/>
            <mdc-toolbar-title>Title</mdc-toolbar-title>
          </mdc-toolbar-section>
          <mdc-toolbar-section align-end>
            <mdc-toolbar-icon
              event="show-help"
              icon="help"/>
          </mdc-toolbar-section>
        </mdc-toolbar-row>
      </mdc-toolbar>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return { buttonText: '' }
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.demo-button-info {
  font-style: italic;
}
.mdc-demo--appbar {
  width: 100%;
}

.mdc-demo .mdc-toolbar {
  position: relative;
}
</style>
