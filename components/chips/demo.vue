<template>
<div class="">
  <section class="mdc-demo">
    <mdc-chip-set>
      <mdc-chip>Item One</mdc-chip>
      <mdc-chip>Item Two</mdc-chip>
      <mdc-chip>Item Three</mdc-chip>
    </mdc-chip-set>
  </section>

  <section class="mdc-demo">
    <h3>Entry Chips</h3>
    <mdc-chip-set>
      <mdc-chip leading-icon="face" trailing-icon="more_vert">Jane Smith</mdc-chip>
      <mdc-chip leading-icon="face" trailing-icon="more_vert">John Doe</mdc-chip>
    </mdc-chip-set>
  </section>

  <section class="mdc-demo">
    <h3>Entry Chips (font-awesome)</h3>
    <mdc-chip-set>
      <mdc-chip :leading-icon-classes="{fa:1,'fa-font-awesome':1 }" :trailing-icon-classes="{fa:1,'fa-ellipsis-v':1}">Jane Smith</mdc-chip>
      <mdc-chip :leading-icon-classes="{fa:1, 'fa-smile-o':1}" :trailing-icon-classes="{fa:1, 'fa-ellipsis-v':1}">John Doe</mdc-chip>
    </mdc-chip-set>
  </section>
  
  <section class="mdc-demo">
    <h3>Choice Chips</h3>
    <mdc-chip-set choice>
      <mdc-chip>Extra small</mdc-chip>
      <mdc-chip>Small</mdc-chip>
      <mdc-chip>Medium</mdc-chip>
      <mdc-chip>Large</mdc-chip>
      <mdc-chip>Extra Large</mdc-chip>
    </mdc-chip-set>
    </section>

  <section class="mdc-demo">
    <h3>Filter Chips</h3>
    <mdc-chip-set filter>
      <mdc-chip trailing-icon="cancel">Tops</mdc-chip>
      <mdc-chip trailing-icon="cancel">Bottoms</mdc-chip>
      <mdc-chip trailing-icon="cancel">Shoes</mdc-chip>
      <mdc-chip trailing-icon="cancel">Accessories</mdc-chip>
    </mdc-chip-set>
    
    <h3>Filter Chips with leading icon</h3>
    <mdc-chip-set filter>
      <mdc-chip leading-icon="face" trailing-icon="cancel">Tops</mdc-chip>
      <mdc-chip leading-icon="face" trailing-icon="cancel">Bottoms</mdc-chip>
      <mdc-chip leading-icon="face" trailing-icon="cancel">Shoes</mdc-chip>
      <mdc-chip leading-icon="face" trailing-icon="cancel">Accessories</mdc-chip>
    </mdc-chip-set>
  </section>

  <section class="mdc-demo">
    <h3>Custom theme</h3>
    <mdc-chip-set>
      <mdc-chip class="custom-chip-primary">Add to Calendar</mdc-chip>
      <mdc-chip class="custom-chip-primary">Bookmark</mdc-chip>
      <mdc-chip class="custom-chip-primary">Set Alarm</mdc-chip>
      <mdc-chip class="custom-chip-primary">Get Directions</mdc-chip>
    </mdc-chip-set>


    <mdc-chip-set>
      <mdc-chip class="custom-chip-secondary">Add to Calendar</mdc-chip>
      <mdc-chip class="custom-chip-secondary">Bookmark</mdc-chip>
      <mdc-chip class="custom-chip-secondary">Set Alarm</mdc-chip>
      <mdc-chip class="custom-chip-secondary">Get Directions</mdc-chip>
    </mdc-chip-set>
  </section>

</div>
</template>

<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
.custom-chip-primary {
  background-color: #6200ee;
  /* @alternate */
  color: white;
  color: var(--mdc-theme-text-primary-on-dark, white);
}

.custom-chip-primary::before,
.custom-chip-primary::after {
  /* @alternate */
  background-color: white;
}

@supports not (-ms-ime-align: auto) {
  .custom-chip-primary::before,
  .custom-chip-primary::after {
    background-color: var(--mdc-theme-text-primary-on-dark, white);
  }
}

.custom-chip-primary:hover::before {
  opacity: 0.08;
}

.custom-chip-primary:not(.mdc-ripple-upgraded):focus::before,
.custom-chip-primary.mdc-ripple-upgraded--background-focused::before {
  -webkit-transition-duration: 75ms;
  transition-duration: 75ms;
  opacity: 0.24;
}

.custom-chip-primary:not(.mdc-ripple-upgraded)::after {
  -webkit-transition: opacity 150ms linear;
  transition: opacity 150ms linear;
}

.custom-chip-primary:not(.mdc-ripple-upgraded):active::after {
  -webkit-transition-duration: 75ms;
  transition-duration: 75ms;
  opacity: 0.32;
}

.custom-chip-primary.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.32;
}

.custom-chip-secondary {
  background-color: white;
  color: #018786;
  padding: 5px 10px 5px 10px;
  border-width: 2px;
  border-style: solid;
  border-color: #018786;
}

.custom-chip-secondary::before,
.custom-chip-secondary::after {
  background-color: #018786;
}

.custom-chip-secondary:hover::before {
  opacity: 0.04;
}

.custom-chip-secondary:not(.mdc-ripple-upgraded):focus::before,
.custom-chip-secondary.mdc-ripple-upgraded--background-focused::before {
  -webkit-transition-duration: 75ms;
  transition-duration: 75ms;
  opacity: 0.12;
}

.custom-chip-secondary:not(.mdc-ripple-upgraded)::after {
  -webkit-transition: opacity 150ms linear;
  transition: opacity 150ms linear;
}

.custom-chip-secondary:not(.mdc-ripple-upgraded):active::after {
  -webkit-transition-duration: 75ms;
  transition-duration: 75ms;
  opacity: 0.16;
}

.custom-chip-secondary.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.16;
}
</style>
