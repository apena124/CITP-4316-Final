<script setup>
import useAuth from '../composable/useAuth'
</script>

<template>
  <div class="flex flex-col items-center justify-center sapce-y-12 min-h-screen-nonav">
    <h2 class="text-6xl tracking-tighter font-extralight">My Cart</h2>
    <div class="grid items-center justify-center grid-cols-2 bg-gray-200 rounded-lg min-h-sereen-nonav">
      
      </div>
  </div>

  <div class="text-yellow-100 bg-yellow-400">
     <div class="container flex items-center justify-between mx-auto">
        
        <nav>
        <ul class="flex space-x-4">
        
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
          </ul>
          </nav>
     </div>
     <h5 class="text-center">2022 © QuiverPoint supply, Inc. All Rights Reserved.</h5>
   </div>
</template>