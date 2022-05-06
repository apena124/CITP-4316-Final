<script setup></script>

<template>
  <div class="flex flex-col items-center justify-center sapce-y-12 min-h-screen-nonav">
    <h2 class="text-6xl tracking-tighter font-extralight">Contact Us</h2>
    <div class="grid items-center justify-center grid-cols-2 bg-gray-200 rounded-lg min-h-sereen-nonav">
      
      <h3>Order Questions</h3>
      <p class="p-4">
        If you need help or have any other question concerning your order, 
        please email us or call us and we will
        do what we can to help.
        </p>

      <h3>Address/Correspondence</h3>
        <ul class="p-4">
          <li>P.O Box 517</li>
          <li>Pharr, TX 78577 US</li>
          <li>Phone: 1-956-587-9501</li>
          <li>Fax: 888.329.9872 Toll Free Fax</li>
          <li>info@QuiverPoint.com</li>
        </ul>
        
      <h3>Hours of Operation</h3>
      <ul class="p-4">
        <li>Sunday: Closed</li>
        <li>Monday: 8:00 AM - 6:00 PM</li>
        <li>Tuesday: 8:00 AM - 6:00 PM</li>
        <li>Wednesday: 9:00 AM - 6:00 PM</li>
        <li>Thursday: 9:00 AM - 6:00 PM</li>
        <li>Friday: 9:00 AM - 5:00 PM</li>
        <li>Saturday: 9:00 AM - 5:00 PM</li>
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
