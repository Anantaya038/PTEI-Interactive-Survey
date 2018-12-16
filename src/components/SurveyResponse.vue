<template>
   <div class="pre">
       <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col"><h3>Operator</h3></th>
      <th scope="col"><h3>Time</h3> </th>
      <th scope="col"><h3>View</h3></th>
      <th scope="col"><h3>Delete</h3></th>
    </tr>
  </thead> 
  <tbody>
    <tr  v-for="(answer,index) in answers" v-bind:key="answer.answers">
          <th><h4>{{answers[index].operator}}</h4></th> 
          <th><h4>{{answers[index].datetime}}</h4></th>
        <th><b-button class="ans" v-on:click="send(answer['.key'])"><h4>Response {{ answer['index'] }}</h4></b-button></th>
        <th><b-img class="delete" @click="deleteans(answer['.key'])" v-b-modal.myModal src="https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fdelete.png?alt=media&token=3740d8f6-080b-4508-881d-ecba80e14c47" fluid alt="Responsive image"/></th>
       </tr>
       </tbody>
       </table>

 
</div>
</template>

<script>
import { firestore } from "../firebase.js";

export default {
  name: "surveyresponse",
  data() {
    return {
      answers: []
    };
  },
  firestore() {
    return {
      // Get all answers
      answers: firestore.collection("answers").orderBy("index", "desc")
    };
  },
  methods: {
    backNew(){
      this.$router.push({ path: "/new"});
    },
    send(id) {
      this.$router.push({ path: "/loader/" + id });
    },
    deleteans(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
          firestore
            .collection("answers")
            .doc(id)
            .delete()
            .then(() => {
              this.answers = this.answers.filter(answer => {
                return answer[".key"] != id;
              });
            });
        }
      });
    }
  },
  mounted() {
    console.log(this.answers)
  },
};
</script>

<style scoped>
.hhhh {
  max-height: 0px;
  padding: 0px;
}
.delete {
  height: 6vh;
  text-align: center;
}
.ans {
  height: 6vh;
  width: 16vw;
  text-align: center;
}
h3,h4,th{
  text-align: center;
}
.pre{
margin-top: 2vh;
margin-left: 2vw;
margin-right: 2vw;
margin-block-end: 2vh;
}
</style>

