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

<template>
  <div>
   <header-bar />
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <slot />
        </div>

        <div class="column is-4">
          <side-bar />
        </div>
      </div>
    </div>

    <footer-bar />
  </div>
</template>