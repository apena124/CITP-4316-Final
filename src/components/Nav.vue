<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";

const { isAuthenticated, logout } = useAuth();

const router = useRouter();

const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <div class="text-yellow-100 bg-yellow-400">
    <div class="container flex items-center justify-between mx-auto">
      <img class="h-40 rounded-lg w-30" src="../assets/logo.PNG" alt="Logo BG"/>
      <nav>
        <ul class="flex space-x-4">
          <router-link to="/">
            <li
              class="px-4 py-8 hover:cursor-pointer hover:bg-yellow-300 hover:text-yellow-500"
            >
              Home
            </li>
          </router-link>

          <router-link :to="{ name: 'Bows' }">
            <li
              class="px-4 py-8 hover:cursor-pointer hover:bg-yellow-300 hover:text-yellow-500"
            >
              Bows
            </li>
          </router-link>

          <router-link :to="{ name: 'About' }">
            <li
              class="px-4 py-8 hover:cursor-pointer hover:bg-yellow-300 hover:text-yellow-500"
            >
              About
            </li>
          </router-link>

          <router-link :to="{ name: 'Contact' }">
            <li
              class="px-4 py-8 hover:cursor-pointer hover:bg-yellow-300 hover:text-yellow-500"
            >
              Contact
            </li>
          </router-link>

          <router-link
            v-if="!isAuthenticated"
            :to="{ path: '/login', name: 'Login' }"
          >
            <li
              class="px-4 py-8 hover:cursor-pointer hover:bg-yellow-300 hover:text-yellow-500"
            >
              Login
            </li>
          </router-link>
            
            <button @click="loggingOut">
              <li
                class="px-4 py-8 hover:cursor-pointer hover:bg-yellow-300 hover:text-yellow-500"
              >
                Logout
              </li>
            </button>
        </ul>
      </nav>
    </div>
  </div>
</template>
