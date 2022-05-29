<template>
  <v-app>
    <v-main>
      <Header/>
      <router-view/>
      <Information/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Information from './components/Information'

export default {
  name: 'App',
  components:{
    Header,
    Information
  },

  data: () => ({
    //
  }),
};
</script>
