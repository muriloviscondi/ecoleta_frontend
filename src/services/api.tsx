import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecoleta-nlw.herokuapp.com/'
})

export default api;
