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

<template>
  <div>
    <header-bar />

    <div class="container">
      <slot />
    </div>

    <footer-bar />
  </div>
</template>