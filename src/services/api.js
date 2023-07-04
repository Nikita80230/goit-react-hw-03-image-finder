import axios from 'axios';

const BASE_URl = 'https://pixabay.com/api/';
const API_KEY = '33932006-79f38c9b6065fca1824d3cdc5';

axios.defaults.baseURL = BASE_URl;

export async function getData(input, page) {
  const params = {
    key: API_KEY,
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page: page,
  };
  return await axios.get('/', { params });
}
