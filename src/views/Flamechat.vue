<template>
  <ion-page>
    <ion-content>
      <ion-toolbar v-if="!isPlatform('capacitor')">
        <ion-title size="small">Flamechat</ion-title>
      </ion-toolbar>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
  isPlatform,
} from "@ionic/vue";
import { defineComponent } from "vue";
import io from "socket.io-client";
import moment from "moment";

export default defineComponent({
  name: "Flamechat",
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonTitle,
  },
  setup() {
    return {
      isPlatform,
    };
  },
});
</script>

<style scoped>
</style>