<template>
  <Page>
    <SignInForm />
  </Page>
</template>

<script>
import SignInForm from '../components/Forms/SignInForm.vue';
import Page from '../components/Layouts/Page.vue';

export default {
  components: {
    SignInForm,
    Page,
  },
};
</script>

<style scoped></style>
