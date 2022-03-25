<script setup></script>

<template>
  <div class="flex flex-col items-center justify-center space-y-12 min-h-screen-nonav">
    <h2 class="text-6xl tracking-tighter font-extralight">QuiverPoint History</h2>
    <div class="grid items-center justify-center grid-cols-2 bg-gray-200 rounded-lg min-h-sereen-nonav">
      <h3>Humble Beginnings</h3>
            <p> 
                In 1985, QuiverPoint began in a back bedroom, expanded to the garage,
                 then moved to the basement level of a retail complex, with no heat! From there,
                  QuiverPoint grew into a 1,400 sq. ft. retail store in Edinburg Texas.
                   A few years later, due to tremendous growth in the industry, we relocated into a
                 10,000 sq. ft. warehouse. Now we are conveniently located just off Jackson Rd, Pharr, TX
                 and only 15 miles south of Interstate 80/90, it truly is easy to access. Tucked away 
                 in the Northeast corner of Pharr, it is ideally located for all devotee of both
                 the sport and hunting aspect of archery.
            </p>
            <img class="h-64" src="../assets/about1.jpg" alt="Hello BG" />
            
      <h3>More than 250 years of experience under one roof</h3>
            <p>
                 Even though we specialize in mail order archery supplies, we offer "down home" service.
                Our knowledgeable staff has expertise in everything from self bow building to laminated
                bow building, snake skin backing, arrow making, and string making. With over 250 years
                archery experience between our staff, you name it and someone here has probably done it.
                Many of our customers like to call us and "pick our brains." We give our expertise freely;
                all it costs you is the phone call (technical advice not available on the toll free #).
                As we move into the world of technology, you'll be able to find more information, and
                answers to your questions on our Web site.
            </p>

            <img class="h-64" src="../assets/about3.jpg" alt="Hello BG" />
            
            <h3>Accomplishements and Goals</h3>
            <p>
                QuiverPointhas grown to be the biggest because we're the best.
                That's not something we take lightly or get comfortable with. 
                Our motto is, "Traditional Archery Excellence," and we strive 
                daily to further improve upon our service and products. In the 
                past few years since new ownership, we have upgraded our computer 
                hardware and software, our phone system, and our Web site. In the 
                next few years, watch for us more on the radio and television, as 
                well as your local shoots and shows. We look forward to getting out 
                more to meet our customers face-to-face. We may be "big" now, but we 
                started "small," and we truly care about each and every customer.
                If you like our service, please tell your friends. If you don't, 
                please tell us, because we do care!
            </p>
            
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
