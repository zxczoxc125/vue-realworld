<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
