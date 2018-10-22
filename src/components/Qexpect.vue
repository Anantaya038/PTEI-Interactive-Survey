<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">

<h6>{{surveys.qtitle}}</h6>
<h5>{{surveys.qid}}. {{surveys.qname}}</h5>
       <h6>{{ surveys.titleE }}</h6>
        <div class="row" >
          <div class="col" v-on:click="clickansE('1')"><b-img rounded="circle" :src="selectedsE[0]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansE('2')"><b-img rounded="circle" :src="selectedsE[1]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansE('3')"><b-img rounded="circle" :src="selectedsE[2]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansE('4')"><b-img rounded="circle" :src="selectedsE[3]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansE('5')"><b-img rounded="circle" :src="selectedsE[4]" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col"><p>Not important</p></div>
            <div class="col"><p>Of little importance</p></div>
            <div class="col"><p>Of average importance</p></div>
            <div class="col"><p>Very Important</p></div>
            <div class="col"><p>Absolutely essential</p></div>
        </div>
        <h6>{{ surveys.titleS }}</h6>
        <div class="row" >
          <div class="col" v-on:click="clickansS('1')"><b-img rounded="circle" :src="selected[0]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansS('2')"><b-img rounded="circle" :src="selected[1]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansS('3')"><b-img rounded="circle" :src="selected[2]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansS('4')"><b-img rounded="circle" :src="selected[3]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansS('5')"><b-img rounded="circle" :src="selected[4]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansS('6')"><b-img rounded="circle" :src="selected[5]" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col"><p>Very dissatisfied</p></div>
            <div class="col"><p>Slightly dissatisfied</p></div>
            <div class="col"><p>Neutral</p></div>
            <div class="col"><p>Moderately satisfied</p></div>
            <div class="col"><p>Very satisfied</p></div>
            <div class="col"><p>N/A</p></div>
        </div>

</div>
</template>
<script>
export default {
  props: ["surveys", "defaultans"],
  name: "qexpect",
  data() {
    return {
      answered: {
        selectedE: null,
        selectedS: null,
        qid: this.surveys.qid
      },
      active: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs1.png?alt=media&token=1d0c8c03-afff-42e5-9755-4e64bcb9bc9e",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs2.png?alt=media&token=0096b88f-cae0-4f6a-a27d-a041153b8f95",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs3.png?alt=media&token=66e892c7-7d59-46fc-9d51-745a3a3b9d93",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs4.png?alt=media&token=9d0e6f76-a5c1-436a-ad14-1990698ed704",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs5.png?alt=media&token=9efd3b33-8e08-481a-8838-01faf2d72ff4",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna.png?alt=media&token=4bd6e651-824d-4157-a665-b2b6c41912a0"
      ],
      inactive: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs1%20(2).png?alt=media&token=c50390a1-5e61-4088-bede-7681913e5fa1",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs2%20(2).png?alt=media&token=8e93c90c-654e-4d37-bc31-5289438e7a13",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs3%20(2).png?alt=media&token=10486b1f-aeee-4342-b163-0746eaa9eab0",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs4%20(2).png?alt=media&token=639a9fd5-bc92-41e8-84f7-8fd51cdb55e7",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs5%20(2).png?alt=media&token=142373a1-5d1c-4667-97da-414275fc66ba",
         "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ],
      selected: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs1%20(2).png?alt=media&token=c50390a1-5e61-4088-bede-7681913e5fa1",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs2%20(2).png?alt=media&token=8e93c90c-654e-4d37-bc31-5289438e7a13",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs3%20(2).png?alt=media&token=10486b1f-aeee-4342-b163-0746eaa9eab0",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs4%20(2).png?alt=media&token=639a9fd5-bc92-41e8-84f7-8fd51cdb55e7",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs5%20(2).png?alt=media&token=142373a1-5d1c-4667-97da-414275fc66ba",
         "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ],
      activeE: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1.png?alt=media&token=01541849-2679-4260-aed5-cf721cb1e132",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2.png?alt=media&token=54fbfe39-857a-4c1c-a1dd-698965e8b143",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3.png?alt=media&token=a976b79e-b34c-47cf-b8d7-fd328892b1a4",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4.png?alt=media&token=11a37d8d-0256-47ab-966e-6bda2cf30f37",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5.png?alt=media&token=04f67b49-3d77-4ff6-8a81-ceed80489509"
      ],
      inactiveE: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84"
      ],
      selectedsE: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84"
      ]
    };
  },
  created() {
    if (this.defaultans) {
      this.answered = this.defaultans
      this.clickansS(this.defaultans.selectedS)
      this.clickansE(this.defaultans.selectedE)
      console.log(this.answered)
    }
  },
  methods: {
    clickansE(ans) {
      // this.$emit(ans, yesnoanswer);
      this.answered.selectedE = ans
      for (var i = 0; i < this.inactiveE.length; i++) {
        this.$set(this.selectedsE, i, this.inactiveE[i])
      }
      var clicknumber = this.activeE[ans - 1]
      this.$set(this.selectedsE, ans - 1, clicknumber)
      console.log(clicknumber)
    },
    clickansS(ans) {
      // this.$emit(ans, yesnoanswer);
      this.answered.selectedS = ans
      for (var i = 0; i < this.inactive.length; i++) {
        this.$set(this.selected, i, this.inactive[i])
      }
      var clicknumber = this.active[ans - 1]
      this.$set(this.selected, ans - 1, clicknumber)

      console.log(clicknumber)
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
  margin-top: 1vh;
  text-align: center;
}
h5 {
  color: rgb(85, 53, 4);
  margin-top: 1vh;
  text-align: justify;
  text-indent: 45px;
}
</style>
