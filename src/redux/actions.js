import {
  FETCH_CARDS_DATA_SUCCESSFUL,
  FETCH_CARDS_DATA_FAILED,
  IS_LOADING,
  SET_SPEC_PRICES_SUCCESSFUL,
  SET_TCG_PRICES_SUCCESSFUL,
  SET_SPEC_PRICES_FAILED,
  SET_TCG_PRICES_FAILED,
} from './actionTypes';
import axios from 'axios';
import singleResultMock from '../js/constants/singleResultMock';
import cardsNormalizr from '../normalizr/cardsNormalizr';
import cardNormalizr from '../normalizr/cardNormalizr';

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
export const fetchCardsData = (params = '/?limit=10') => (dispatch) => {
  axios
    .get(REACT_APP_BASE_API_URL + params)
    .then((res) => {
      // Input JSON (or plain JS object) data that needs normalization.
      const normalizedResponse = cardsNormalizr(res.data.results);
      dispatch({
        type: FETCH_CARDS_DATA_SUCCESSFUL,
        payload: normalizedResponse,
      });
      dispatch(isLoading(false));
    })
    .catch((err) => {
      dispatch({ type: FETCH_CARDS_DATA_FAILED, payload: err });
      dispatch(isLoading(false));
    });
};

export const setSingleCard = (id) => (dispatch, getState) => {
  // Logic to check if we have entities for our cards, if not we need to make a fetch to get card data
  // Actually, lets create an intermediary action that dispatches a SET or FETCH
  //
  // const normalizedResponse = cardNormalizr(singleResultMock);
  // This needs its own action type
  // dispatch({ type: FETCH_CARDS_DATA_SUCCESSFUL, payload: normalizedResponse });
};

export const setSpecPricesSuccessful = (specPrices) => {
  return { type: SET_SPEC_PRICES_SUCCESSFUL, payload: specPrices };
};

export const setSpecPricesFailed = () => {
  return { type: SET_SPEC_PRICES_FAILED };
};

export const setTcgPricesSuccessful = (tcgPrices) => {
  return { type: SET_TCG_PRICES_SUCCESSFUL, payload: tcgPrices };
};

export const setTcgPricesFailed = () => {
  return { type: SET_TCG_PRICES_FAILED };
};
