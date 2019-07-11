<template>
  <v-app>
    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 10px auto;
  color: #2c3e50;
  height: 100%;
  background: #FFF;
}
</style>

