<template>
  <v-app theme="dark">
   <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://github.com/pohadkove/Website/blob/main/img/pastelcss-logos.jpeg"
            title="pastel.css"
            subtitle=""
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-gesture-tap-button" title="Buttons" value="btn"></v-list-item>
          <v-list-item prepend-icon="mdi-page-layout-sidebar-right" title="Side-bar" value="bar"></v-list-item>
          <v-list-item prepend-icon="mdi-card-text" title="Text" value="text"></v-list-item>
          <v-list-item prepend-icon="mdi-format-color-fill" title="colors" value="color"></v-list-item>
          <v-list-item prepend-icon="mdi-arrange-send-backward" title="background" value="bg"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div class="cont">
      <h1>Buttons</h1>
      <h2>Normal</h2>
       <button class="d-primary-btn">Hello</button>
       <br>
       <br>
       <!---->
         <v-card
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
    <v-card-header>
      <div>
        <div class="text-overline mb-1">
          Buttons
        </div>
        <div class="text-h6 mb-1">
          Normal Buttons
        </div>
        <div class="text-caption">&lt;button class="d-primary-btn"></div>
      </div>
    </v-card-header>

    <v-card-actions>
    </v-card-actions>
  </v-card>
       <!---->
       <br>
       <br>
       <h2>outlined/sharp</h2>
       <button class="d-primary-btn-outline">Hello</button>
       <br>
       <br>
              <!---->
         <v-card
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
    <v-card-header>
      <div>
        <div class="text-overline mb-1">
          Buttons
        </div>
        <div class="text-h6 mb-1">
          Outline/Sharp Buttons
        </div>
        <div class="text-caption">&lt;button class="d-primary-btn-outline"></div>
      </div>
    </v-card-header>

    <v-card-actions>
    </v-card-actions>
  </v-card>
       <!---->
       <br>
       <br>
       <h2>pill</h2>
       <button class="d-primary-btn-pill">Hello</button>
       <br>
       <br>
              <!---->
         <v-card
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
    <v-card-header>
      <div>
        <div class="text-overline mb-1">
          Buttons
        </div>
        <div class="text-h6 mb-1">
          Pill Buttons
        </div>
        <div class="text-caption">&lt;button class="d-primary-btn-pill"></div>
      </div>
    </v-card-header>

    <v-card-actions>
    </v-card-actions>
  </v-card>
       <!---->
       <br>
       <br>
       <h2>with ripple</h2>
       <button class="d-primary-btn ripple">Hello</button>
       <br>
       <br>
              <!---->
         <v-card
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
    <v-card-header>
      <div>
        <div class="text-overline mb-1">
          Buttons
        </div>
        <div class="text-h6 mb-1">
          Ripple Buttons
        </div>
        <div class="text-caption">&lt;button class="d-primary-btn ripple"></div>
      </div>
    </v-card-header>

    <v-card-actions>
    </v-card-actions>
  </v-card>
       <!---->  <!---->  <!---->  <!---->  <!---->  <!---->  <!---->  <!---->  <!---->  <!---->  <!---->  <!---->  <!---->  <!---->  <!---->  <!---->
       <h1>Side bar</h1>
      



      </div>
      <v-main style="height: 2500px"></v-main>
    </v-layout>
  </v-card>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

      data: () => ({
     
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
 
});
</script>
<style>
.cont{
   margin-left: 100px;
}
</style>
