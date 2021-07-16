<template>
  <ValidationProvider
    :rules="$attrs.rules"
    :vid="$attrs.id"
    :name="$attrs.name"
    v-slot="{ errors, valid }"
  >
    <b-form-group :label="$attrs.label" :id="$attrs.id">
      <b-form-input
        :value="value"
        @input="handleOnInput"
        :placeholder="$attrs.name"
        :id="$attrs.id"
        :name="$attrs.name"
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
    value: {
      type: null,
    },
  },
  methods: {
    handleOnInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped></style>
