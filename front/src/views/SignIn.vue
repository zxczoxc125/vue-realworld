<template>
  <Page>
    <SignInForm />
  </Page>
</template>

<script>
import SignInForm from '../components/Form/SignInForm.vue';
import Page from '../components/Layout/Page.vue';

export default {
  components: {
    SignInForm,
    Page,
  },
};
</script>

<style scoped></style>
