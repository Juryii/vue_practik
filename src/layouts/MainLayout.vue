<template>
  <div class="app-main-layout">

    <navbar @showNav="isopen = !isopen"/>

    <sidebar v-model="isopen"/>

    <main class="app-content" :class="{full: !isopen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/app/Navbar";
  import Sidebar from "../components/app/Sidebar";

  export default {
    name: "MainLayout",
    data: () => ({
      isopen: true
    }),
    components: {
      Navbar,
      Sidebar
    }
  }
</script>

<style scoped>

</style>