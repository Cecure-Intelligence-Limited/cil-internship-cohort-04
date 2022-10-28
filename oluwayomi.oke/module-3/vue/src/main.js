import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faHouse,
  faCircleQuestion,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCopyright,
  faPenToSquare,
  faClipboard,
} from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faHouse,
  faCircleQuestion,
  faCopyright,
  faChevronDown,
  faPenToSquare,
  faBars,
  faClipboard
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
