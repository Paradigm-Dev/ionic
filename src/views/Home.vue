<template>
  <ion-page>
    <ion-content>
      <!-- <h6 class="grey--text text--darken-1 overline">
        {{ get("config").landing.date }}
      </h6>
      <h1
        style="max-width: 56rem"
        class="deep-purple--text text--darken-3 font-weight-bold text-h3"
        v-html="get('config').landing.title"
      ></h1>
      <p
        style="max-width: 36rem"
        class="grey--text text--lighten-1 text-h6 mt-3 mb-12 font-weight-light"
        v-html="get('config').landing.body"
      ></p> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { get, set } from "../data";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
  },
  setup() {
    const router = useRouter();
    return { router, get, set };
  },
});
</script>

<style scoped>
ion-content {
  --background: url("../assets/home_bg.jpg");
}
</style>