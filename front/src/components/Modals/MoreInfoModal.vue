<template>
  <b-modal
    :visible="show"
    centered
    @hide="handleHide"
    hide-header
    hide-footer
    body-class="p-0"
  >
    <b-button-group vertical class="w-100">
      <!-- TODO: 다른 옵션 -->
      <b-button
        v-if="!author.following"
        @click="handleClickFollow(true)"
        variant="light"
        >Follow</b-button
      >
      <b-button
        v-else
        @click="handleClickFollow(false)"
        variant="light"
        class="text-warning"
        >Unfollow</b-button
      >
      <b-button @click="handleHide" variant="light" class="text-danger"
        >Cancel</b-button
      >
    </b-button-group>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex';
import { followUser, unfollowUser } from '../../services/userService';

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    author: {
      type: Object,
      required: true,
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
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
};
</script>

<style scoped></style>
