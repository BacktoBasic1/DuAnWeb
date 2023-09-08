import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

const api = axios.create({
  baseURL: 'https://web-server-ck1r.onrender.com',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
