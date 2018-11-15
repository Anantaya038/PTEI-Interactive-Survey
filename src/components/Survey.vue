<template>
        <div class="container" style="margin: auto; margin-top: 25vh;background-color: #193C6C;">
            <router-link to="/new">
            <div class="img">
                <b-img :src="require('../photo/page1.png')"></b-img>
            </div>
            </router-link>   
            <div class="name">
                <h1><strong>PTEI Interactive Survey</strong></h1> 
            </div>
            <b-modal ref="modal" body-class="hhhh" centered hide-footer hide-header hide-header-close  title="">
            <pulse-loader></pulse-loader>
        </b-modal>
        </div>
</template>
<script>
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
    components: {
        PulseLoader,
    },
async mounted() {
    this.$refs.modal.show();
    setTimeout(() => {
      this.$refs.modal.hide();
      this.$router.push({path:'/login'})
    }, 2500);
     
},
}
</script>
<style>
.container{
    text-align: center;
}
.name{
    margin-top: 10vh;
}
.hhhh {
  max-height: 0px;
  padding: 0px;
}
</style>

