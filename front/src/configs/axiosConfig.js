import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const setAuthHeader = (token) => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Token ${token}`;
      return config;
    },
    (error) => Promise.reject(error),
  );
};

export const resetHeader = () => {
  axios.interceptors.request.use(
    (config) => {
      delete config.headers.Authorization;
      return config;
    },
    (error) => Promise.reject(error),
  );
};
