import axios from 'axios';
const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const axiosGET = (params = '/?limit=100000') => {
  return axios.get(REACT_APP_BASE_API_URL + params);
};
