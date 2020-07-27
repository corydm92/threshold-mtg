import {
  FETCH_CARD_DATA,
  FETCH_CARD_DATA_SUCCESSFUL,
  FETCH_CARD_DATA_FAILED,
} from './actionTypes';
import axios from 'axios';

const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

// Fetches all card data
export const fetchCardsData = () => (dispatch) => {
  axios.get(REACT_APP_BASE_API_URL).then((res) => {
    dispatch({ type: FETCH_CARD_DATA_SUCCESSFUL, payload: res });
  });
};
