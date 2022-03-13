<script setup>
import btn from './components/clicks-btn.vue'
import vuetify from './plugins/vuetify.js'

</script>

<style>
@import './assets/base.css';
</style>
<script>

</script>


<template>
<br>
<header class="text-gray-400 bg-dark body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         <p> <v-btn variant="text"> <v-icon large color="" >mdi-bow-tie </v-icon> Pohadkove</v-btn></p>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="Discord.html" class="mr-5 hover:text-white">Gon Bot</a>
            
            <a href="pastel.html" class="mr-5 hover:text-white">pastel.css</a>
          </nav>

          <a href="http://localhost:3000/">
               <v-btn variant="outlined">Home</v-btn>
  </a>

        </div>
      </header>
<br>

    
</template>