
<template>
  <div class="body_container">
    <header-bar />
    <div class="b-container">
      <b-row>
        <b-col cols="9">
          <slot />
        </b-col>
        <b-col cols="3">
          <side-bar />
        </b-col>
      </b-row>
    </div>

    <footer-bar />
  </div>
</template>

<style>
 .body_container {
   width: 1140px;
 }
</style>

<script>
import FooterBar from "@/components/layouts/footer";
import HeaderBar from "@/components/layouts/header";
import SideBar from "@/components/layouts/sideBar";
export default {
  components: {
    HeaderBar,
    SideBar,
    FooterBar
  }
};
</script>