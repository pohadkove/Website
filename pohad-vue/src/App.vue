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
         <p> <v-btn variant="text"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-dizzy White-text" viewBox="0 0 16 16" >
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg> &nbsp; Pohadkove</v-btn></p>
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

 <v-alert color="secondary"> <span class="d-dark-text"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16" style="float:left;">
  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
</svg> &nbsp; Its recomended not to update pastel.css before checking if their will be anything to break your website </span></v-alert>
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