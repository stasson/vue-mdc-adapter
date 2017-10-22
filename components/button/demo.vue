<template>
  <div class="mdc-demo">

    <mdc-subheading>Text Buttons</mdc-subheading>
    <div class="button-line">
      <mdc-button >baseline</mdc-button>
      <mdc-button compact>compact</mdc-button>
      <mdc-button dense>dense</mdc-button>
      <mdc-button><mdc-icon icon="favorite"></mdc-icon>icon</mdc-button>
      <mdc-button disabled>disabled</mdc-button>
    </div>  
    
    <mdc-subheading>Raised Buttons</mdc-subheading>
    <div class="button-line">
      <mdc-button raised>baseline</mdc-button>
      <mdc-button raised compact>compact</mdc-button>
      <mdc-button raised dense>dense</mdc-button>
      <mdc-button raised><mdc-icon class="material-icons">favorite</mdc-icon>icon</mdc-button>
      <mdc-button raised disabled>disabled</mdc-button>
    </div>  

    <mdc-subheading>Unelevated Buttons</mdc-subheading>
    <div class="button-line">
      <mdc-button unelevated>baseline</mdc-button>
      <mdc-button unelevated compact>compact</mdc-button>
      <mdc-button unelevated dense>dense</mdc-button>
      <mdc-button unelevated ><mdc-icon icon="favorite"></mdc-icon>icon</mdc-button>
      <mdc-button unelevated disabled>disabled</mdc-button>
    </div>  

    <mdc-subheading>Stroked Buttons</mdc-subheading>
    <div class="button-line">
      <mdc-button stroked>baseline</mdc-button>
      <mdc-button stroked compact>compact</mdc-button>
      <mdc-button stroked dense>dense</mdc-button>
      <mdc-button stroked><mdc-icon icon="favorite"></mdc-icon>icon</mdc-button>
      <mdc-button stroked disabled>disabled</mdc-button>
    </div>  


  </div>
</template>

<style>
  .button-line {
    margin-top: -8px;
    margin-bottom: 32px;
  }
</style>