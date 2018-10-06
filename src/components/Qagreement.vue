<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
       <h1>{{surveys.qtitle}}</h1>       
       <hr>
       <h2>{{surveys.qid}} ) {{surveys.qname}}</h2>   
        <div class="row">
            <div class="col" v-on:click="clickans(imgAgree.optionA)" v-for="imgAgree in surveys.imgAgree" v-bind:key="imgAgree.optionA"><b-img rounded="circle" :src="imgAgree.urlA" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col" v-for="imgAgree in surveys.imgAgree" v-bind:key="imgAgree.optionA"><h5>{{imgAgree.optionA}}</h5></div>
        </div>
</div>
</template>
<script>

export default {
    props:['surveys','defaultans'],
    name: 'qagreement',
    data (){
      return{   
           answered: {
               selected: [],
               qid: this.surveys.qid
           },             
      }
    },
     created() {
    if(this.defaultans){
      this.answered = this.defaultans
    }
  },
    methods: {
        clickans(ans) {
      // this.$emit(ans, yesnoanswer);
       this.answered.selected = ans
        console.log(this.answered)      
    }
    }
}
</script>

<style scoped>
.img-body{
    width:12vw; 
    height:13vh;
    box-shadow: 0 0 10px #000000;
}
.col{
    margin-top:12px;
    text-align: center;
    
}
.row{
    margin-top:1vh;
    
}
h2{
    margin-top:3vh;
    text-align: justify;
    text-indent: 45px;
    color: #977400
}
.hr{
    border-top: 10px solid rgba(0, 0, 0, 0.1);
    size: 6;
}
</style>
