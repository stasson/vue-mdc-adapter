<template>
  <div>
    <mdc-button raised @click="showDialog()">Show Dialog</mdc-button>
    <mdc-dialog ref="dialog" title="Dialog" accept="Accept" cancel="Decline"
      @accept="alert('accepted')" >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </mdc-dialog>
  </div>
</template>
