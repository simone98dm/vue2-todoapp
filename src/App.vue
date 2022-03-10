<template>
  <div id="app">
    <HomeVue></HomeVue>
  </div>
</template>

<script>
import HomeVue from "./components/Home.vue";
export default {
  name: "App",
  components: {
    HomeVue,
  },
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/product-sans");
body {
  background-color: #f8f8f8;
  font-family: "Product Sans", sans-serif;
}
</style>
