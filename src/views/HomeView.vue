<template>

<div>
  <div>
    <v-card color="success" class="mx-10 my-5 px-5 py-5" dark>
    <v-layout row>
      <v-flex xs6 md6 lg8>
        <v-card-title>Kalkulator BMI</v-card-title>
        <v-card-text>Kalori merupakan nilai atau satuan yang menunjukkan seberapa banyak jumlah energi yang bisa diperoleh dari makanan dan minuman. Gunakan kalkulator kalori ini untuk menentukan berapa kebutuhan kalori harian anda.</v-card-text>
        <v-card-actions>
        <v-btn class="white black--text">Hitung Sekarang</v-btn>
      </v-card-actions>
      </v-flex>

      <v-flex xs6 md6 lg4 class="my-auto">
        <v-img
          :src="require('../assets/gauge-Logo.png')"
          contain
          height="200"
          max-width="200"
          class="mx-auto"
          >
          </v-img>
      </v-flex>
    </v-layout>
  </v-card>

  <v-container style="max-width: 1000px;" class="py-10">
    <v-card flat>
      <v-card-text>
        <!-- <h3>Jenis kelamin anda?</h3> -->
        <v-form>
           <!-- <v-select
          :items="items"
          label="pilih jenis kelamin"
          outlined
          dense
          v-model="jenisKelamin"
        ></v-select> -->

          <h3>Berapa usia anda?</h3>
          <v-text-field label="Usia" outlined dense
          v-model="usia"
          ></v-text-field>

          <h3>Berapa tinggi badan anda? (cm)</h3>
          <v-text-field label="Tinggi badan" outlined dense
          v-model="tinggiBadan"
          ></v-text-field>

          <h3>Berapa berat badan anda? (kg)</h3>
          <v-text-field label="Berat badan" outlined dense
          v-model="beratBadan"
          ></v-text-field>
        </v-form>
      </v-card-text>
        <v-btn  block color="success" @click="submit">Hitung</v-btn>
    </v-card>
  </v-container>
  </div>

</div>

</template>

<script>
  export default {
    name: 'HomeView',
    data() { 
      return {
        // jenisKelamin: '',
        usia: '',
        tinggiBadan: '',
        beratBadan: ''
      }
    },

    methods: {
      submit() {
        console.log(this.jenisKelamin, this.usia, this.tinggiBadan, this.beratBadan)
      }
    }
    
  }
  
</script>
