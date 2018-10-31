<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
{{surveys.qtitle}}
<carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false">
    <slide v-for="(qsub,index) in surveys.qsub" v-bind:key="(qsub.option,index)">
<h5>{{surveys.qid}} ) {{qsub.option}}</h5>
       <h6>Level of importance ...</h6>
        <div class="row" >
          <div class="col" v-on:click="clickansE(index,1)"><b-img rounded="circle" :src="selectedsE[index][0]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansE(index,2)"><b-img rounded="circle" :src="selectedsE[index][1]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansE(index,3)"><b-img rounded="circle" :src="selectedsE[index][2]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansE(index,4)"><b-img rounded="circle" :src="selectedsE[index][3]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansE(index,5)"><b-img rounded="circle" :src="selectedsE[index][4]" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col"><p>Not important</p></div>
            <div class="col"><p>Of little importance</p></div>
            <div class="col"><p>Of average importance</p></div>
            <div class="col"><p>Very Important</p></div>
            <div class="col"><p>Absolutely essential</p></div>
        </div>
        <h6> Your satisfaction of Phuket... </h6>
        <div class="row">
          <div class="col" v-on:click="clickansS(index,1)"><b-img rounded="circle" :src="selected[index][0]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansS(index,2)"><b-img rounded="circle" :src="selected[index][1]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansS(index,3)"><b-img rounded="circle" :src="selected[index][2]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansS(index,4)"><b-img rounded="circle" :src="selected[index][3]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickansS(index,5)"><b-img rounded="circle" :src="selected[index][4]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickansS(index,6)"><b-img rounded="circle" :src="selected[index][5]" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col"><p>Very dissatisfied</p></div>
            <div class="col"><p>Slightly dissatisfied</p></div>
            <div class="col"><p>Neutral</p></div>
            <div class="col"><p>Moderately satisfied</p></div>
            <div class="col"><p>Very satisfied</p></div>
            <div class="col"><p>N/A</p></div>
        </div>

    
    </slide>
  </carousel>

     
</div>
</template>
<script>
export default {
  props: ["surveys", "defaultans"],
  name: "qexpect",
  data() {
    return {
      answered: {

        selectedE: [],
        selectedS: [],
        qid : this.surveys.qid
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
      selected: [],
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
      selectedsE: []
    };
  },
  created() {
    var initselected = [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs1%20(2).png?alt=media&token=c50390a1-5e61-4088-bede-7681913e5fa1",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs2%20(2).png?alt=media&token=8e93c90c-654e-4d37-bc31-5289438e7a13",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs3%20(2).png?alt=media&token=10486b1f-aeee-4342-b163-0746eaa9eab0",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs4%20(2).png?alt=media&token=639a9fd5-bc92-41e8-84f7-8fd51cdb55e7",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fs5%20(2).png?alt=media&token=142373a1-5d1c-4667-97da-414275fc66ba",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ]
    var initselectedE = [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84"
      ]
    console.log('created')
    for(var i=0;i<=this.surveys.qsub.length;i++){
      this.selected[i] = initselected;
      this.selectedsE[i] = initselectedE;
    }
    if (this.defaultans) {
      for(let i=0; i<= this.surveys.qsub.length;i++){
      this.clickansE(i,this.defaultans.selectedE[i]);
      this.clickansS(i,this.defaultans.selectedS[i]);
    }
    }
  },
  methods: {
    clickansE(index,ans) {
      this.answered.selectedE[index] = ans
      var newE = [];
      for (var i = 0; i < this.inactiveE.length; i++) {
        newE[i] = this.inactiveE[i]
      }
      this.$set(this.selectedsE, index, newE)

      var clicknumber = this.activeE[ans - 1]
      newE[ans - 1] = clicknumber
      this.$set(this.selectedsE, index, newE)
      console.log(clicknumber)
    },
    clickansS(index,ans) {
      this.answered.selectedS[index] = ans
      var newS = [];
      for (var i = 0; i < this.inactive.length; i++) {
        newS[i] = this.inactive[i]
      }
      this.$set(this.selected, index, newS)

      var clicknumber = this.active[ans - 1]
      newS[ans - 1] = clicknumber
      this.$set(this.selected, index, newS)

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
