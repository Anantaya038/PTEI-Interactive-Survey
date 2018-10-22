<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
  <h2>{{surveys.qid}}. {{surveys.qname}}</h2>
    <div class="row">
      <div class="col-4" v-for="ans in surveys.ans" v-on:click="clickans(ans.option)" v-bind:key="ans.option"><b-img :class="{ active : active_el == ans.option }" rounded :src="ans.url" class="img-body"></b-img><h5>{{ans.option}}</h5></div>       
    </div>
    <b-modal v-if="answered.selected === 'Others (please specify)'" v-model="myModal" centered size="md">
    <b-form-input class="input"  v-model="answered.text" type="text" size="lg" placeholder="Please specify"></b-form-input>
    </b-modal>

</div>
</template>
<script>
export default {
  props: ["surveys","defaultans"],
  name: "qimg",
  data() {
    return {
      answered:{
        selected: null,
        text:'',
        qid : this.surveys.qid,
        myModal: false
      }
      
    };
  },
  created() {
    if(this.defaultans){
      this.answered = this.defaultans
      this.clickans(this.defaultans.selected)
    }
  },
  methods: {
    clickans(ans) {
      // this.$emit(ans, yesnoanswer);
      this.answered.selected = ans
      console.log(this.answered) 
      this.active_el = ans
      this.myModal = true
    },
  }
};
</script>

<style scoped>
.img-body {
  width: 13vw;
  height: 14vh;
}
.col-4{
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
.active{
    border:solid;
    box-shadow: 0 0 10px #000000;
}
.form-control{
    width: 45vw;
}
.input{
    width: 32vw;
}
</style>
