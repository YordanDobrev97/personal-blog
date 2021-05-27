<template>
  <div>
    <Aside />
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
body { margin: 0 !important; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
