import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

import Index from "./pages/index.vue";
import Traditional from "./pages/traditional.vue";
import Modern from "./pages/modern.vue";
import Cart from "./pages/cart.vue";
import About from "./pages/about.vue";
import Chat from "./pages/chat.vue";
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
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/chat",
    name: "Chat",
    component: Chat,
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
    path: "/cart",
    name: "My Cart",
    component: Cart,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
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
