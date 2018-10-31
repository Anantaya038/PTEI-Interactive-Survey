<template>
  <div id="app">    
    <router-view></router-view>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'app',
  components: {
    MyComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik');
#app {
 font-family: 'Rubik', sans-serif;
  color: #000000;
  background-color: #00CC99;
 
}
</style>
