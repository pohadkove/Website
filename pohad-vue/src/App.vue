<script setup>
import btn from './components/clicks-btn.vue'
import vuetify from './plugins/vuetify.js'

</script>

<style>
@import './assets/base.css';
</style>
<script>
  export default {
    data: () => ({
      reveal: false,
     
    }),
  }

</script>


<template >
<br>
<header class="Grey-text bg-dark body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         <p> <v-btn variant="text"> <v-icon large color="secondary" >mdi-bow-tie </v-icon> Pohadkove</v-btn></p>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#discord" class="mr-5 hover:text-white"><v-btn variant="text">Gon Bot</v-btn></a>
            
            <a href="#pastel" class="mr-5 hover:text-white"><v-btn variant="text">pastel.css</v-btn></a>
          </nav>

          <a href="http://localhost:3000/">
               <v-btn variant="outlined" color="secondary">Home</v-btn>
  </a>

        </div>
      </header>
<br>
  <div class="container px-60 py-24 mx-auto flex flex-col">  

 <v-alert color="secondary"> <v-icon>mdi-alert</v-icon>Its recomended not to update pastel.css before checking if their will be anything to break your website</v-alert>
 <br>

<h class="text-7xl White-text">Projects</h>
<hr>
<br>
  <v-card
  theme="dark"
    class="mx-auto"
    max-width="344"
    id="pastel"
  >
  <img src="https://pohadkove.github.io/Website/img/pastelcss-logos.jpeg">
    <v-card-text>
      <div>Pastel.css</div>
      <p class="text-h4 text--primary">
        A css framework
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="text"
        color="secondary"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Why?
          </p>
          <p>I was tired of installing a whole library just for simple things and decided to make my own lighteight library that let me do simple css actions</p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            variant="text"
            color="teal-accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
  <br>
  <hr>
  <br>
<!---->
<v-card
  theme="dark"
    class="mx-auto"
    max-width="344"
    id="discord"
  >
  <img src="https://pohadkove.github.io/Website/img/gon.png">
    <v-card-text>
      <div>Gon Bot</div>
      <p class="text-h4 text--primary">
        Simple Bot made in python for my private server
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="text"
        color="secondary"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Code
          </p>
          <p> <a href="https://github.com/pohadkove/Gon-Bot/blob/Base-Bot/gon.py" target="_blank"><v-btn>Link to code</v-btn></a></p>
          <br>
          <p> If you want the code for this bot you can find it above
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            variant="text"
            color="teal-accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
  <br>
  <hr>
  <br>
  <!---->

  </div>
  <div></div>
</template>