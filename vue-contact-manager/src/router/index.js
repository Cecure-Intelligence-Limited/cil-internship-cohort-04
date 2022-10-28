import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AddContactView from "../views/AddContactView.vue";
import EditContactView from "../views/EditContactView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/contact/add",
    name: "AddContact",
    component: AddContactView,
  },
  {
    path: "/contact/edit/:id",
    name: "EditContact",
    component: EditContactView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
