<template>
  <b-modal
    id="comments"
    :visible="show"
    centered
    scrollable
    @hide="handleOnHide"
  >
    <template #modal-title>
      Comments
    </template>

    <!-- TODO: 댓글 제한 + 댓글 더보기 구현 -->
    <b-list-group>
      <b-list-group-item v-for="comment of comments" :key="comment.id">{{
        comment.body
      }}</b-list-group-item>
    </b-list-group>

    <template #modal-footer>
      <CommentForm :slug="article.slug" @addComments="handleOnAddComments" />
    </template>
  </b-modal>
</template>

<script>
import CommentForm from '../Form/CommentForm.vue';

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
  },
  methods: {
    handleOnHide() {
      this.$emit('update:comments', []);
      this.$emit('update:article', {});
      this.$emit('update:show', false);
    },
    handleOnAddComments(comment) {
      this.$emit('update:comments', [comment, ...this.comments]);
    },
  },
};
</script>

<style scoped></style>
