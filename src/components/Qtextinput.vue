<template>
    <div style="margin: 0% 2% 0% 2%; min-height: 68vh; max-height: 65vh;">
        <h2>{{surveys.qid}}. {{surveys.qname}}</h2>
        <div class="row">  
            <h2>Answer :</h2>
            <!-- <b-form-input v-bind:value.sync="answer" v-model="answer" @change="edit(answer)" @input="$emit('update:answer', $event.target.value)" id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input> -->
            <b-col sm="8">
                <b-form-input v-model="answered.text"  id="input-large" size="lg" type="text" placeholder="Enter your answer"></b-form-input>
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
  created() {
    if(this.defaultans){
      this.answered = this.defaultans
    }
  },
};
</script>

<style scoped>
.row {
  margin-top: 8vh;
}
</style>