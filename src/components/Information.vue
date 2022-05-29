<template>
<div>
    
  <v-container class="mx-5 my-5 px-5 py-5">
    <h1>Information</h1>
  <v-flex class="my-5 mr-10" xs12 md12 lg6>
    <v-expansion-panels>
    <v-expansion-panel v-for="project in projects" :key = "project.title" >
      <v-expansion-panel-header>
        {{ project.title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content >
        {{project.content}} 
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-flex>
  </v-container>

</div>
    
</template>

<script>
export default {
name:"ShortInformation",

data() {
    return {
        projects: [
          {title: 'Apa itu BMI (IMT)?', content: 'atau yang sering dikenal dengan Indeks Massa Tubuh (IMT) adalah nilai ukur untuk mengetahui status gizi seseorang berdasarkan berat dan tinggi badannya. Nilai BMI (IMT) juga dapat menjadi alat skrining awal untuk mengetahui risiko seseorang terhadap suatu penyakit. Nilai BMI (IMT) yang tinggi menandakan bahwa Anda kelebihan berat badan (overweight atau obesitas). Sementara nilai BMI (IMT) yang rendah artinya Anda kekurangan gizi dan memiliki berat badan rendah. Namun, IMT tidak bisa membedakan persen lemak tubuh dan persen massa otot.'},
          {title: 'Cara penilaian BMI (IMT)' , content: 'BMI atau IMT diukur dengan cara membandingkan berat badan dengan tinggi badan. Cara ini dapat digunakan untuk orang yang berusia di atas 18 tahun. Sementara itu, menghitung indeks massa tubuh dengan cara ini tidak berlaku untuk anak dan remaja (usia di bawah 18 tahun). Status gizi anak diukur dengan indikator berat badan menurut usia, tinggi badan menurut usia, dan berat badan menurut tinggi badan. Nilai BMI atau IMT yang tidak normal dapat menandakan Anda berisiko mengalami penyakit tertentu. Namun, menghitung IMT saja tidak cukup untuk menegakkan suatu diagnosis penyakit. Maka itu, biasanya dokter akan melakukan tes dan skrining lanjutan.'},
          {title: 'Mengapa saya harus mengukur Indeks Masa Tubuh(MT)?' , content: 'Mengetahui IMT membantu Anda untuk menjaga rasio lemak tubuh yang terkait dengan tinggi badan Anda. IMT juga memberi peringatan peluang risiko penyakit yang mungkin mengintai kesehatan Anda. IMT yang sehat umumnya mengarah pada kualitas hidup yang lebih bahagia dan lebih sehat. Sementara IMT yang tinggi berkaitan erat dengan risiko penyakit seperti diabetes tipe 2, penyakit jantung, dan tekanan darah tinggi. Mengetahui IMT berarti memberi pertimbangan bagi Anda dan tenaga kesehatan dalam mengambil keputusan mengenai kondisi kesehatan tubuh Anda.'},
          {title: 'Apakah IMT yang tinggi menimbulkan risiko kesehatan yang serius?' , content: 'IMT dapat menjadi alat skrining, tetapi bukan tolok ukur diagnosis kegemukan atau kesehatan tubuh seseorang. Untuk menentukan apakah IMT Anda menunjukkan risiko kesehatan tertentu, Anda perlu mendapatkan penilaian ke tenaga kesehatan lebih lanjut.Penilaian ini meliputi pengukuran ketebalan lipatan kulit, evaluasi diet, aktivitas fisik, serta riwayat keluarga.'},
        ]
    }
}
}
</script>



<style>
</style>