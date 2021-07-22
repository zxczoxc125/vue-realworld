<template>
  <ValidationProvider
    :rules="$attrs.rules"
    :vid="$attrs.id"
    :name="$attrs.name"
    v-slot="{ errors, touched }"
  >
    <b-form-group :label="$attrs.label">
      <b-form-textarea
        :value="value"
        @input="handleInput"
        :placeholder="$attrs.name"
        :id="$attrs.id"
        :name="$attrs.name"
        :state="errors[0] ? false : touched ? true : null"
        autocomplete="nope"
      ></b-form-textarea>
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
    handleInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped></style>
