<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(onSubmit)" class="form">
      <TextInputWithValidation
        name="E-mail"
        id="email"
        rules="required|email"
        label="E-mail:"
        autocomplete="nope"
        v-model="email"
      />

      <TextInputWithValidation
        name="Username"
        id="username"
        rules="required"
        label="Username:"
        autocomplete="nope"
        v-model="username"
      />

      <TextInputWithValidation
        name="Password"
        id="password"
        rules="required"
        label="Password:"
        type="password"
        v-model="password"
      />

      <TextInputWithValidation
        name="Password Confirm"
        id="passwordConfirm"
        rules="required|confirmed:password"
        label="Password Confirm:"
        type="password"
        v-model="passwordConfirm"
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
import { registration } from '../../services/userService';
import { makeToast } from '../../utils/commonUtil';

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
      passwordConfirm: '',
    };
  },
  methods: {
    async onSubmit() {
      const { email, username, password } = this;
      try {
        await registration({ email, username, password });
        makeToast({ variant: 'success', body: 'Welcome!' });
        this.$router.push('/');
      } catch (e) {
        makeToast({ variant: 'danger', body: e.response.status });
      }
    },
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
