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
  },
  beforeMount() {
    if (this.opertorEmail == null) {
      this.$router.push({path: '/survey'})
    } else {
      this.$router.push({path: '/new'})
    }
  },
  computed: {
    opertorEmail: () => window.localStorage.getItem("operatorEmail")
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');
#app {
 font-family: 'Lato', sans-serif;
  color: #000000;
  background-color: #193C6C;
}
</style>
