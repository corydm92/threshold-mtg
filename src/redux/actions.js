import {
  FETCH_CARD_DATA_SUCCESSFUL,
  FETCH_CARD_DATA_FAILED,
  IS_LOADING,
  SET_SPEC_PRICES_SUCCESSFUL,
  SET_SPEC_PRICES_FAILED,
} from './actionTypes';
import axios from 'axios';

const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const isLoading = (isTrue) => {
  return { type: IS_LOADING, payload: isTrue };
};

// Intermediary action creator
export const fetchCards = (params) => (dispatch) => {
  // Other operations here
  dispatch(isLoading(true));
  dispatch(fetchCardsData(params));
};

// Fetches all card data
export const fetchCardsData = (params = '/?limit=10000') => (dispatch) => {
  axios
    .get(REACT_APP_BASE_API_URL + params)
    .then((res) => {
      dispatch({ type: FETCH_CARD_DATA_SUCCESSFUL, payload: res.data.results });
      dispatch(isLoading(false));
    })
    .catch((err) => {
      dispatch({ type: FETCH_CARD_DATA_FAILED, payload: err });
      dispatch(isLoading(false));
    });
};

export const setSpecPricesSuccessful = (specPrices) => {
  return { type: SET_SPEC_PRICES_SUCCESSFUL, payload: specPrices };
};

export const setSpecPricesFailed = () => {
  return { type: SET_SPEC_PRICES_FAILED };
};
