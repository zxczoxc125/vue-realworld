<template>
  <div
    class="w-100 h-100 d-flex align-items-center align-items-center justify-content-center"
  >
    <SignInForm />
  </div>
</template>

<script>
import SignInForm from '../components/Form/SignInForm.vue';

export default {
  components: {
    SignInForm,
  },
};
</script>

<style scoped></style>
