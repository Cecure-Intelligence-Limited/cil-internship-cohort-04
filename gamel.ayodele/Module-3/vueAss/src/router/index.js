import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../view/AboutView.vue";
import HomeView from "../view/HomeView.vue";
import AddInfo from "../components/AddInfo.vue";
import UpdateInfo from "../view/UpdateInfo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/add",
    name: "AddInfo",
    component: AddInfo,
  },
  {
    path: "/update",
    name: "UpdateInfo",
    component: UpdateInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
