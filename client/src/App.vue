<template>
  <div>
    <Aside />
    <router-view></router-view>
  </div>
</template>

<script>
import Aside from './components/Aside'

export default {
  name: 'App',
  components: {
    Aside
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');

body, h1 { margin: 0 !important; }

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
