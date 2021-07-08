<template>
  <b-sidebar
    id="sidebar"
    shadow
    visible
    no-header-close
    no-header
    witdh="'20px'"
  >
    <b-container>
      <b-row class="nav-header">
        <b-col cols="3"
          ><b-button size="sm" @click="toggleOpen">
            <b-icon v-if="open" icon="chevron-bar-left"></b-icon>
            <b-icon v-else icon="chevron-bar-right"></b-icon> </b-button
        ></b-col>
        <b-col cols="9"><h4 class="nav-title">Vue RealWorld</h4></b-col>
      </b-row>

      <hr />

      <b-row :class="{ 'menu-item': true, 'mb-2': true }">
        <b-col cols="3"
          ><b-button size="sm" variant="outline-secondary">
            <b-icon icon="house-door-fill"></b-icon> </b-button
        ></b-col>
        <b-col cols="9">MAIN</b-col>
      </b-row>
      <b-row :class="{ 'menu-item': true, 'mb-2': true }">
        <b-col cols="3"
          ><b-button size="sm" variant="outline-secondary">
            <b-icon icon="person-fill"></b-icon> </b-button
        ></b-col>
        <b-col cols="9">PROFILE</b-col>
      </b-row>
    </b-container>
  </b-sidebar>
</template>

<script>
export default {
  data: () => ({
    open: false,
  }),
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.nav-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}

.nav-title {
  display: inline;
}

.menu-item {
  display: flex;
  align-items: center;
}
</style>
