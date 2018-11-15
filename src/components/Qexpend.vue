<template>
<div style="margin: 0% 3% 0% 3%; min-height: 72vh; max-height: 65vh;">
    <b-card bg-variant="secondary"><h1>{{surveys.qid}}. {{surveys.qname}}</h1></b-card>
    <div class="row">
    <div class="col-sm-6" v-for="(qsub,index) in surveys.qsub" v-bind:key="qsub.option">
        <b-form-checkbox :value="qsub.option" v-model="answered.selectedExpend"><p>{{qsub.option}}</p>  </b-form-checkbox> 
        <b-input-group class="input" size="sm" prepend="$" append="US Dollar or USD">
         <b-form-input type="number" v-model="answered.value[index]" @input="test"></b-form-input>
        </b-input-group>
    </div>
    </div>
    </div>

</template>
<script>

export default {
    props:['surveys','defaultans'],
    name: 'qexpend',
    data (){
      return{   
    answered:{
        selectedExpend:[],
        value:[],
        qid : this.surveys.qid,
      }         
      }
    },
     created() {
    if(this.defaultans){
      this.answered = this.defaultans
      console.log(this.answered)
    }
  },methods:{
      test: function(){
          this.text.push(this.value)
          console.log(this.surveys.ans)
      }
  }
}
</script>

<style scoped>
.input{ 
    width: 30vw;
}
.col-sm-6{
    margin-top: 2vh;
}
p{
  color: black;
  font-size: 3vh;
}
</style>
