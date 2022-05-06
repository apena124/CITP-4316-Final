<script setup>

</script>

<template>
  <div class="flex flex-col items-center justify-center sapce-y-12 min-h-screen-nonav">
    <h2 class="text-6xl tracking-tighter font-extralight">Modern Bows</h2>
    <div class="grid items-center justify-center grid-rows-2 bg-gray-200 rounded-lg min-h-sereen-nonav">
      
        <ul class="">
        <li class="">
          <h2>Compound Bows</h2>
          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/modern1.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">BlackOut Intrigue Compound Bow</h3>
            <p> $349.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>

          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/modern2.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">BlackOut NV-32 Compound Bow</h3>
            <p>$799.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>

          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/modern3.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">Stinger ATK RTS Compund Bow</h3>
            <p>$499.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>

          <h2>Olympic recurve bows</h2>
          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/modern4.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">Gillo GT 25" formula Recurve Riser</h3>
            <p> $699.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>

          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/modern5.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">Hoyt Formula Xi 25" Recurve Riser</h3>
            <p>$829.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>

          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/modern6.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">Hoyt XAKT Recurve Bow</h3>
            <p>$695.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>
        </li>
      </ul>
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

          <router-link :to="{name: 'Chat' }">
            <li class="px-4 py-8 hover:cursor-pointer hover:bg-yellow-300 hover:text-yellow-500">Chat With Us</li>
          </router-link>
          </ul>
          </nav>
     </div>
     <h5 class="text-center">2022 © QuiverPoint supply, Inc. All Rights Reserved.</h5>
   </div>
</template>