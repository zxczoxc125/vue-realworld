<template>
  <b-card
    :title="article.title"
    :sub-title="article.description"
    header-tag="header"
    footer-tag="footer"
  >
    <template #header>
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
      ></b-icon>
      <b-icon
        v-else
        icon="heart-fill"
        aria-hidden="true"
        class="text-danger"
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
      <CommentForm :slug="article.slug" />
    </template>
  </b-card>
</template>

<script>
import CommentForm from './Form/CommentForm.vue';

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  components: {
    CommentForm,
  },
};
</script>

<style scoped></style>
