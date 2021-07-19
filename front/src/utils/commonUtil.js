import { resetHeader } from '../configs/axiosConfig';
import { STORAGE_KEY } from '../constants/constants';

export const resetAuth = () => {
  localStorage.removeItem(STORAGE_KEY);
  resetHeader();
};
