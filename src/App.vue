<template>
  <div class="app-boby">
     <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<style>
 .app-boby {
   display: flex;
   justify-content: center;
 }
</style>

<script>
const default_layout = "default";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  created() {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout);
  },
  updated() {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout);
  }
};
</script>

<style scoped>
.app-boby {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 90vw;
  margin: 0 auto;
}
</style>