<template>
    <div class="container" style="margin: auto; margin-top: 28vh">
        <div>
            <router-link to="/loader/new">
                <b-button class="buttonCSS"><h1>Start new questionnair</h1></b-button>
            </router-link>            
        </div>
        <div class="marginTop">
            
            <router-link to="/surveyresponse">
            <b-button class="buttonCSS"><h1>Manage Responses</h1></b-button>
            </router-link>   
        </div>
    </div>
</template>

<style scoped>
.container{
      text-align: center;
}
.marginTop{
    margin-top: 7vh
}

.buttonCSS{
    background-color: rgb(6, 139, 106);
    border-radius: 10px;
    width: 50vw;
    height: 10vh;
    font-size: 3.5vh;
}
.hhhh {
  max-height: 0px;
  padding: 0px;
}
</style>
