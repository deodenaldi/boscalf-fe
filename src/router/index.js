import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProdukView from "../views/ProdukView.vue";
import ShoppingCartView from "../views/ShoppingCartView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/produk",
    name: "produk",
    component: ProdukView,
  },
  {
    path: "/shopping",
    name: "shopping",
    component: ShoppingCartView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
