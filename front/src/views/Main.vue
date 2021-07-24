<template>
  <b-container class="d-flex justify-content-center mt-4">
    <b-col sm="8">
      <ArticleForm @createArticle="handleCreateArticle" />

      <hr />

      <Article
        v-for="(article, index) of articles"
        :key="article.slug"
        :article.sync="articles[index]"
        class="mb-2"
        @clickComments="handleClickComments"
        @clickMoreInfo="handleClickMoreInfo"
      />

      <CommentsModal
        v-if="selectedArticle.slug"
        :comments.sync="comments"
        :article.sync="selectedArticle"
        :show.sync="showCommentsModal"
        @clickMoreInfo="handleClickMoreInfo"
      />

      <MoreInfoModal
        :show.sync="showMoreInfoModal"
        :author.sync="selectedAuthor"
        :articles.sync="articles"
        :comments.sync="comments"
      />
    </b-col>
  </b-container>
</template>

<script>
import ArticleForm from '../components/Forms/ArticleForm.vue';
import Article from '../components/Article.vue';
import { listArticles } from '../services/articleService';
import CommentsModal from '../components/Modals/CommentsModal.vue';
import MoreInfoModal from '../components/Modals/MoreInfoModal.vue';
import { getCommentsFromAnArticle } from '../services/commentService';

export default {
  components: {
    ArticleForm,
    Article,
    CommentsModal,
    MoreInfoModal,
  },
  data() {
    return {
      articles: [],
      selectedArticle: {},
      showCommentsModal: false,
      comments: [],
      showMoreInfoModal: false,
      selectedAuthor: {},
    };
  },
  methods: {
    handleCreateArticle(article) {
      this.articles.unshift(article);
    },
    async listArticles() {
      const {
        data: { articles },
      } = await listArticles();

      this.articles = articles;
    },
    async handleClickComments(article) {
      const {
        data: { comments },
      } = await getCommentsFromAnArticle(article.slug);

      this.comments = comments;
      this.selectedArticle = article;
      this.showCommentsModal = true;
    },
    handleClickMoreInfo(author) {
      this.showMoreInfoModal = true;
      this.selectedAuthor = author;
    },
  },
  created() {
    this.listArticles();
  },
};
</script>

<style scoped></style>
