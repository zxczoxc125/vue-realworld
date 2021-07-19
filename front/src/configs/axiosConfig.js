import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const setAuth = (token) => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Token ${token}`;
      return config;
    },
    (error) => Promise.reject(error),
  );
};
