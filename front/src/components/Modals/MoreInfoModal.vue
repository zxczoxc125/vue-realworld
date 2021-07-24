<template>
  <b-modal
    :visible="show"
    centered
    @hide="handleHide"
    hide-header
    hide-footer
    body-class="p-0"
  >
    <ButtonGroup
      v-if="author.username === user.username"
      :actions="articleActions"
      :handleCkickCancel="handleHide"
    />
    <ButtonGroup
      v-else
      :actions="followActions"
      :handleCkickCancel="handleHide"
    />
  </b-modal>
</template>

<script>
import { mapState } from 'vuex';
import { followUser, unfollowUser } from '../../services/userService';
import ButtonGroup from '../ButtonGroup.vue';

export default {
  components: {
    ButtonGroup,
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
  data() {
    return {
      articleActions: [
        { text: 'Update', handler: () => {} },
        { text: 'Delete', handler: () => {}, class: 'text-danger' },
      ],
    };
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
  },
  computed: {
    followActions() {
      return this.author.following
        ? [
            {
              text: 'Unfollow',
              handler: () => this.handleClickFollow(false),
              class: 'text-danger',
            },
          ]
        : [{ text: 'Follow', handler: () => this.handleClickFollow(true) }];
    },
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
};
</script>

<style scoped></style>
