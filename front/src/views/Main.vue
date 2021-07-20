<template>
  <b-container class="d-flex justify-content-center mt-4">
    <b-col sm="8">
      <ArticleForm />
    </b-col>
  </b-container>
</template>

<script>
import ArticleForm from '../components/Form/ArticleForm.vue';

export default {
  components: {
    ArticleForm,
  },
};
</script>

<style scoped></style>
