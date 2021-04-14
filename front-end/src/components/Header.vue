<template>
  <div class="mt-20">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="sideMenu">
      <ul>
        <li>
          <router-link to="/">
            <p>Home</p>
          </router-link>
        </li>
        <li>
          <router-link to="/users">
            <p>Users</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
.logo {
  display: flex;
  justify-content: center;
}
.sideMenu ul {
  list-style-type: none;
}
.sideMenu ul a {
  text-decoration: none;
  color: #fff;
}
.sideMenu ul li {
  padding: 7px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 11px;
  margin-right: 20px;
}
.sideMenu > ul li a p {
  display: content;
  margin-bottom: 0px !important;
}
</style>
