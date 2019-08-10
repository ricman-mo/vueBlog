<template>
<div>
  <b-navbar toggleable="lg" type="info" variant="light">
    <b-navbar-brand href="/">首页</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/article">article</b-nav-item>
        <b-nav-item href="/addarticle" >admin</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      <b-navbar-nav right v-if="!logined"> 
        <b-nav-item href="/login">登录</b-nav-item>
      </b-navbar-nav>

        <b-nav-item-dropdown right v-if="logined">
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>{{userName}}</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import StorageService from "@/services/common/storage.service";
export default {
  data() {
    return {
      logined: false,
      userName: ""
    };
  },
  created() {
    this.checkIfLogin();
  },
  methods: {
    checkIfLogin: function() {
      StorageService.getCurrentUser()
        .then(user => {
          if (user.name) {
            this.logined = true;
            this.userName = user.name;
          } else {
            this.logined = false;
          }
        })
        .catch(() => {
          this.logined = false;
        });
    },
    handleSelect: function(index) {}
  }
};
</script>
