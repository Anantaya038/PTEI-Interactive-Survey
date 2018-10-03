<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
  <h4>{{surveys.qtitle}}</h4>
    <h3>{{surveys.qid}}) {{surveys.qname}}</h3>
    <hr>
    <carousel>
      <slide v-for="ans in surveys.ans" v-bind:key="ans.ansname">
      <b-form-checkbox v-model="ans.selected" @change="getselected(ans.ansname,!ans.selected)">
        <h4>{{ans.ansname}}</h4>
      </b-form-checkbox> 
      <div v-if="ans.selected">
        <b-form-input v-model="surveys.ans[surveys.ans.length - 1].input" type="text" placeholder="Enter your answer"></b-form-input>
      </div>          
      </slide>
    </carousel>
</div>
</template>
<script>
export default {
  props: ["surveys","answer"],
  name: "qhours",
  data() {
    return {
      // answer:[],
      textinput: ''
    };
  },
  created() {},
  methods:{
      getselected: function(ansname, selected) {
      var answer = {ansname, selected};
      var index = this.surveys.ans.map(function(e) { return e.ansname; }).indexOf(ansname) // find index
      this.surveys.ans[index] = answer; // edit selected
      console.log(this.surveys.ans[index])
    }
  },
  components: {}
};
</script>

<style scoped>
.col {
  margin-top: 12px;
}
.h3 {
  color: rgb(85, 53, 4);
  margin-top: 3vh;
  text-align: justify;
  text-indent: 45px;
}
.hr {
  border-top: 10px solid rgba(0, 0, 0, 0.1);
  size: 6;
}
</style>
