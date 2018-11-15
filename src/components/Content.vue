<template>
    <div class="container" style="margin: auto; margin-top: 10vh">
       <p>NEXT</p><p>{{index}}</p> 
        <div style="margin: auto; margin-top: 10vh">
            <router-link to="/loader/new">
                <b-button><h1>Start new questionnair</h1></b-button>
            </router-link>            
        </div>
        <div class="marginTop">  
            <router-link to="/surveyresponse">
            <b-button><h1>Manage Responses</h1></b-button>
            </router-link>   
        </div>
    </div>
</template>
<script>
import { firestore } from "../firebase.js";
export default {
  name: "",
  components: {},
  data() {
    return {
        index: 0,
        ans:[]
    };
  },
  firestore() {
    return {
      // Get all questions and render all at once
      answers: firestore.collection("answers")
    };
  },
  async mounted() {
    let ans = await this.$firestore.answers.get();
    ans.forEach(e => {
      this.ans.push(e.data());
    });
    const newIndex = this.ans[0]["index"] + 1;
    this.index = newIndex;
  }
};
</script>


<style scoped>
.container {
  text-align: center;
}
.marginTop {
  margin-top: 7vh;
}
.btn{
  border-radius: 10px;
  width: 50vw;
  height: 10vh;
  font-size: 3.5vh;
  color: black;
  background: linear-gradient(10deg, rgb(45, 90, 131), rgb(59, 90, 133) 100%);
  border:1px solid rgb(0, 55, 71);
}
.hhhh {
  max-height: 0px;
  padding: 0px;
}
.card {
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
h1{
  color: rgb(255, 255, 255);
}
p{
  font-size: 5vh;
  font-weight: bold;
}
</style>
