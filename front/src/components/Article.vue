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
      <b-icon v-if="article.favorited" icon="heart" aria-hidden="true"></b-icon>
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
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <TextAreaWithValidation
            name="Comment"
            id="comment"
            rules="required"
            label="Comment:"
            v-model="comment"
          />

          <b-button class="float-right" type="submit" variant="outline-primary"
            >Submit</b-button
          >
        </b-form>
      </ValidationObserver>
    </template>
  </b-card>
</template>

<script>
// TODO: 컴포넌트 분리 생각해보기
import { ValidationObserver } from 'vee-validate';
import TextAreaWithValidation from './FormItem/TextAreaWithValidation.vue';

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  components: {
    TextAreaWithValidation,
    ValidationObserver,
  },
  data() {
    return {
      comment: '',
    };
  },
  methods: {
    async onSubmit() {
      const { comment } = this;

      // try {
      //   const article = { title, description, body, tagList };

      //   await createArticle(article);
      //   this.resetForm();
      //   this.$emit('createArticle', article);
      // } catch (e) {
      //   this.$root.$bvToast.toast(e.response.status, {
      //     title: 'DANGER',
      //     variant: 'danger',
      //     solid: true,
      //   });
      // }
    },
  },
};
</script>

<style scoped></style>
