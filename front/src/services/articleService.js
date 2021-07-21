import axios from 'axios';

export const createArticle = (article) =>
  axios.post('/api/articles', { article });

export const listArticles = (article) =>
  axios.get('/api/articles', { params: { limit: 20, ...article } });

export const favoriteArticle = (slug) =>
  axios.post(`/api/articles/${slug}/favorite`);

export const deleteArticle = (slug) =>
  axios.delete(`/api/articles/${slug}/favorite`);
