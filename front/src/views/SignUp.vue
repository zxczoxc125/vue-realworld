<template>
  <Page>
    <SignUpForm />
  </Page>
</template>

<script>
import SignUpForm from '../components/Form/SignUpForm.vue';
import Page from '../components/Layout/Page.vue';

export default {
  components: {
    SignUpForm,
    Page,
  },
};
</script>

<style scoped></style>
