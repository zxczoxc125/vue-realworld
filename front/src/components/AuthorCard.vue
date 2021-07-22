<template>
  <b-card no-body class="border-0" :bg-variant="bgVariant">
    <b-card-body class="p-0">
      <b-avatar class="mr-3" :src="author.image"></b-avatar>
      <span class="mr-auto">{{ author.username }}</span>
      <b-button class="float-right" title="More Info" variant="light">
        <b-icon icon="three-dots-vertical" aria-hidden="true"></b-icon>
      </b-button> </b-card-body
  ></b-card>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
    bgVariant: {
      type: String,
      default: 'light',
    },
  },
};
</script>

<style scoped></style>
