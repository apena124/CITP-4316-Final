<script setup>
import useAuth from '../composable/useAuth'
</script>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    getCart() {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
  beforeMount() {
    this.getCart();
  },
};

</script>


<template>
  <div class="flex flex-col items-center justify-center sapce-y-12 min-h-screen-nonav">
    <h2 class="text-6xl tracking-tighter font-extralight">My Cart</h2>
    <div v-for="(c, index) of cart" :key="c.id" class="grid items-center justify-center grid-rows-2 m-3 bg-gray-300 rounded-lg min-h-sereen-nonav">
      
      <h3>{{c.name}}</h3>
      <p>${{c.price}}</p>
      <button @click="removeFromCart(index)" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300 add">Remove From Cart</button>

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