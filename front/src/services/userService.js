import axios from 'axios';

export const registration = (user) => axios.post('/api/users', { user });

export const authentication = (user) =>
  axios.post('/api/users/login', { user });
