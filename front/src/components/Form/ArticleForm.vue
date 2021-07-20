<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(onSubmit)" @reset="resetForm">
      <TextInputWithValidation
        name="Title"
        id="title"
        rules="required"
        label="Title:"
        v-model="title"
      />

      <TextInputWithValidation
        name="Description"
        id="description"
        rules="required"
        label="Description:"
        v-model="description"
      />

      <TextAreaWithValidation
        name="Body"
        id="body"
        rules="required"
        label="Body:"
        v-model="body"
      />

      <b-form-group label="Tag:">
        <b-form-input
          placeholder="Tag"
          name="Tag"
          id="tag"
          @keydown.native.enter.prevent="handleOnKeyDownTag"
          autocomplete="nope"
          v-model="tag"
        ></b-form-input>
      </b-form-group>

      <button
        v-for="tag in tagList"
        :key="tag"
        class="btn btn-secondary btn-sm m-1 mb-3"
        type="button"
        @click="handleOnClickTag(tag)"
      >
        # {{ tag }}
        <b-icon icon="x" aria-hidden="true"></b-icon>
      </button>

      <b-button-group class="w-100">
        <b-button type="submit" variant="outline-primary">Submit</b-button>
        <b-button type="reset" variant="outline-danger"
          >Cancel</b-button
        ></b-button-group
      >
    </b-form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import TextInputWithValidation from '../FormItem/TextInputWithValidation.vue';
import TextAreaWithValidation from '../FormItem/TextAreaWithValidation.vue';
import { createArticle } from '../../services/articleService';

export default {
  components: {
    ValidationObserver,
    TextInputWithValidation,
    TextAreaWithValidation,
  },
  data() {
    return {
      title: '',
      description: '',
      body: '',
      tag: '',
      tagList: [],
    };
  },
  methods: {
    async onSubmit() {
      const { title, description, body, tagList } = this;

      try {
        const article = { title, description, body, tagList };

        await createArticle(article);
        this.resetForm();
        this.$emit('createArticle', article);
      } catch (e) {
        this.$root.$bvToast.toast(e.response.status, {
          title: 'DANGER',
          variant: 'danger',
          solid: true,
        });
      }
    },
    resetForm() {
      this.title = '';
      this.description = '';
      this.body = '';
      this.tag = '';
      this.tagList = [];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
    handleOnKeyDownTag() {
      if (!!this.tag && !this.tagList.find((tag) => this.tag === tag)) {
        this.tagList.push(this.tag);
        this.tag = '';
      }
    },
    handleOnClickTag(tag) {
      this.tagList = this.tagList.filter((orgTag) => orgTag !== tag);
    },
  },
};
</script>

<style scoped></style>
