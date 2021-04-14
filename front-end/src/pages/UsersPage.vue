<template>
  <div class="main">
    <div class="pageHeader mb-3">
      <h2>
        Users Page
      </h2>
    </div>
    <div></div>
    <div>
      <UsersTable />
    </div>
  </div>
</template>

<script>
import UsersTable from "../components/UsersTable.vue";
export default {
  components: {
    UsersTable,
  },
};
</script>

<style scoped>
.pageHeader {
  border-bottom: 3px rgba(61, 25, 112, 1) solid;
}
.main {
  margin-top: 20px;
}
</style>
