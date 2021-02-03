import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '18800826-dac8e8a4f07b5aa1d9a1979b8';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const getImagesData = async (q, page) => {
  try {
    const { data } = await axios.get('', {
      params: { q, page },
    });

    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const apiRes = {
  getImagesData,
};

export default apiRes;
