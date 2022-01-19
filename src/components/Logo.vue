<template>
  <div class="logo">
    <img src="../assets/img.svg" alt="Vue Logo" class="img" />
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
.logo {
  padding: 0;
  margin: 0;
  align-items: left;
  width: 100%;
}
.img {
  display: block;
  background: white;
  height: 50;
  width: 50;
}
</style>
