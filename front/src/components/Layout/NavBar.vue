<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">RealWorld</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
          <b-icon icon="cloud-upload" class="mr-2" aria-hidden="true"></b-icon>
          <span>MAIN</span></b-nav-item
        >
        <b-nav-item href="#"
          ><b-icon icon="inbox-fill" class="mr-2" aria-hidden="true"></b-icon
          ><span>PROFILE</span></b-nav-item
        >
        <b-dropdown-divider></b-dropdown-divider>
        <b-nav-item href="#"
          ><b-icon
            icon="power"
            class="mr-2"
            aria-hidden="true"
            variant="danger"
          ></b-icon
          ><span>SIGN OUT</span></b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped></style>
