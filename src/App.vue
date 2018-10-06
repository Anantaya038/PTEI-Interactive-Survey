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
@import url('https://fonts.googleapis.com/css?family=Paytone+One');
#app {
 font-family: 'Paytone One', sans-serif;
  color: #000000;
  background-color: #00CC99;
 
}
</style>
