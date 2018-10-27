<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
    <h2>{{surveys.qid}}. {{surveys.qname}}</h2>
    <hr>
    <div class="row">
    <div class="col-sm-6" v-for="(qsub,index) in surveys.qsub" v-bind:key="qsub.option">
        <b-form-checkbox :key="qsub.option" :value="qsub.option" v-model="answered.selected"><h5>{{qsub.option}}</h5>  </b-form-checkbox> 
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
        selected:[],
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
.col{
    margin-top:12px;
    text-align: center;
    
}
.h2{
    color: rgb(85, 53, 4);
    margin-top:3vh;
    text-align: justify;
    text-indent: 45px;
}
.hr{
    border-top: 10px solid rgba(0, 0, 0, 0.1);
    size: 6;
}
.input{ 
    width: 30vw;
}
</style>
