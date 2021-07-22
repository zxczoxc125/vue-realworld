<template>
  <b-container class="d-flex justify-content-center mt-4">
    <b-col sm="8">
      <ArticleForm @createArticle="handleOnCreateArticle" />

      <hr />

      <Article
        v-for="(article, index) of articles"
        :key="article.slug"
        :article.sync="articles[index]"
        class="mb-2"
        @openCommentsModal="handleOnOpenCommentsModal"
      />

      <CommentsModal
        v-if="selectedArticle.slug"
        :comments.sync="comments"
        :article.sync="selectedArticle"
        :show.sync="showCommentsModal"
      />
    </b-col>
  </b-container>
</template>

<script>
import ArticleForm from '../components/Forms/ArticleForm.vue';
import Article from '../components/Article.vue';
import { listArticles } from '../services/articleService';
import CommentsModal from '../components/Modals/CommentsModal.vue';
import { getCommentsFromAnArticle } from '../services/commentService';

export default {
  components: {
    ArticleForm,
    Article,
    CommentsModal,
  },
  data() {
    return {
      articles: [],
      selectedArticle: {},
      showCommentsModal: false,
      comments: [],
    };
  },
  methods: {
    handleOnCreateArticle(article) {
      this.articles.unshift(article);
    },
    // TODO: 에러처리, multiple call 등 여러가지 생각해보기
    async listArticles() {
      const {
        data: { articles },
      } = await listArticles();

      this.articles = articles;
    },
    async handleOnOpenCommentsModal(article) {
      const {
        data: { comments },
      } = await getCommentsFromAnArticle(article.slug);

      this.comments = comments;
      this.selectedArticle = article;
      this.showCommentsModal = true;
    },
  },
  created() {
    this.listArticles();
  },
};
</script>

<style scoped></style>
