<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
<h4>{{surveys.qtitle}}</h4>
<h5>{{surveys.qid}} ) {{surveys.qname}}</h5>
       <hr>
       <h5>{{ surveys.titleBe }}</h5>
        <div class="row">
            <div class="col" v-for="img in surveys.img" v-bind:key="img.url">
                 <div in surveys.img v-on:click="clickansBe(img.option)">
                <b-img rounded="circle" :src="img.url" class="img-body"></b-img></div></div>
        </div>
        <div class="row">
            <div class="col" v-for="img in surveys.img" v-bind:key="img.option"><p>{{img.option}}</p></div>
        </div>
        <hr>
        <h5>{{ surveys.titleAf }}</h5>
        <div class="row">
            <div class="col" v-for="img in surveys.img" v-bind:key="img.url">
                 <div in surveys.img v-on:click="clickansAf(img.option)">
                <b-img rounded="circle" :src="img.url" class="img-body"></b-img></div></div>
        </div>
        <div class="row">
            <div class="col" v-for="img in surveys.img" v-bind:key="img.option"><p>{{img.option}}</p></div>
        </div>

</div>
</template>
<script>

export default {
    props:['surveys','defaultans'],
    name: 'qsatisfaction',
    data (){
      return{     
          answered: {
              selectedB : null,
              selectedA : null,
              qid : this.surveys.qid,

          }           
      }
    },
     created() {
    if(this.defaultans){
      this.answered = this.defaultans
    }
  },
    methods: {
          clickansBe(ans){
            // this.$emit(ans, yesnoanswer);
            this.answered.selectedB = ans
            console.log(this.answered)       
        },
        clickansAf(ans){
            // this.$emit(ans, yesnoanswer);
            this.answered.selectedA = ans
            console.log(this.answered)       
        }    
    }
}
</script>

<style scoped>
.img-body{
    width:10vw; 
    height:11vh;
    box-shadow: 0 0 10px #000000;
}
.col{
    margin-top:5px;
    text-align: center;
    
}
.h3{
    color: rgb(85, 53, 4);
    margin-top:3vh;
    text-align: justify;
    text-indent: 45px;
}
.hr{
    border-top: 10px solid rgba(0, 0, 0, 0.1);
    size: 6;
}
</style>
