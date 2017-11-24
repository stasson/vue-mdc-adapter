<template>
  <div class="mdc-demo mdc-demo--container">
    <div>
      <div class="button-line">
        <mdc-button >baseline</mdc-button>
        <mdc-button compact>compact</mdc-button>
        <mdc-button dense>dense</mdc-button>
        <mdc-button><mdc-icon icon="favorite"></mdc-icon>icon</mdc-button>
      </div>  
      
      <div class="button-line">
        <mdc-button raised>baseline</mdc-button>
        <mdc-button raised compact>compact</mdc-button>
        <mdc-button raised dense>dense</mdc-button>
        <mdc-button raised><mdc-icon class="material-icons">favorite</mdc-icon>icon</mdc-button>
      </div>  
    </div>
  </div>
</template>

<style>
  .button-line {
    margin-top: -8px;
    margin-bottom: 32px;
  }

  .mdc-caption {
    display: inline-block;
    width: 120px;
  }
</style>