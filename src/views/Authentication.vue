<template>
  <ion-page>
    <ion-card style="margin: 100px auto 0px auto; width: 400px">
      <ion-card-header>
        <ion-card-title>Sign in</ion-card-title>
        <ion-card-subtitle>Or create an account</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <ion-item>
          <ion-label position="floating">Username</ion-label>
          <ion-input v-model="username"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>
        <ion-button @click="signIn()" class="ion-float-right ion-margin-bottom">
          Sign in
          <ion-ripple-effect></ion-ripple-effect>
        </ion-button>
      </ion-card-content>
    </ion-card>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonRippleEffect,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios, { AxiosResponse } from "axios";
import { set } from "../data";

export default defineComponent({
  name: "Authentication",
  components: {
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonRippleEffect,
  },
  data: () => ({
    username: "",
    password: "",
    loading: false,
  }),
  methods: {
    signIn() {
      this.loading = true;
      axios
        .post("https://www.theparadigmdev.com/api/users/signin", {
          username: this.username.toLowerCase(),
          password: this.password,
        })
        .then(async (response: AxiosResponse) => {
          set("user", response.data);
          this.$router.push("/home");
        });
    },
  },
});
</script>

<style scoped>
ion-page {
  --background: #0f1e3c;
}
</style>