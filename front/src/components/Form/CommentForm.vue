<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(onSubmit)">
      <TextAreaWithValidation
        name="Comment"
        id="comment"
        rules="required"
        label="Comment:"
        v-model="body"
      />

      <b-button class="float-right" type="submit" variant="outline-primary"
        >Submit</b-button
      >
    </b-form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import TextAreaWithValidation from '../FormItem/TextAreaWithValidation.vue';
import { addCommentsToAnArticle } from '../../services/commentService';

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  components: {
    TextAreaWithValidation,
    ValidationObserver,
  },
  data() {
    return {
      body: '',
    };
  },
  methods: {
    async onSubmit() {
      const { body } = this;

      try {
        const comment = { body };

        await addCommentsToAnArticle(this.slug, comment);
        this.resetForm();
        this.$root.$bvToast.toast('Success!', {
          title: 'SUCCESS',
          variant: 'success',
          solid: true,
        });
      } catch (e) {
        this.$root.$bvToast.toast(e.response.status, {
          title: 'DANGER',
          variant: 'danger',
          solid: true,
        });
      }
    },
    resetForm() {
      this.body = '';
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
  },
};
</script>

<style scoped></style>
