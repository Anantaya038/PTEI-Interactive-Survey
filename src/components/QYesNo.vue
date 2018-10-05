<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
    <h1>{{surveys.qid}}. {{surveys.qname}}</h1>
    <div class="row">
        <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option">
            <div in surveys.ans v-on:click="clickans(ans.option)"><b-img  rounded="circle" :src="ans.url" class="img-body"></b-img></div>
        </div>
        <div class="col-6"></div>
        <div class="col-6" v-if="answered.selected === '2'">   
            <b-col sm="7">
            <b-form-input class="row" v-model="answered.text" id="input-small" size="sm" type="text" placeholder="Enter your answer"></b-form-input>
            </b-col>
        </div>    
    </div>
</div>
</template>
<script>
export default {
    props:["surveys","answer",],
    name: 'qyesno',
    data (){
      return{     
          answered: {
              selected: null,
              text: '',
              qid : this.surveys.qid,
          },
      }
    },
    methods: {
        clickans(ans){
            // this.$emit(ans, yesnoanswer);
            this.answered.selected = ans
            console.log(this.answered)       
        }   
    },
     created() {
    if(this.defaultans){
      this.answered = this.defaultans
    }
  },
}
</script>

<style scoped>
.img-body{
    width:14vw; 
    height:15vh;
    box-shadow: 0 0 10px #000000;
    text-align: center;
}
.col-6{
    text-align: center;
}
.row{
    margin-top:8vh;
}
</style>



