import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { router } from "./router.js";

Vue.use(BootstrapVue);
Vue.use(ElementUI);
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
