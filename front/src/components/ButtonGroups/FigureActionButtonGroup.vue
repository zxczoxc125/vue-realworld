<template>
  <b-button-group vertical class="w-100">
    <b-button @click="handleClickUpdate" variant="light">Update</b-button>
    <b-button @click="handleClickDelete" variant="light" class="text-danger"
      >Delete</b-button
    >
    <b-button @click="handleHide" variant="light" class="text-danger"
      >Cancel</b-button
    >
  </b-button-group>
</template>

<script>
export default {
  props: {
    handleClickUpdate: {
      type: Function,
      required: true,
    },
    handleClickDelete: {
      type: Function,
      required: true,
    },
    handleHide: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped></style>
