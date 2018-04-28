<template>
  <div class="mdc-demo">
    <mdc-card>
      <mdc-card-primary-action>
        <mdc-card-media :src="card" >
        </mdc-card-media>
      </mdc-card-primary-action>
      <mdc-card-header title="Title goes here" subtitle="subtitle here" ></mdc-card-header>
      <mdc-card-actions>
        <mdc-card-action-buttons>
          <mdc-card-action-button>ACTION</mdc-card-action-button>
        </mdc-card-action-buttons>
        <mdc-card-action-icons>
          <mdc-card-action-icon icon="star" />
        </mdc-card-action-icons>
      </mdc-card-actions>
    </mdc-card>
  </div>
</template>

<script>
import card from 'demo/assets/card-16-9.jpg'

export default {
  data() {
    return {
      card
    }
  }
}
</script>
      
<style>
.mdc-demo .mdc-card {
  background-color: white;
  width: 320px;
  margin: 32px auto;
}
</style>
