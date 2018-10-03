<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
    <h2>{{surveys.qid}}. {{surveys.qname}} </h2>
    <div class="row">
    <div class="col-6" v-for="ans in surveys.ans" v-bind:key="ans.option">
        <b-form-checkbox v-model="ans.selected" @change="getselected(ans.option,!ans.selected)">
                <h4>{{ans.option}}</h4>
        </b-form-checkbox>        
    </div>
    <div class="row"></div>
    <div v-if="surveys.ans[surveys.ans.length - 1].selected">
        <b-col sm="10">
            <b-form-input v-model="surveys.ans[surveys.ans.length - 1].input" v-bind:value.sync="answer" @input="$emit('update:answer', $event.target.value)" id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
        </b-col>
    </div>  
    <input type="input" v-bind:value.sync="answer" @input="$emit('update:answer', $event.target.value)" >
    </div>  
</div>

</template>
<script>
export default {
  props: ["surveys","answer",],
  name: "mchoice",
  data() {
    return {
      answers: [],
    };
  },
  created() {},
  methods: { 
      getselected: function(option, selected) {
      var answer = {option, selected};
      var index = this.surveys.ans.map(function(e) { return e.option; }).indexOf(option) // find index
      this.surveys.ans[index] = answer; // edit selected
      console.log(this.surveys.ans[index])
    }
  }
};
</script>

<style scoped>
.row {
  margin: 2% 2% 0% 2%;
}
</style>

