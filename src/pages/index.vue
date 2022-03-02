<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-12 min-h-screen-nonav"
  >
    <h2 v-if="!isAuthenticated" class="text-6xl tracking-tighter font-extralight">
      Welcome To Quiver Point
    </h2>
    <div class="flex flex-col items-center justify-center space-y-12 bg-gray-200 min-h-screen-nonav">
    <p>
            Since 1983, QuiverPoint has been the leader in this niche market. Starting from back bedroom of a small home in Edinburg Texas,
            it has grown to a 10,000 sq. ft. warehosue in the rural town. Many companies have come and gone over the years, but QuiverPoint
            has endured and serviced not only the retail market, but worldwide dealer network as well.
        </p>
        <img class="h-64" src="../assets/home1.jpg" alt="Hello BG" />
        <p>
        Those that carry the torch, the fire of traditional archery, include many fine people and companies. QuiverPoint takes great pride
            in being among these leaders as we strive for traditional archery excellence. As the worlds largest traditional archery supplier
            we are constantly searching for new traditional archery products as well as reproducin old favorites.
        </p>
        <img class="h-64" src="../assets/home2.jpg" alt="Hello BG" />
      </div>
  </div>
</template>
