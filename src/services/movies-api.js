import axios from 'axios';

const API_KEY = 'aa988e26d1d68f59e9b520c570cc00f9';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get('trending/movie/day');

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieQuery = async query => {
  try {
    const { data } = await axios.get(`search/movie/`, {
      params: { query: query, page: 1, include_adult: false },
    });

    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieDetails = async id => {
  try {
    const { data } = await axios.get(`movie/${id}`, {
      params: { id },
    });

    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getActorsCast = async id => {
  try {
    const { data } = await axios.get(`movie/${id}/credits`, {
      params: { id },
    });

    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieReviews = async id => {
  try {
    const { data } = await axios.get(`movie/${id}/reviews`, {
      params: { id, page: 1 },
    });

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const apiRes = {
  getTrendingMovies,
  getMovieQuery,
  getMovieDetails,
  getActorsCast,
  getMovieReviews,
};

export default apiRes;
