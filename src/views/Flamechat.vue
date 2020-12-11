<template>
  <ion-page>
    <ion-content>
      <ion-toolbar>
        <ion-title size="small">Flamechat</ion-title>
      </ion-toolbar>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonToolbar, IonTitle } from "@ionic/vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "Flamechat",
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonTitle,
  },
});
</script>

<style scoped>
</style>