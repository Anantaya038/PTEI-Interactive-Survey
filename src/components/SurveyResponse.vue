<template>
    <div class="row">
     <div class="col-4" v-for="(answer,index) in answers" v-bind:key="answer.answers">
        <b-button class="ans" v-on:click="send(answer['.key'])"><h3>Response {{ ++index }}</h3></b-button>
        <b-img class="delete" @click="deleteans(answer['.key'])" src="https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fdelete.png?alt=media&token=3740d8f6-080b-4508-881d-ecba80e14c47" fluid alt="Responsive image" />
    </div>
    </div>
</template>

<script>

import { firestore } from "../firebase.js";

    export default{
        name: 'surveyresponse',
        data(){
            return{
                answers:[]
            }
        },
  firestore() {
    return {
      // Get all answers 
      answers: firestore.collection("answers")
      
    }
  },
  methods:{
      send(id){
          this.$router.push({path:'/loader/'+id})
      },
      deleteans(id){
            firestore.collection('answers').doc(id).delete().then(() =>{
                this.answers = this.answers.filter(answer => {
                    return answer['.key'] != id
                })
            })
        }
  }
};
</script>

<style scoped>
.hhhh {
  max-height: 0px;
  padding: 0px;
}
.delete{
    margin-top: -16vh;
    margin-left: 25vw;
    width: 7vh;
    height: 7vh;
}
.ans{
    margin-top: 5vh;
    height: 7vh;
    width: 20vw;  
}
.col-4{
    text-align: center;  
}
</style>

