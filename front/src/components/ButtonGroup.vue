<template>
  <b-button-group vertical class="w-100">
    <b-button
      v-for="action of actions"
      :key="action.text"
      @click="action.handler"
      variant="light"
      :class="action.class"
      >{{ action.text }}</b-button
    >
    <b-button @click="handleCkickCancel" variant="light" class="text-danger"
      >Cancel</b-button
    >
  </b-button-group>
</template>

<script>
export default {
  props: {
    actions: {
      type: Array,
      required: true,
      default: () => [],
    },
    handleCkickCancel: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style scoped></style>
