<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
<h4>{{surveys.qtitle}}</h4>
<h5>{{surveys.qid}} ) {{surveys.qname}}</h5>
       <hr>
       <h5>{{ surveys.titleBe }}</h5>
        <div class="row" >
          <div class="col" v-on:click="clickansBe('1')"><b-img rounded="circle" :src="selectedsB[0]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansBe('2')"><b-img rounded="circle" :src="selectedsB[1]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansBe('3')"><b-img rounded="circle" :src="selectedsB[2]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansBe('4')"><b-img rounded="circle" :src="selectedsB[3]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansBe('5')"><b-img rounded="circle" :src="selectedsB[4]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansBe('6')"><b-img rounded="circle" :src="selectedsB[5]" class="img-body"></b-img></div>
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
          <div class="col" v-on:click="clickansAf('1')"><b-img  rounded="circle" :src="selectedsA[0]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansAf('2')"><b-img  rounded="circle" :src="selectedsA[1]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansAf('3')"><b-img  rounded="circle" :src="selectedsA[2]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansAf('4')"><b-img  rounded="circle" :src="selectedsA[3]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansAf('5')"><b-img  rounded="circle" :src="selectedsA[4]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansAf('6')"><b-img  rounded="circle" :src="selectedsA[5]" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col"><p>1</p></div>
            <div class="col"><p>2</p></div>
            <div class="col"><p>3</p></div>
            <div class="col"><p>4</p></div>
            <div class="col"><p>5</p></div>
            <div class="col"><p>N/A</p></div>
        </div>

</div>
</template>
<script>
export default {
  props: ["surveys", "defaultans"],
  name: "qsatisfaction",
  data() {
    return {
      answered: {
        selectedB: null,
        selectedA: null,
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
      selectedsB: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ],
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
      selectedsA: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ]
    };
  },
  created() {
    if (this.defaultans) {
      this.answered = this.defaultans;
      this.clickansBe(this.defaultans.selectedB);
      this.clickansAf(this.defaultans.selectedA);
    }
  },
  methods: {
    clickansBe(ans) {
      // this.$emit(ans, yesnoanswer);
      this.answered.selectedB = ans;
      for (var i = 0; i < this.inactiveB.length; i++) {
        this.$set(this.selectedsB, i, this.inactiveB[i]);
      }
      var clicknumber = this.activeB[ans - 1];
      this.$set(this.selectedsB, ans - 1, clicknumber);
    },
    clickansAf(ans) {
      // this.$emit(ans, yesnoanswer);
      this.answered.selectedA = ans;
      for (var i = 0; i < this.inactiveA.length; i++) {
        this.$set(this.selectedsA, i, this.inactiveA[i]);
      }
      var clicknumber = this.activeA[ans - 1];
      this.$set(this.selectedsA, ans - 1, clicknumber);
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
  margin-top: 5px;
  text-align: center;
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
