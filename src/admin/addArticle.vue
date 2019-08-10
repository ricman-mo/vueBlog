<template>
  <div class="b_container">
    
    <mavon-editor v-model="article_value"/>

  </div>
</template>

 <style lang="scss" scoped>
</style>

<script>
export default {
  components: {
  },
  data() {
    return {
      options: {
        lineNumbers: true,
        styleActiveLine: true,
        styleSelectedText: true,
        lineWrapping: true,
        indentWithTabs: true,
        tabSize: 2,
        indentUnit: 2
      },
      article_value: ""
    };
  }
};
</script>
