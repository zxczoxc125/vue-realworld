<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(onSubmit)" class="form">
      <!-- TODO: input 컴포넌트로 분리 -->
      <ValidationProvider
        name="E-mail"
        rules="required|email"
        v-slot="{ errors, valid }"
      >
        <b-form-group id="email" label="E-mail:" label-for="email">
          <b-form-input
            autocomplete="nope"
            id="email"
            v-model="email"
            placeholder="E-mail"
            :state="errors[0] ? false : valid ? true : null"
          ></b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider
        name="Password"
        rules="required"
        v-slot="{ errors, valid }"
      >
        <b-form-group id="password" label="Password:" label-for="password">
          <b-form-input
            id="password"
            v-model="password"
            placeholder="Password"
            :state="errors[0] ? false : valid ? true : null"
            type="password"
          ></b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <b-button-group class="w-100">
        <b-button type="submit" variant="outline-primary">Sign In</b-button>
        <b-button variant="outline-secondary" @click="handleClickSignUp"
          >Sign Up</b-button
        ></b-button-group
      >
    </b-form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {},
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

<style scoped>
.form {
  min-width: 300px;
}
</style>
