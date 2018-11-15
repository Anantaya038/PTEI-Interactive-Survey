<template>
    <div style="margin: 3% 3% 0% 3%; min-height: 68vh; max-height: 65vh;">
        <b-card bg-variant="secondary"><h1>{{surveys.qid}}. {{surveys.qname}}</h1></b-card>
        <div class="row">  
            <p>Answer :</p>
            <b-col sm="8">
                <b-form-input v-model="answered.text" id="input-small" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
            </b-col>
        </div>
    </div>
</template>
<script>
export default {
  props: ["surveys", "defaultans"],
  name: "qtextinput",
  data() {
    return {
      answered: {
        text: '',
        qid : this.surveys.qid,
      }
    };
  },
  mounted() {
    if(this.defaultans){
      this.answered = this.defaultans
    }
  },
};
</script>

<style scoped>
.row {
  margin-top: 8vh;
  text-align: center;
}
h1{
  color: rgb(255, 255, 255);
}
p{
  font-size: 4vh;
  font-weight: bold;
}
.form-control{
  font-weight: bold;
  font-size: 3vh;
}
</style>