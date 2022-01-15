import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config: any) => {
  const state: any = store.getState();
  const token = state.auth?.tokenData?.token;

  if (token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return config;
});

export default api;
