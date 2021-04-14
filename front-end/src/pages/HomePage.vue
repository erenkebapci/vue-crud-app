<template>
  <div
    class="container mainContainer align-items-center d-flex justify-content-center"
  >
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="col-md-12 d-flex justify-content-center">
        <h2>
          A basic CRUD app made with Vue.
        </h2>
      </div>
      <div class="col-md-12 d-flex justify-content-center text-center">
        <p>
          Element UI, Bootstrap and Axios libraries used. <br />You can reach
          application
          <router-link to="/users">
            here
          </router-link>
          or header.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first_name: "",
    };
  },
};
</script>

<style scoped>
.mainContainer {
  height: 100vh !important;
}
</style>
