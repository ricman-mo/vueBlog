<template>
  <div>
    <HomeLayout></HomeLayout>
  </div>
</template>

<script>
import testService from "@/services/test/testService";
import HomeLayout from "@/components/home/index";
export default {
  name: "AppHome",
  components: {
    HomeLayout
  },
  data: function() {
    return {
      message: ""
    };
  },
  methods: {
    sayHello: function() {
      testService.greeting().then(result => {
        this.message = this._.get(result, "data.content");
      });
    }
  },
  created() {
    this.sayHello();
  }
};
</script>
