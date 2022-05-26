<template>
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
</template>

<script>
export default {
name:"HeaderComp"
}
</script>

<style>

</style>