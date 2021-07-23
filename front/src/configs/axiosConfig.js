import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const setAuthHeader = (token) => {
  axios.defaults.headers.Authorization = `Token ${token}`;
};

export const resetHeader = () => {
  delete axios.defaults.headers.Authorization;
};
