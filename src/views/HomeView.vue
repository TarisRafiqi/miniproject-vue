<template>

<div>
  <div>
      <v-card elevation="3" color="success" class="mx-10 my-5 px-5 py-5" dark>
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

    
      <v-container style="max-width: 800px;">
        <v-card  flat >
        <v-card-text>
          <v-form>
            <h3>Berapa usia anda?</h3>
            <v-text-field label="Usia" outlined dense
            v-model="usia" type="number"
            ></v-text-field>

            <h3>Berapa tinggi badan anda? (cm)</h3>
            <v-text-field label="Tinggi badan" outlined dense
            v-model="tinggiBadan" type="number"
            ></v-text-field>

            <h3>Berapa berat badan anda? (kg)</h3>
            <v-text-field label="Berat badan" outlined dense
            v-model="beratBadan" type="number"
            ></v-text-field>
          </v-form>
        </v-card-text>
          <v-btn  block color="success" @click="calculate"  >Hitung</v-btn>
      </v-card>
      </v-container>

    
  </div>
    <v-card elevation="3" class="mx-10 my-5 px-5 py-5">
      <v-layout-column>
        <v-flex xs12 md12 lg12>
          <v-card-title class="justify-center">
            <h3>{{titleBMI}}</h3>
            </v-card-title>
          <v-card-text class="text-center">
            <p>{{kondisi}}</p>
            </v-card-text>
        </v-flex>
      </v-layout-column>
    </v-card>
    
    <div>
      <Information/>
  </div>
</div>

</template>

<script>
import Information from '../components/Information'

  export default {
    name: 'HomeView',
    components: {
      Information
    },

    data() { 
      return {
        usia: '',
        tinggiBadan: '',
        beratBadan: '',
        bmi: '',
        titleBMI: 'Hitung BMI Anda',
        kondisi: ''
        
      }
    },

    methods: {
      calculate() {
      let tinggiBadan = parseInt(this.tinggiBadan) / 100
      let beratBadan = parseInt(this.beratBadan)
      this.bmi = (beratBadan / (tinggiBadan * tinggiBadan))
      this.titleBMI = "BMI anda adalah " + this.bmi

      if (this.bmi < 18.5) {
        return this.kondisi = ' Nilai IMT ( Index Masa Tubuh ) / BMI (Body Mass Index) di bawah 18,5 menandakan berat badan Anda kurang (underweight). Status anda adalah "Kekurangan Berat Badan"'
      } 
      else if (this.bmi >= 18.5 && this.bmi < 25) {
        return this.kondisi = ' Status anda adalah "Berat Badan Normal"'
      }
      else if (this.bmi >= 25 && this.bmi < 30) {
        return this.kondisi = ' Status anda adalah "Kelebihan Berat Badan"'
      }
      else if (this.bmi > 29.9) {
        return this.kondisi = ' Status anda adalah "Kegemukan (Obesitas)"'
      }
      
    },
    
    },
    
  }
  
</script>
