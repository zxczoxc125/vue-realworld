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

export default {
  components: {
    ArticleForm,
    Article,
  },
  data() {
    return {
      articleList: [
        {
          slug: 'how-to-train-your-dragon',
          title: 'How to train your dragon',
          description: 'Ever wonder how?',
          body: 'It takes a Jacobian',
          tagList: ['dragons', 'training'],
          createdAt: '2016-02-18T03:22:56.637Z',
          updatedAt: '2016-02-18T03:48:35.824Z',
          favorited: false,
          favoritesCount: 0,
          author: {
            username: 'jake',
            bio: 'I work at statefarm',
            image: 'https://i.stack.imgur.com/xHWG8.jpg',
            following: false,
          },
        },
      ],
    };
  },
  methods: {
    handleOnCreateArticle(article) {
      this.articleList.unshift(article);
    },
  },
};
</script>

<style scoped></style>
