<script>
import HeaderBar from "@/components/layouts/header";
import FooterBar from "@/components/layouts/footer";
export default {
  components: {
    HeaderBar,
    FooterBar
  }
};
</script>

<style>
 .body_container {
   width: 1140px;
 }
</style>

<template>
  <div>
    <header-bar />
    <div class="body_container">
      <slot />
    </div>

    <footer-bar />
  </div>
</template>