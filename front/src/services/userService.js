import axios from 'axios';

export const registration = (user) => axios.post('/api/users', { user });

export const authentication = (user) =>
  axios.post('/api/users/login', { user });

export const getCurrentUser = () => axios.get('/api/user');

export const followUser = (username) =>
  axios.post(`/api/profiles/${username}/follow`);

export const unfollowUser = (username) =>
  axios.delete(`/api/profiles/${username}/follow`);
