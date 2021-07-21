<template>
  <b-card
    :title="article.title"
    :sub-title="article.description"
    header-tag="header"
    footer-tag="footer"
  >
    <template #header>
      <!-- TODO: 별도 컴포넌트로 분리 -> comment modal에서 재사용 -->
      <b-avatar class="mr-3" :src="article.author.image"></b-avatar>
      <span class="mr-auto">{{ article.author.username }}</span>
      <b-button class="float-right" title="More Info" variant="light">
        <b-icon icon="three-dots-vertical" aria-hidden="true"></b-icon>
      </b-button>
    </template>

    <b-card-text class="mt-4">{{ article.body }}</b-card-text>

    <button
      v-for="tag in article.tagList"
      :key="tag"
      class="btn btn-secondary btn-sm m-1"
    >
      # {{ tag }}
    </button>

    <hr />

    <b-button title="Favorite" variant="light">
      <b-icon
        v-if="!article.favorited"
        icon="heart"
        aria-hidden="true"
        @click="handleOnClickFavorite(true)"
      ></b-icon>
      <b-icon
        v-else
        icon="heart-fill"
        aria-hidden="true"
        class="text-danger"
        @click="handleOnClickFavorite(false)"
      ></b-icon>
    </b-button>

    <span>{{ article.favoritesCount }} favorites</span>

    <div class="float-right text-right">
      <b-card-text class="text-black-50 m-1"
        >created {{ article.createdAt | commonDate }}</b-card-text
      >
      <b-card-text class="text-black-50 m-1"
        >updated {{ article.updatedAt | commonDate }}</b-card-text
      >
    </div>

    <template #footer>
      <b-button
        variant="light"
        class="text-black-50 w-100"
        @click="handleOnClickComments"
        >Show Comments..</b-button
      >
    </template>
  </b-card>
</template>

<script>
import { deleteArticle, favoriteArticle } from '../services/articleService';

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async handleOnClickFavorite(favorite) {
      const {
        data: { article },
      } = favorite
        ? await favoriteArticle(this.article.slug)
        : await deleteArticle(this.article.slug);

      this.$emit('update:article', article);
    },
    handleOnClickComments() {
      this.$emit('openCommentsModal', this.article);
    },
  },
};
</script>

<style scoped></style>
