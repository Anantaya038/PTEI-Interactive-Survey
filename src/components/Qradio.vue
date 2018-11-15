<template>
<div style="margin: 0% 3% 0% 3%; min-height: 68vh; max-height: 65vh;">
    <b-card bg-variant="secondary"><h1>{{surveys.qid}}. {{surveys.qname}} </h1></b-card>
    <div class="row">
    <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option">
        <b-form-checkbox v-model="answered.selectedRadio" :key="ans.option" :value="ans.option" name="radioSubComponent">
                <p>{{ans.option}}</p>
        </b-form-checkbox>        
    </div>
    <div class="row"></div>
    <!-- <div v-if="answered.selectedRadio.indexOf('Others (please specify)') != -1">  
        <b-col sm="10">
            <b-form-input v-model="answered.text" id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
        </b-col>
    </div>   -->
    <b-modal v-if="answered.selectedRadio.indexOf('Others (please specify)') != -1" v-model="myModal" centered size="md">
    <b-form-input class="input"  v-model="answered.text" type="text" size="lg" placeholder="Please specify"></b-form-input>
    </b-modal>
    </div>  
</div>
</template>
<script>
export default {
  props: ["surveys","defaultans",],
  name: "qradio",
  data() {
    return {
      answered: {
        text: '',
        selectedRadio:'',
        qid: this.surveys.qid,
        myModal: false
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
margin: 5% 0% 0% 2%;

}
p{
  color: black;
  font-size: 3.5vh;
}
</style>

