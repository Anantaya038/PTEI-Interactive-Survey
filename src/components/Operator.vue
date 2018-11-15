<template>
    <div style="margin: auto; margin-top:15vh; margin-left:28vw;margin-right:28vw;">
      <b-card text-variant="black" class="text-center">
                <div class="img">
                    <b-img :src="require('../photo/page1.png')" class="img-body"></b-img>
                </div>
                <h1><strong>Manage Responses</strong></h1>
           <b-form-input class="input" type="email" v-model="email" placeholder="Enter E-mail"></b-form-input>
                <b-form-input class="input" type="password" v-model="password" placeholder="Enter Password"></b-form-input>
            <!-- <router-link to="/new"> -->
            <b-button class="btn" v-on:click="signUp"><h3>Enter</h3></b-button>
            <!-- </router-link> -->
        </b-card>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    props:['user'],
    name: 'operator',
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        signUp: function(e){
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then((response) => {
                    window.localStorage.setItem("operatorEmail", this.email)
                    console.log(response)
                    this.$router.push('new')
                },
                (err) => {
                    alert(err.message)
                }
            );
            e.preventDefault();
        }
    },
    computed: {
        
    }
}
</script>

<style scoped>
    .card-body{
        border-radius: 20%;
    }
    .img-body{
        height: 35vh;  
    }
    .btn{
        margin-top: 2vh;
        color: black;
        width: 40vw;
        height: 7vh;
        background: rgb(255, 255, 255);
        background: linear-gradient(10deg, #193C6C, rgb(148, 156, 154) 100%);
        border:1px solid #193C6C;
    }
    .input{
        width: 40vw;
        height: 7vh;
        margin: auto;
        margin-top: 1vh;
        font-size: 3vh;
    }
    .input::placeholder{
        font-weight: bold;
    }
    .text-center{
        background: rgb(113, 150, 141);
        background: radial-gradient(circle, rgb(41, 117, 131) 0%, rgb(219, 219, 219) 100%);
    }

</style>
