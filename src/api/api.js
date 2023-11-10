import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

const instance = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'ko',
  },
});

export default instance;
