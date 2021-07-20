import axios from 'axios';

export const createArticle = (article) =>
  axios.post('/api/articles', { article });
