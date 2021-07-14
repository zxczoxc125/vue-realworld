<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './NavBar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped></style>
