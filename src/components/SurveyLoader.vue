<template>
    <div>
        <form-wizard title="" subtitle="" stepSize="xs" @on-change="onChange" @on-complete="onComplete">
            <!-- Loop through each question and create a tab-content -->
            <!-- Check the question type and load corresponding component -->            
                <tab-content title="" v-for="(question,index) in questions" :key="question.qid">
                    <!-- v-if="question.type == ???" -->
                    <mchoice v-if="question.type == 'mchoice'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></mchoice>
                    <q-yes-no v-if="question.type == 'q-yes-no'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></q-yes-no>
                    <qimg v-if="question.type == 'qimg'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qimg>
                    <qtextinput v-if="question.type == 'qtextinput'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qtextinput>                                            
                    <qexpect v-if="question.type == 'qexpect'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qexpect>
                    <qagreement v-if="question.type == 'qagreement'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qagreement>
                    <qsatisfaction v-if="question.type == 'qsatisfaction'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qsatisfaction>
                    <qexpend v-if="question.type == 'qexpend'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qexpend>
                    <qhours v-if="question.type == 'qhours'" :surveys="question" :ref="'q'+index" :defaultans="defaultans[index]"></qhours>
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
import Qhours from "./Qhours";
import { firestore } from "../firebase.js";
import { Circle8 } from "vue-loading-spinner";

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
    Qhours
  },
  data() {
    return {
      questions: [],
      true: true,
      answers: [],
      userid: "",
      defaultans: []
    };
  },
  methods: {
    onChange(prev, next) {
      console.log("changed from" + prev + "to" + next);
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
      alert("Yay. Done!");
    }
  },
  firestore() {
    return {
      // Get all questions and render all at once
      surveys: firestore.collection("surveys").orderBy("qid"),
      answers: firestore.collection("answers")
    };
  },
  async mounted() {
    this.questions = await this.surveys;
    this.$refs.modal.show();
    setTimeout(() => {
      this.$refs.modal.hide();
    }, 2400);
    var parent = this;
    console.log(this.$route.params.id);

    if (this.$route.params.id == "new") {
      firestore
        .collection("answers")
        .add({
          datetime: Date.now(),
          answered: []
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          parent.userid = docRef.id;
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    } else {
      // get firebase
      var docRef = this.$firestore.answers.doc(this.$route.params.id)
      docRef.get().then(function(doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            parent.defaultans = doc.data().answered
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
  create() {}
};
</script>

<style>
.hhhh {
  max-height: 0px;
  padding: 0px;
}
</style>
