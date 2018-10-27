<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
<h4>{{surveys.qtitle}}</h4>
<carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false">
    <slide v-for="(qsub,index) in surveys.qsub" v-bind:key="(qsub.option,index)">
<h5>{{surveys.qid}} ) {{qsub.option}}</h5>
       <hr>
       <h5>{{ surveys.titleBe }}</h5>
        <div class="row" >
          <div class="col" v-on:click="clickansBe(index,1)"><b-img rounded="circle" :src="selectedsB[index][0]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansBe(index,2)"><b-img rounded="circle" :src="selectedsB[index][1]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansBe(index,3)"><b-img rounded="circle" :src="selectedsB[index][2]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansBe(index,4)"><b-img rounded="circle" :src="selectedsB[index][3]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansBe(index,5)"><b-img rounded="circle" :src="selectedsB[index][4]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansBe(index,6)"><b-img rounded="circle" :src="selectedsB[index][5]" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col"><p>1</p></div>
            <div class="col"><p>2</p></div>
            <div class="col"><p>3</p></div>
            <div class="col"><p>4</p></div>
            <div class="col"><p>5</p></div>
            <div class="col"><p>N/A</p></div>
        </div>
        <hr>
        <h5>{{ surveys.titleAf }}</h5>
       <div class="row" >
          <div class="col" v-on:click="clickansAf(index,1)"><b-img  rounded="circle" :src="selectedsA[index][0]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansAf(index,2)"><b-img  rounded="circle" :src="selectedsA[index][1]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansAf(index,3)"><b-img  rounded="circle" :src="selectedsA[index][2]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansAf(index,4)"><b-img  rounded="circle" :src="selectedsA[index][3]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansAf(index,5)"><b-img  rounded="circle" :src="selectedsA[index][4]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansAf(index,6)"><b-img  rounded="circle" :src="selectedsA[index][5]" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col"><p>1</p></div>
            <div class="col"><p>2</p></div>
            <div class="col"><p>3</p></div>
            <div class="col"><p>4</p></div>
            <div class="col"><p>5</p></div>
            <div class="col"><p>N/A</p></div>
        </div>
  </slide>
  </carousel>
</div>
</template>
<script>
export default {
  props: ["surveys", "defaultans"],
  name: "qsatisfaction",
  data() {
    return {
      answered: {
        // selectedB: null,
        // selectedA: null,
        selectedB:[],
        selectedA:[],
        qid: this.surveys.qid
      },
      activeB: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1.png?alt=media&token=01541849-2679-4260-aed5-cf721cb1e132",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2.png?alt=media&token=54fbfe39-857a-4c1c-a1dd-698965e8b143",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3.png?alt=media&token=a976b79e-b34c-47cf-b8d7-fd328892b1a4",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4.png?alt=media&token=11a37d8d-0256-47ab-966e-6bda2cf30f37",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5.png?alt=media&token=04f67b49-3d77-4ff6-8a81-ceed80489509",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna.png?alt=media&token=4bd6e651-824d-4157-a665-b2b6c41912a0"
      ],
      inactiveB: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ],
      selectedsB: [],
      activeA: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1.png?alt=media&token=01541849-2679-4260-aed5-cf721cb1e132",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2.png?alt=media&token=54fbfe39-857a-4c1c-a1dd-698965e8b143",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3.png?alt=media&token=a976b79e-b34c-47cf-b8d7-fd328892b1a4",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4.png?alt=media&token=11a37d8d-0256-47ab-966e-6bda2cf30f37",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5.png?alt=media&token=04f67b49-3d77-4ff6-8a81-ceed80489509",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna.png?alt=media&token=4bd6e651-824d-4157-a665-b2b6c41912a0"
      ],
      inactiveA: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ],
      selectedsA: []
    };
  },
  created() {
      var initselectedB = [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ]
    var initselectedA = [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ]
      for(var i=0;i<=this.surveys.qsub.length;i++){
      this.selectedsB[i] = initselectedB;
      this.selectedsA[i] = initselectedA;
    }
    if (this.defaultans) {
      
      this.answered = this.defaultans;
      this.clickansBe(this.defaultans.selectedB);
      this.clickansAf(this.defaultans.selectedA);
    }
  },
  methods: {
    clickansBe(index,ans) {
      this.answered.selectedB[index] = ans;
      var newB = []
      for (var i = 0; i < this.inactiveB.length; i++) {
        newB[i] = this.inactiveB[i]
      }
      this.$set(this.selectedsB, index, newB);

      var clicknumber = this.activeB[ans - 1];
      newB[ans - 1] = clicknumber
      this.$set(this.selectedsB, index, newB);
      console.log(clicknumber);
      
    },
    clickansAf(index,ans) {
      this.answered.selectedA[index] = ans;
      var newA = []
      for (var i = 0; i < this.inactiveA.length; i++) {
         newA[i] = this.inactiveA[i]
      }
      this.$set(this.selectedsA, index, newA);

      var clicknumber = this.activeA[ans - 1];
       newA[ans - 1] = clicknumber
      this.$set(this.selectedsA, index, newA);
      console.log(clicknumber);
    }
  }
};
</script>

<style scoped>
.img-body {
  width: 10vw;
  height: 11vh;
  box-shadow: 0 0 10px #000000;
}
.col {
  margin-top: 1px;
  text-align: center;
}
.h3 {
  color: rgb(85, 53, 4);
  margin-top: 1vh;
  text-align: justify;
  text-indent: 45px;
}
.hr {
  border-top: 10px solid rgba(0, 0, 0, 0.1);
  size: 6;
}
</style>
