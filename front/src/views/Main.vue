<template>
  <b-container class="d-flex justify-content-center mt-4">
    <b-col sm="8">
      <ArticleForm @createArticle="handleOnCreateArticle" />

      <hr />

      <Article
        v-for="article of articleList"
        :key="article.slug"
        :article="article"
        class="mb-2"
      />
    </b-col>
  </b-container>
</template>

<script>
import ArticleForm from '../components/Form/ArticleForm.vue';
import Article from '../components/Article.vue';
import { listArticles } from '../services/articleService';

export default {
  components: {
    ArticleForm,
    Article,
  },
  data() {
    return {
      articleList: [],
    };
  },
  methods: {
    handleOnCreateArticle(article) {
      this.articleList.unshift(article);
    },
    // TODO: 에러처리, multiple call 등 여러가지 생각해보기
    async listArticles() {
      const {
        data: { articles },
      } = await listArticles();

      this.articleList = articles;
    },
  },
  created() {
    this.listArticles();
  },
};
</script>

<style scoped></style>
