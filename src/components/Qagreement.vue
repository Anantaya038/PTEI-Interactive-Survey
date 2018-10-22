<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
       <h1>{{surveys.qtitle}}</h1>       
       <hr>
       <h2>{{surveys.qid}} ) {{surveys.qname}}</h2>   
         <div class="row" >
          <div class="col" v-on:click="clickans('1')"><b-img rounded="circle" :src="selecteds[0]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickans('2')"><b-img rounded="circle" :src="selecteds[1]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickans('3')"><b-img rounded="circle" :src="selecteds[2]" class="img-body"></b-img></div>
          <div class="col" v-on:click="clickans('4')"><b-img rounded="circle" :src="selecteds[3]" class="img-body"></b-img></div> 
          <div class="col" v-on:click="clickans('5')"><b-img rounded="circle" :src="selecteds[4]" class="img-body"></b-img></div>
        </div>
        <div class="row">
            <div class="col"><h5>Strongly disagree</h5></div>
            <div class="col"><h5>Disagree</h5></div>
            <div class="col"><h5>Neutral</h5></div>
            <div class="col"><h5>Agree</h5></div>
            <div class="col"><h5>Strongly agree</h5></div>
        </div>
</div>
</template>
<script>

export default {
    props:['surveys','defaultans'],
    name: 'qagreement',
    data (){
      return{   
           answered: {
               selected: null,
               qid: this.surveys.qid
           },   
           active: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1.png?alt=media&token=01541849-2679-4260-aed5-cf721cb1e132",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2.png?alt=media&token=54fbfe39-857a-4c1c-a1dd-698965e8b143",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3.png?alt=media&token=a976b79e-b34c-47cf-b8d7-fd328892b1a4",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4.png?alt=media&token=11a37d8d-0256-47ab-966e-6bda2cf30f37",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5.png?alt=media&token=04f67b49-3d77-4ff6-8a81-ceed80489509",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna.png?alt=media&token=4bd6e651-824d-4157-a665-b2b6c41912a0"
      ],
      inactive: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ],
      selecteds: [
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn1%20(2).png?alt=media&token=2fc120a3-5bd6-48ef-bb2d-2424e7a4229c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn2%20(2).png?alt=media&token=cfedee23-3cc5-4323-9685-8273ebeb5b46",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn3%20(2).png?alt=media&token=d51dceec-608f-4d0a-82ac-fb10a6ee865c",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn4%20(2).png?alt=media&token=d4dd5ef5-7bcf-460a-8ce3-174fdcdd0a05",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fn5%20(2).png?alt=media&token=d1d561b2-be7d-46e0-81b9-d64180f7dd84",
        "https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fna%20(2).png?alt=media&token=3b5310c2-2cb1-44e2-9822-b697516a0b21"
      ]   
      }
    },
     created() {
    if(this.defaultans){
      this.answered = this.defaultans
       this.clickans(this.defaultans.selected);
    }
  },
    methods: {
        clickans(ans) {
      // this.$emit(ans, yesnoanswer);
       this.answered.selected = ans
       for (var i = 0; i < this.inactive.length; i++) {
        this.$set(this.selecteds, i, this.inactive[i]);
      }
      var clicknumber = this.active[ans - 1];
      this.$set(this.selecteds, ans - 1, clicknumber);
    }
    }
}
</script>

<style scoped>
.img-body{
    width:12vw; 
    height:13vh;
    box-shadow: 0 0 10px #000000;
}
.col{
    margin-top:12px;
    text-align: center; 
}
.row{
    margin-top:1vh;
    
}
h2{
    margin-top:3vh;
    text-align: justify;
    text-indent: 45px;
    color: #977400
}
.hr{
    border-top: 10px solid rgba(0, 0, 0, 0.1);
    size: 6;
}
</style>
