<script>
const items = Object.freeze([
  {
  id: 7,
  name: "Mountain Mesa Longbow",
  price: 299.99,
  image: "https://www.3riversarchery.com/mm5/graphics/00000001/868401x_229x500.jpg"
  },
  {
    id: 8,
    name:"Bear 64 AuSable LongBow",
    price: 599.99,
    image: "https://www.3riversarchery.com/mm5/graphics/00000001/2095x_125x500.jpg"
  },
  {
    id: 9,
    name: "Prologue Wood Longbow",
    price: 229.99,
    image: "https://www.3riversarchery.com/mm5/graphics/00000001/85904x_101x500.jpg"
  },
  {
    id: 10,
    name: "Carin 62 Takedown Recurve",
    price: 159.99,
    image: "https://www.3riversarchery.com/mm5/graphics/00000001/868453x_184x500.jpg"
  },
  {
    id: 11,
    name: "Bear Super Mag 48 Recurve",
    price: 399.99,
    image: "https://www.3riversarchery.com/mm5/graphics/00000001/20341x_250x500.jpg"
  },
  {
    id: 12, 
    name: "Fire Stick 50 Recurve Bow",
    price: 529.99,
    image: "https://www.3riversarchery.com/mm5/graphics/00000001/8689x_190x500_2.jpg"
  },
]);
export default{
  name:"Traditional",
  data(){
    return{
      items,
      cart:[],
    };
  },
  methods: {
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItem = this.cart.find(({ id }) => id === itemId);
      return Boolean(cartItem);
    },
    addToCart(itemId) {
      const item = this.items.find(({ id }) => id === itemId);
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
};

</script>


<template>
  <div class="flex flex-col items-center justify-center sapce-y-12 min-h-screen-nonav">
   <h2 class="text-6xl tracking-tighter font-extralight">Traditional Bows</h2>
   <div v-for="item of items" :key="item.id" class="grid items-center justify-center grid-rows-2 m-3 bg-gray-300 rounded-lg min-h-sereen-nonav">
   <img :src="item.image" class="h-20"/>
   <h3>{{item.name}}</h3>
   <p>${{item.price}}</p>
   <button @click="addToCart(item.id)" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300 add">add to cart</button>
  <button @click="removeFromCart(item.id)" v-if="isInCart(item.id)" class="text-white bg-yellow-500 hover:cursor-pointer hover:bg-yellow-300">remove from cart</button>
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