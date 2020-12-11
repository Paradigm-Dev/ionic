import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import { get } from "../data";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    // redirect: "/home"
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/flamechat",
    name: "Flamechat",
    component: () => import("@/views/Flamechat.vue")
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: () => import("@/views/Authentication.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (!get("user") && to.path != "/authentication") next("/authentication");
  else next();
});

export default router;
