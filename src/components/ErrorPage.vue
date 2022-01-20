<template>
  <div>
    <Logo />
    <section class="error">
      <h1 class="error__title">Page not found</h1>
    </section>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  name: "ErrorPage",
  components: { Logo },
};
</script>

<style lang="scss" scoped>
.error {
  &__title {
    font-size: 60px;
    text-align: center;
  }
}
</style>
