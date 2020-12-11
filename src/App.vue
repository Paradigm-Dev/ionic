<template>
  <IonApp>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay" v-if="get('user')">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Apps</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list style="padding-top: 0px">
            <ion-menu-toggle
              auto-hide="false"
              v-for="(p, i) in appPages"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon
                  slot="start"
                  :ios="p.iosIcon"
                  :md="p.mdIcon"
                ></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>

      <ion-page id="main-content">
        <ion-header>
          <ion-toolbar v-if="get('user')" color="primary">
            <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title v-if="!isPlatform('capacitor')"> Paradigm </ion-title>
            <ion-title v-else>{{ route.name }}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-router-outlet></ion-router-outlet>
        </ion-content>
      </ion-page>
    </ion-split-pane>
  </IonApp>
</template>

<script lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonMenuButton,
  IonButtons,
  IonToolbar,
  IonHeader,
  IonPage,
  isPlatform,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import {
  homeOutline,
  homeSharp,
  chatboxOutline,
  chatboxSharp,
} from "ionicons/icons";
import { get } from "./data";
// import { initializeSocketEventHandlers } from "./socket";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonSplitPane,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonPage,
  },
  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: "Home",
        url: "/home",
        iosIcon: homeOutline,
        mdIcon: homeSharp,
      },
      {
        title: "Flamechat",
        url: "/flamechat",
        iosIcon: chatboxOutline,
        mdIcon: chatboxSharp,
      },
    ];

    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }

    const route = useRoute();

    // initializeSocketEventHandlers();

    return {
      selectedIndex,
      appPages,
      get,
      isPlatform,
      route,
      isSelected: (url: string) => (url === route.path ? "selected" : ""),
    };
  },
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
  cursor: pointer;
}

ion-menu.md ion-item.selected {
  --background: rgba(66, 140, 255, 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: #428cff;
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: #428cff;
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  /* color: #73849a; */
}

ion-menu.ios,
ion-item.selected {
  --color: #428cff;
}

ion-menu {
  user-select: none;
}
</style>