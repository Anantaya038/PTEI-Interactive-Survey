<template>
<div style="margin: 0% 3% 0% 3%; min-height: 68vh; max-height: 65vh;">
    <b-card bg-variant="secondary"><h1>{{surveys.qid}}. {{surveys.qname}}</h1></b-card>
    <div class="row">
    <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option">
        <b-form-checkbox :key="ans.option" :value="ans.option" v-model="answered.selectedChoice">
                <p>{{ans.option}}</p>
        </b-form-checkbox>        
    </div>
    <div class="row"></div>
    <!-- <div v-if="answered.selectedChoice.indexOf('Others (please specify)') != -1">   -->
        <b-modal v-if="answered.selectedChoice.indexOf('Others (please specify)')!= -1" v-model="myModal"  centered size="md">
    <b-form-input class="input"  v-model="answered.text" type="text" size="lg" placeholder="Please specify"></b-form-input>
    </b-modal>
    <!-- </div>   -->
    </div>  
</div>

</template>
<script>
export default {
  props: ["surveys","defaultans",],
  name: "mchoice",
  data() {
    return {
      answered: {
        text: '',
        selectedChoice:[],
        qid: this.surveys.qid,
        myModal: false,
        indexOf: ''
      },
    };
  },
   created() {
    if(this.defaultans){
      this.answered = this.defaultans   
      this.myModal = true   
    }
  },
  methods:{
       
  }
};
</script>

<style scoped>
.row {
  margin: 2% 0% 0% 2%;
}
.bg{
background: linear-gradient(to bottom, #202020 0%, #4b4b4b 100%);
box-shadow: 0 2vw 3vw rgba(0,0,0,0.25), 0 2vw 10vw rgba(0,0,0,0.22);
}
p{
  color: black;
  font-size: 3vh;
  font-weight: bold;
}
</style>

