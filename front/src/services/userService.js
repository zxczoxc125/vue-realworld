import axios from 'axios';

export const registration = (user) => axios.post('/api/users', { user });

export const authentication = (user) =>
  axios.post('/api/users/login', { user });

export const getCurrentUser = () => axios.get('/api/user');
