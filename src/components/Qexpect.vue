<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">

<h6>{{surveys.qtitle}}</h6>
<h5>{{surveys.qid}}. {{surveys.qname}}</h5>
       <h6>{{ surveys.titleE }}</h6>
        <div class="row" >
            <div class="col" v-for="imgExpect in surveys.imgExpect" v-on:click="clickansE(imgExpect.optionE)" v-bind:key="imgExpect.optionE"><b-img rounded="circle" :src="imgExpect.urlE" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col" v-for="imgExpect in surveys.imgExpect" v-bind:key="imgExpect.optionE"><p>{{imgExpect.optionE}}</p></div>
        </div>
        <h6>{{ surveys.titleS }}</h6>
        <div class="row">
            <div class="col" v-for="imgSatis in surveys.imgSatis" v-on:click="clickansS(imgSatis.optionS)" v-bind:key="imgSatis.optionS"><b-img rounded="circle" :src="imgSatis.urlS" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col" v-for="imgSatis in surveys.imgSatis" v-bind:key="imgSatis.optionS"><p>{{imgSatis.optionS}}</p></div>
        </div>

</div>
</template>
<script>
export default {
  props: ["surveys","defaultans"],
  name: "qexpect",
  data() {
    return {
      answered: {
        selectedE: null,
        selectedS: null,
        qid : this.surveys.qid,
      }
    };
  },
  created() {},
  methods:{
    clickansE(ans) {
      // this.$emit(ans, yesnoanswer);
      this.answered.selectedE = ans
      console.log(this.answered) 
    },
    clickansS(ans) {
      // this.$emit(ans, yesnoanswer);
      this.answered.selectedS = ans
      console.log(this.answered) 
    },
  },
};
</script>

<style scoped>
.img-body {
  width: 10vw;
  height: 11vh;
  box-shadow: 0 0 10px #000000;
}
.col {
  margin-top: 2vh;
  text-align: center;
}
h5 {
  color: rgb(85, 53, 4);
  margin-top: 1vh;
  text-align: justify;
  text-indent: 45px;
}

</style>
