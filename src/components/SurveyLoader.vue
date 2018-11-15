<template>
    <div>
        <form-wizard title="" subtitle="" stepSize="xs" @on-change="onChange" @on-complete="onComplete">
            <!-- Loop through each question and create a tab-content -->
            <!-- Check the question type and load corresponding component -->            
                <tab-content title="" v-for="(question,index) in questions" :key="question.qid" v-if="dataReady">
                    <!-- v-if="question.type == ???" -->
                    <mchoice v-if="question.type == 'mchoice'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></mchoice>
                    <q-yes-no v-if="question.type == 'q-yes-no'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></q-yes-no>
                    <qimg v-if="question.type == 'qimg'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qimg>
                    <qtextinput v-if="question.type == 'qtextinput'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qtextinput>                                            
                    <qexpect v-if="question.type == 'qexpect'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qexpect>
                    <qagreement v-if="question.type == 'qagreement'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qagreement>
                    <qsatisfaction v-if="question.type == 'qsatisfaction'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qsatisfaction>
                    <qexpend v-if="question.type == 'qexpend'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qexpend>
                    <qradio v-if="question.type == 'qradio'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qradio>
                </tab-content>     
        </form-wizard>
        <b-modal ref="modal" body-class="hhhh" centered hide-footer hide-header hide-header-close  title="">
            <circle8 size='72'></circle8>
        </b-modal>
    </div>
</template> 

<script>
import Mchoice from "./Mchoice";
import QYesNo from "./QYesNo";
import Qimg from "./Qimg";
import Qtextinput from "./Qtextinput";
import Qexpect from "./Qexpect";
import Qagreement from "./Qagreement";
import Qsatisfaction from "./Qsatisfaction";
import Qexpend from "./Qexpend";
import { firestore } from "../firebase.js";
import { Circle8 } from "vue-loading-spinner";
import Qradio from "./Qradio";
import moment from "moment";

export default {
  name: "surveyloader",
  components: {
    Circle8,
    Mchoice,
    QYesNo,
    Qimg,
    Qtextinput,
    Qexpect,
    Qagreement,
    Qsatisfaction,
    Qexpend,
    Qradio
  },
  data() {
    return {
      questions: [],
      true: true,
      answers: [],
      userid: "",
      defaultans: [],
      dataReady: false,
      ans: []
    };
  },
  methods: {
    onChange(prev) {
      var qid = "q" + prev;
      var data = {
        answered: []
      };
      var newans = this.$refs[qid][0].answered;
      console.log(data);
      //Save to firebase
      firestore
        .collection("answers")
        .doc(this.userid)
        .get()
        .then(function(doc) {
          var answereds = doc.data();
          console.log(answereds);
          var index = answereds.answered.findIndex(
            obj => obj.qid == newans.qid
          );
          console.log("found index " + index);
          if (index == -1) {
            //New answer
            answereds.answered.push(newans);
          } else {
            //Replace old answer
            answereds.answered[index] = newans;
          }
          //Save to firebase
          firestore
            .collection("answers")
            .doc(doc.id)
            .set(answereds);
        });
    },
    onComplete: function() {
      this.$router.push({ path: "/finish" });
    }
  },
  firestore() {
    return {
      // Get all questions and render all at once
      surveys: firestore.collection("surveys").orderBy("qid"),
      answers: firestore.collection("answers").orderBy("index", "desc")
    };
  },
  async mounted() {
    this.$refs.modal.show();
    this.questions = await this.surveys;
    let ans = await this.$firestore.answers.get();
    ans.forEach(e => {
      this.ans.push(e.data());
    });
    this.$refs.modal.hide();
    const newIndex = this.ans[0]["index"] + 1;
    if (this.$route.params.id == "new") {
      firestore
        .collection("answers")
        .add({
          datetime: moment().format("MM/DD/YYYY hh:mm:ss"),
          answered: [],
          index: newIndex,
          operator: this.operatorEmail
        })
        .then(docRef => {
          this.userid = docRef.id;
          this.dataReady = true;
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    } else {
      // get firebase
      console.log(this.$route.params.id);
      console.log(this.$firestore.answers);
      
      var docRef = firestore.collection("answers").doc(this.$route.params.id);
      docRef.get().then(doc => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            this.defaultans = doc.data().answered;
            this.dataReady = true;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  },
  create() {},
  computed: {
    operatorEmail: () => window.localStorage.getItem("operatorEmail")
  },
  async beforeMount() {}
};
</script>

<style>
.hhhh {
  max-height: 0px;
  padding: 0px;
}
.vue-form-wizard .wizard-header{
  display: NONE;
}
.wizard-navigation .wizard-progress-with-circle{
  display: NONE;
}
.vue-form-wizard.xs .wizard-icon-circle{
  display: NONE;
}
.vue-form-wizard .wizard-btn{
  height: 8vh;
  width: 15vw;
}
</style>
