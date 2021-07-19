import createLogger from 'vuex/dist/logger';
import Vuex from 'vuex';
import user from './modules/user';

const store = new Vuex.Store({
  modules: {
    user,
  },
  plugins: [createLogger()],
});

export default store;
