<template>

  <v-card color="#8BC34A" class="mx-10 my-5 px-5 py-5" dark>
    

    <v-layout row>
      <v-flex xs6 md6 lg8>
        <v-card-title>Kalkulator BMI</v-card-title>
        <v-card-text>Kalori merupakan nilai atau satuan yang menunjukkan seberapa banyak jumlah energi yang bisa diperoleh dari makanan dan minuman. Gunakan kalkulator kalori ini untuk menentukan berapa kebutuhan kalori harian anda.</v-card-text>

        <v-card-actions>
        <v-btn class="white black--text">Hitung Sekarang</v-btn>
      </v-card-actions>

      </v-flex>

      <v-flex xs6 md6 lg4>
        <v-img
          :src="require('../assets/gauge-Logo.png')"
          contain
          height="200">
          </v-img>
      </v-flex>

    </v-layout>
  </v-card>


</template>

<script>
  export default {
    name: 'HomeView',
  }
</script>
