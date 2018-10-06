<template>
    <div style="margin: auto; margin-top:20vh; margin-left:30vw;margin-right:30vw;">
      <b-card text-variant="black" class="text-center">
                <div class="img">
                    <b-img :src="require('../photo/page1.png')" class="img-body"></b-img>
                </div>
                <h2>Manage Responses</h2>
                <b-form-input class="input" type="password" placeholder="Enter Password"></b-form-input>
            <router-link to="/surveyresponse">
            <b-button class="btn"><h4>Enter</h4></b-button>
            </router-link>
        </b-card>
    </div>
</template>

<style>
    .card-body{
        border-radius: 20%;
    }
    .img-body{
        height: 35vh;  
    }
    .btn{
        margin-top: 3vh;
        color: black;
        width: 30vw;
        height: 7vh;
        background: rgb(41,185,84);
        background: linear-gradient(10deg, rgba(41,185,84,1) 0%, rgba(4,199,153,1) 100%);
    }
    .input{
        text-align: center;
        width: 30vw;
        height: 7vh;
        margin: auto;
    }
    .text-center{
        background: rgb(20,167,132);
        background: radial-gradient(circle, rgba(20,167,132,1) 0%, rgb(99, 97, 97) 100%);
    }
</style>
