<script setup>

</script>

<template>
  <div class="flex flex-col items-center justify-center sapce-y-12 min-h-screen-nonav">
    <h2 class="text-6xl tracking-tighter font-extralight">Traditional Bows</h2>
    <div class="grid items-center justify-center bg-gray-200 rounded-lg grid-row-2 min-h-sereen-nonav">
      
      <ul>
        <li>
           <h2>Longbow's</h2>
          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/traditional1.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">Mountain Mesa Longbow</h3>
            <p>$299.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>

          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/tradittonal5.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">Bear 64" AuSable Longbow</h3>
            <p>$599.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>

          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/traditional6.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">Prologue Wood Longbow</h3>
            <p>$229.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>

          <h2>Recurve Bows</h2>
          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/traditional4.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">Carin 62" Takedown Recurve</h3>
            <p>$159.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>

          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/traditional3.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">Bear Super Mag 48" Recurve</h3>
            <p>$399.99</p>
            <button type="submit" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">add to cart</button>
          </div>

          <div class="grid items-center justify-center grid-cols-4">
            <img src="../assets/traditional2.jpg" class="h-20"/>
            <h3 class="text-xl font-semibold tracking-tighter">Fire Stick 50" Recurve Bow</h3>
            <p>$529.99</p>
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