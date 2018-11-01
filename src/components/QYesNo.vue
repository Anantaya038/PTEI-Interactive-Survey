<template>
<div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
    <h1>{{surveys.qid}}. {{surveys.qname}}</h1>
    <div class="row">
        <div class="col-6"  v-on:click="clickans('1')"><b-img :class="{ active :active_el == 1 }" rounded="circle" src="https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fyes.png?alt=media&token=5281b997-426a-489e-a4d1-3fe6aeafc02a" class="img-body"></b-img></div>
        <div class="col-6"  v-on:click="clickans('2')" v-b-modal.myModal><b-img :class="{ active :active_el == 2 }" rounded="circle" src="https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fno.png?alt=media&token=08722d8b-2c91-4528-a649-756622ba18fb" class="img-body"></b-img></div>
        
        <div class="col-6" v-if="answered.selected === '2'">    
            <b-modal id="myModal" centered size="sm">
            <b-form-input class="input"  v-model="answered.text" type="number" size="md" placeholder="Number of previous visit (s)"></b-form-input>
            </b-modal>
        </div>     
    </div>
</div>
</template>
<script>
export default {
    props:["surveys","defaultans",],
    name: 'qyesno',
    data (){    
      return{     
          answered: {
              selected: null,
              text: '',
              qid : this.surveys.qid,
          },
      }
    }, 
    created() {
    if(this.defaultans){
      this.answered = this.defaultans
      this.clickans(this.defaultans.selected)
    }
  },
    methods: {
        clickans(ans){
            // this.$emit(ans, yesnoanswer);
            this.answered.selected = ans
            console.log(this.answered)
            this.active_el = ans
        },
    },
   
}
</script>

<style scoped>
.img-body{
    width:14vw; 
    height:15vh;
    box-shadow: 0 0 10px #000000;
    text-align: center;
}
.col-6{
    text-align: center;
}
.row{
    margin-top:8vh;
}
.active{
    border:6px solid;
    box-shadow: 0 0 50px #000000;
}
.input{
    width: 25vw;
}
</style>



