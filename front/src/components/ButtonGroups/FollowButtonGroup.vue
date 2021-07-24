<template>
  <b-button-group vertical class="w-100">
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
      class="text-danger"
      >Unfollow</b-button
    >
    <b-button @click="handleCkickCancel" variant="light" class="text-danger"
      >Cancel</b-button
    >
  </b-button-group>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
    handleClickFollow: {
      type: Function,
      required: true,
    },
    handleCkickCancel: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped></style>
