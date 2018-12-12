<template>
    <div class="fullscreen">
     <b-navbar toggleable="md" variant="color">
  <b-navbar-brand><h1><b>PTEI Survey</b></h1></b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em><b-img style="width:4vw;" src="https://campriverrun.org/wp-content/themes/allyourbase/img/hamburger.png"></b-img></em>
        </template>
        <b-dropdown-item v-on:click="home"><b-img style="width:4vw;" src="https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Fhome.png?alt=media&token=84d8e84a-4efa-4108-ab73-afff18327156"></b-img><b>Home</b> </b-dropdown-item>
        <b-dropdown-item v-on:click="logout"><b-img style="width:4vw;" src="https://firebasestorage.googleapis.com/v0/b/ptei-1c8c4.appspot.com/o/photo%2Flogout.png?alt=media&token=6825d9f8-6736-478f-a313-60edcf5c1ba5"></b-img><b>Signout</b> </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
<router-view></router-view>
      </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "bg",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  methods: {
    home() {
      this.$router.push({ path: "/new" });
    },
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          window.localStorage.removeItem("operatorEmail");
          this.$router.push("/login");
        });
    }
  }
};
</script>

<style>
.mx-1 {
  width: 5vw;
}
.fullscreen {
  height: 100vh;
  width: 100%;
  background-color: rgb(255, 255, 255);
}
.bgcolor {
  background-color: rgb(73, 73, 73);
}
.navbar {
  background-color: #193c6c;
}
.dropdown-menu {
  font-size: 1.3rem;
  background-color: rgba(202, 202, 207, 0.918);
}
.dropdown-item:focus {
  background-color: #ffffff;
}
h1{
  color: white;
}
h2{
  color: white;
}
</style>
