import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

import Index from "./pages/index.vue";
import Traditional from "./pages/traditional.vue";
import Modern from "./pages/modern.vue";
import Cart from "./pages/cart.vue";
import About from "./pages/about.vue";
import Contact from "./pages/contact.vue";
import Login from "./pages/login.vue";
import NotFound from "./pages/404.vue";
import { createArrayExpression } from "@vue/compiler-core";

const { isAuthenticated } = useAuth();

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/traditional",
    name: "Traditional",
    component: Traditional,
  },
  {
    path: "/modern",
    name: "Modern",
    component: Modern,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
