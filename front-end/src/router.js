import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./pages/HomePage.vue";
import UsersPage from "./pages/UsersPage.vue";

Vue.use(VueRouter);
export const router = new VueRouter({
  routes: [
    { path: "/", name: "/", component: HomePage },
    { path: "/users", name: "users", component: UsersPage },
  ],
  mode: "history",
});
