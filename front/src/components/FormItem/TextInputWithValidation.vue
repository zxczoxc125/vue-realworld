<template>
  <ValidationProvider
    v-bind="$attrs"
    :vid="$attrs.id"
    v-slot="{ errors, valid }"
  >
    <b-form-group v-bind="$attrs">
      <b-form-input
        v-bind="$attrs"
        v-model="value"
        :placeholder="$attrs.name"
        :state="errors[0] ? false : valid ? true : null"
      ></b-form-input>
      <b-form-invalid-feedback>
        {{ errors[0] }}
      </b-form-invalid-feedback>
    </b-form-group>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationProvider,
  },
  props: {
    initValue: {
      type: null,
    },
  },
  data() {
    return {
      value: this.initValue,
    };
  },
};
</script>

<style scoped></style>
