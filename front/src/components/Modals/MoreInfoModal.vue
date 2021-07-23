<template>
  <b-modal
    :visible="show"
    centered
    @hide="handleHide"
    hide-header
    hide-footer
    body-class="p-0"
  >
    <FigureActionButtonGroup
      v-if="author.username === user.username"
      :handleClickUpdate="handleClickUpdate"
      :handleClickDelete="handleClickDelete"
      :handleHide="handleHide"
    />

    <FollowButtonGroup
      v-else
      :author="author"
      :handleClickFollow="handleClickFollow"
      :handleHide="handleHide"
    />
  </b-modal>
</template>

<script>
import { mapState } from 'vuex';
import FigureActionButtonGroup from '../ButtonGroups/FigureActionButtonGroup.vue';
import FollowButtonGroup from '../ButtonGroups/FollowButtonGroup.vue';
import { followUser, unfollowUser } from '../../services/userService';

export default {
  components: {
    FigureActionButtonGroup,
    FollowButtonGroup,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
    comments: {
      type: Array,
      required: true,
      default: () => [],
    },
    articles: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    handleHide() {
      this.$emit('update:show', false);
    },
    async handleClickFollow(follow) {
      const {
        data: { profile },
      } = follow
        ? await followUser(this.author.username)
        : await unfollowUser(this.author.username);

      this.$emit('update:author', profile);
      // FIXME: 코드정리
      this.$emit(
        'update:articles',
        this.articles.map((article) => {
          return article.author.username === profile.username
            ? { ...article, author: profile }
            : article;
        }),
      );
      this.$emit(
        'update:comments',
        this.comments.map((comment) => {
          return comment.author.username === profile.username
            ? { ...comment, author: profile }
            : comment;
        }),
      );
    },
    handleClickUpdate() {},
    handleClickDelete() {},
  },
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
};
</script>

<style scoped></style>
