import router from '../../plugins/vue-router';
import { authentication } from '../../services/userService';

const user = {
  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, { email, token, username }) {
      state.user = { email, token, username };
    },
  },
  actions: {
    async AUTHENTICATION({ commit }, { email, password }) {
      try {
        const { data } = await authentication({ email, password });
        this._vm.$bvToast.toast('Welcome!', {
          title: 'SUCCESS',
          variant: 'success',
          solid: true,
        });
        router.push('/main');
        commit('SET_USER', data);
      } catch (e) {
        this._vm.$bvToast.toast(e.response.status, {
          title: 'DANGER',
          variant: 'danger',
          solid: true,
        });
      }
    },
  },
};

export default user;
