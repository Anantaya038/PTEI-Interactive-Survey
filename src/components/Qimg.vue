<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
       <h2>{{surveys.qid}}. {{surveys.qname}}</h2>
        <div class="row">
        <div class="col-6" v-on:click="clickans(ans.option)" v-for="ans in surveys.ans" v-bind:key="ans.option"><b-img rounded :src="ans.url" class="img-body"></b-img><h5>{{ans.option}}</h5></div>
        
</div>
  <div v-if="ansDefault[0] === 'Others (please specify)'"><b-form-input v-model="textinput" @change="edit(textinput)" id="input-small" size="sm" type="text" placeholder="Enter your answer"></b-form-input>
  </div>
</div>
</template>
<script>
export default {
  props: ["surveys"],
  name: "qimg",
  data() {
    return {
      ansDefault: '',
      textinput:''
    };
  },
  created() {},
  methods: {
    clickans(ans) {
      // this.$emit(ans, yesnoanswer);
      this.ansDefault = [];
      this.ansDefault.push(ans);
      console.log(this.ansDefault);
    },
    edit: function(data) {
      this.ansDefault.push(data);
      console.log(this.ansDefault);
    }
  }
};
</script>

<style scoped>
.img-body {
  width: 13vw;
  height: 14vh;
}
.col-6 {
  margin-top: 5px;
  text-align: center;
}
.row {
  margin-top: 1vh;
}
.form-control {
    text-align: center;
    width: 25vw;
    height: 5vh;
}
</style>
