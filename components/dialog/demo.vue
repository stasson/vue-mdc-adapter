<template>
  <div class="mdc-demo mdc-demo--container">

    <mdc-dialog ref="dialog" title="Dialog" accept="Accept" cancel="Decline"
      @validate="$event.accept()"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </mdc-dialog>

    <mdc-button raised @click="$refs.dialog.show()">Show Dialog</mdc-button>

  </div>
</template>
