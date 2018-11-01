<template>
    <div style="margin: auto; margin-top:15vh; margin-left:28vw;margin-right:28vw;">
      <b-card text-variant="black" class="text-center">
                <div class="img">
                    <b-img :src="require('../photo/page1.png')" class="img-body"></b-img>
                </div>
                <h1><strong>Manage Responses</strong></h1>
           <b-form-input class="input" type="text" v-model="email" placeholder="Enter E-mail"></b-form-input>
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
                    alert('login success! ')
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
    }
}
</script>

<style>
    .card-body{
        border-radius: 20%;
    }
    .img-body{
        height: 35vh;  
    }
    .btn{
        margin-top: 2vh;
        color: black;
        width: 30vw;
        height: 7vh;
        background: rgb(41,185,84);
        background: linear-gradient(10deg, rgba(41,185,84,1) 0%, rgba(4,199,153,1) 100%);
    }
    .input{

        width: 30vw;
        height: 7vh;
        margin: auto;
        margin-top: 1vh;
        font-size: 3vh;
    }
    .text-center{
        background: rgb(20,167,132);
        background: radial-gradient(circle, rgba(20,167,132,1) 0%, rgb(99, 97, 97) 100%);
    }
</style>
