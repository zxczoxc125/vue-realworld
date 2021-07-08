<template>
  <div :class="['sidebar', 'border', 'bg-light', { 'sidebar-close': !open }]">
    <div class="nav-header">
      <div>
        <b-button class="nav-icon" @click="toggleOpen" variant="light">
          <b-icon v-if="open" icon="chevron-bar-left"></b-icon>
          <b-icon v-else icon="chevron-bar-right"></b-icon>
        </b-button>
      </div>
      <div class="nav-text"><h4 class="nav-title">REALWORLD</h4></div>
    </div>

    <hr />

    <div v-for="{ text, icon } of menuList" :key="text" class="nav-item">
      <div>
        <b-button class="nav-icon"> <b-icon :icon="icon"></b-icon> </b-button>
      </div>
      <div class="nav-text">{{ text }}</div>
    </div>

    <hr />

    <div class="nav-item">
      <div>
        <b-button class="nav-icon" variant="danger">
          <b-icon icon="door-open-fill"></b-icon>
        </b-button>
      </div>
      <div class="nav-text">SIGN OUT</div>
    </div>
  </div>
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
.sidebar {
  width: 320px;
  position: fixed;
  top: 0;
  height: 100%;
  transition: width 0.5s;
}

.nav-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
}

.nav-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}

.sidebar-close {
  width: 50px;
  overflow-x: hidden;
}

.nav-icon {
  width: 45px;
  display: flex;
  justify-content: center;
}

.nav-text {
  width: 270px;
  padding-left: 10px;
}

.nav-title {
  display: inline;
}
</style>
