<template>
  <v-app>
    <v-content>
      <home-view/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HomeView from './components/Header'

export default {
  name: 'App',
  components:{
HomeView
  },

  data: () => ({
    //
  }),
};
</script>
