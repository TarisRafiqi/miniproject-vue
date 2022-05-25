<template>
  <v-app>
    <v-toolbar dark height="50">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Kalkulator BMI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Halaman 1</v-btn>
        <v-btn flat to="/about">Halaman 2</v-btn>
        <v-btn flat to="/halamanTiga">Halaman 3</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data: () => ({
    //
  }),
};
</script>
