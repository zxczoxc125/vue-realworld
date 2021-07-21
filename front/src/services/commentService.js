import axios from 'axios';

export const addCommentsToAnArticle = (slug, comment) =>
  axios.post(`/api/articles/${slug}/comments`, { comment });

export const getCommentsFromAnArticle = (slug) =>
  axios.get(`/api/articles/${slug}/comments`);
