<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(onSubmit)" class="form">
      <TextInputWithValidation
        name="E-mail"
        id="email"
        rules="required|email"
        label="E-mail:"
        autocomplete="nope"
        :initValue="email"
      />

      <TextInputWithValidation
        name="Username"
        id="username"
        rules="required"
        label="Username:"
        autocomplete="nope"
        :initValue="username"
      />

      <TextInputWithValidation
        name="Password"
        id="password"
        rules="required"
        label="Password:"
        type="password"
      />

      <TextInputWithValidation
        name="Password Confirm"
        id="passwordConfirm"
        rules="required|confirmed:password"
        label="Password Confirm:"
        type="password"
      />

      <b-button-group class="w-100">
        <b-button type="submit" variant="outline-primary">Sign In</b-button>
        <b-button variant="outline-danger" @click="handleClickCancel"
          >Cancel</b-button
        ></b-button-group
      >
    </b-form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import TextInputWithValidation from '../FormItem/TextInputWithValidation.vue';

export default {
  components: {
    ValidationObserver,
    TextInputWithValidation,
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      passwordColnfirm: '',
    };
  },
  methods: {
    onSubmit() {},
    handleClickCancel() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.form {
  min-width: 300px;
}
</style>
