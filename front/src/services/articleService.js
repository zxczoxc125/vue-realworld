import axios from 'axios';

export const createArticle = (article) =>
  axios.post('/api/articles', { article });

export const listArticles = (article) =>
  axios.get('/api/articles', { params: { limit: 20, ...article } });
