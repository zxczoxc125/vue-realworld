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
          ><b-button size="sm" @click="toggleOpen" variant="light">
            <b-icon v-if="open" icon="chevron-bar-left"></b-icon>
            <b-icon v-else icon="chevron-bar-right"></b-icon> </b-button
        ></b-col>
        <b-col cols="9"><h4 class="nav-title">REALWORLD</h4></b-col>
      </b-row>

      <hr />

      <b-row
        v-for="{ text, icon } of menuList"
        :key="text"
        :class="{ 'menu-item': true }"
      >
        <b-col cols="3"
          ><b-button size="sm"> <b-icon :icon="icon"></b-icon> </b-button
        ></b-col>
        <b-col cols="9">{{ text }}</b-col>
      </b-row>

      <hr />

      <b-row :class="{ 'menu-item': true }">
        <b-col cols="3"
          ><b-button size="sm" variant="danger">
            <b-icon icon="door-open-fill"></b-icon> </b-button
        ></b-col>
        <b-col cols="9" class="text-danger">SIGN OUT</b-col>
      </b-row>
    </b-container>
  </b-sidebar>
</template>

<script>
export default {
  data: () => ({
    open: false,
    menuList: [
      { text: 'HOME', icon: 'house-door-fill' },
      { text: 'PROFILE', icon: 'person-fill' },
    ],
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
  padding: 5px 0;
  cursor: pointer;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
}

.menu-item:hover {
  opacity: 0.7;
}
</style>
