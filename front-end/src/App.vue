<template>
  <div class="container-fluid mainWrapper" id="app">
    <div class="row mainWrapper">
      <div class="col-md-3 headerBackg">
        <Header />
      </div>
      <div class="col-md-9 bgColor">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.headerBackg {
  background: linear-gradient(
    0deg,
    rgba(61, 25, 112, 1) 0%,
    rgba(128, 0, 128, 1) 100%
  );
}
.mainWrapper {
  height: 100vh !important;
}
.bgColor {
}
</style>
