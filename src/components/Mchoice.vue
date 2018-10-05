<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
    <h2>{{surveys.qid}}. {{surveys.qname}} </h2>
    <div class="row">
    <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option">
        <b-form-checkbox :key="ans.option" :value="ans.option" v-model="answered.selected">
                <h4>{{ans.option}}</h4>
        </b-form-checkbox>        
    </div>
    <div class="row"></div>
    <div v-if="answered.selected.indexOf('Others (please specify)') != -1">  
        <b-col sm="10">
            <b-form-input v-model="answered.text" id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
        </b-col>
    </div>  
    </div>  
</div>

</template>
<script>
export default {
  props: ["surveys","answer",],
  name: "mchoice",
  data() {
    return {
      answered: {
        selected: [],
        text: ''
      },
    };
  },
   created() {
    if(this.defaultans){
      this.answered = this.defaultans
    }
  },
  methods:{
   
  }
};
</script>

<style scoped>
.row {
  margin: 2% 2% 0% 2%;
}
</style>

