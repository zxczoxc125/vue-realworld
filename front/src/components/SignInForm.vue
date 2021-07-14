<template>
  <!-- <ValidationProvider v-slot="{ errors }">
    <input v-model="value" type="text" />
    <span>{{ errors[0] }}</span>
  </ValidationProvider> -->
  <b-form @submit="onSubmit">
    <b-form-group id="email" label="E-mail:" label-for="email">
      <b-form-input
        autofocus
        autocomplete="nope"
        id="email"
        v-model="email"
        placeholder="E-mail"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="password" label="Password:" label-for="password">
      <b-form-input
        id="password"
        v-model="password"
        placeholder="Password"
      ></b-form-input>
    </b-form-group>

    <b-button-group class="w-100">
      <b-button type="submit" variant="primary">Sign In</b-button>
      <b-button @click="handleClickSignUp">Sign Up</b-button></b-button-group
    >
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();

      this.email = '';
      this.name = '';
    },
    handleClickSignUp() {
      this.$router.push('/sign-up');
    },
  },
};
</script>

<style scoped></style>
