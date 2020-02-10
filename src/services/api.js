import axios from 'axios';

const baseURL = 'https://www.mocky.io/v2/';

const api = axios.create({
  baseURL
});

export default api;
