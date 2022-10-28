import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles.css";

// Font Awesome Icons
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Bootstrap css, JS
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

createApp(App).use(router).use(store).mount("#app");

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");
