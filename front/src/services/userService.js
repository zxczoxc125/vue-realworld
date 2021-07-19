import axios from 'axios';

export const registration = (user) => axios.post('/api/users', { user });
