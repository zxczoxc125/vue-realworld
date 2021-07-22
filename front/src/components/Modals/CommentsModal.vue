<template>
  <b-modal
    id="comments"
    :visible="show"
    centered
    scrollable
    @hide="handleHide"
  >
    <template #modal-title>
      Comments
    </template>

    <!-- TODO: 댓글 제한 + 댓글 더보기 구현 -->
    <b-list-group>
      <b-list-group-item v-for="comment of comments" :key="comment.id">
        <AuthorCard :author="comment.author" bgVariant="default" />

        <b-card-text class="mt-2 mb-0">
          {{ comment.body }}
        </b-card-text>

        <div class="float-right text-right">
          <b-card-text class="text-black-50 m-1"
            >created {{ comment.createdAt | commonDate }}</b-card-text
          >
        </div>
      </b-list-group-item>
    </b-list-group>

    <template #modal-footer>
      <CommentForm :slug="article.slug" @addComments="handleAddComments" />
    </template>
  </b-modal>
</template>

<script>
import CommentForm from '../Forms/CommentForm.vue';
import AuthorCard from '../AuthorCard.vue';

export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
    article: {
      type: Object,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    CommentForm,
    AuthorCard,
  },
  methods: {
    handleHide() {
      this.$emit('update:comments', []);
      this.$emit('update:article', {});
      this.$emit('update:show', false);
    },
    handleAddComments(comment) {
      this.$emit('update:comments', [comment, ...this.comments]);
    },
  },
};
</script>

<style scoped></style>
