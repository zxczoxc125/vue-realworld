import { vm } from '../main';

export const makeToast = ({ variant = 'default', body }) => {
  vm.$bvToast.toast(body, {
    title: variant.toUpperCase(),
    variant,
    solid: true,
  });
};
