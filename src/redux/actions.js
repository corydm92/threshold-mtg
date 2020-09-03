import {
  FETCH_CARDS_DATA_SUCCESSFUL,
  FETCH_CARDS_DATA_FAILED,
  FETCH_CARD_DATA_SUCCESSFUL,
  FETCH_CARD_DATA_FAILED,
  SET_CARD_DATA_SUCCESSFUL,
  SET_CARD_DATA_FAILED,
  SET_FILTER_OPTIONS,
  CLEAR_FILTER_OPTIONS,
  IS_LOADING_CARDS_TRUE,
  IS_LOADING_CARDS_FALSE,
  IS_LOADING_CARD_TRUE,
  IS_LOADING_CARD_FALSE,
  SET_SPEC_PRICES_SUCCESSFUL,
  // SET_SPEC_PRICES_FAILED,
  SET_TCG_PRICES_SUCCESSFUL,
  // SET_TCG_PRICES_FAILED,
  SET_PRICE_CATEGORY_LOW,
  SET_PRICE_CATEGORY_MID,
  SET_PRICE_CATEGORY_HIGH,
  SET_PRICE_CATEGORY_MARKET,
} from './actionTypes';

import { axiosGET } from '../axios';

import { isEmpty } from 'lodash';

import cardsNormalizr from '../normalizr/cardsNormalizr';
import cardNormalizr from '../normalizr/cardNormalizr';

/*** CARD(S) ***/

// Intermediary action creator
export const fetchCards = (params) => (dispatch) => {
  // Other operations here
  dispatch(isLoadingCardsTrue());
  dispatch(fetchCardsData(params));
};

// Fetches all card data
export const fetchCardsData = (params) => (dispatch) => {
  return axiosGET(params)
    .then((res) => {
      // Input JSON (or plain JS object) data that needs normalization.
      const normalizedResponse = cardsNormalizr(res.data.results);

      dispatch({
        type: FETCH_CARDS_DATA_SUCCESSFUL,
        payload: normalizedResponse,
      });
    })
    .catch((err) => {
      dispatch({ type: FETCH_CARDS_DATA_FAILED, payload: err });
      dispatch(isLoadingCardsFalse());
    });
};

/*** CARD ***/

// Intermediary action creator
export const fetchSingleCard = (id) => (dispatch, getState) => {
  const { entities } = getState().cardsReducer;
  const singleCardId = getState().cardReducer.id; // Gets ID from card in cardReducer

  dispatch(isLoadingCardTrue());

  if (isEmpty(entities)) {
    dispatch(fetchCardsData()); // Fetch all cards to populate main view, ie if user refreshes the page on single view we should fetch all cards for main view
    dispatch(fetchSingleCardData(id)); // Fetch the single card, for single view
  } else if (toString(singleCardId) !== toString(id)) {
    // Set the single card if we do not have that card in memory
    dispatch(setSingleCard(id));
  }
};

export const fetchSingleCardData = (id) => (dispatch) => {
  return axiosGET('/' + id + '/')
    .then((res) => {
      const normalizedResponse = cardNormalizr(res.data);
      const result = normalizedResponse.result;

      const cardEntity = normalizedResponse.entities.card[result]; // Just the object, no need for a pointer
      const specPricesEntity = normalizedResponse.entities.spec_prices;
      const tcgPriceEntity = normalizedResponse.entities.tcg_price;

      dispatch({
        type: FETCH_CARD_DATA_SUCCESSFUL,
        payload: cardEntity,
      });
      dispatch(setSpecPricesSuccessful(specPricesEntity));
      dispatch(setTcgPricesSuccessful(tcgPriceEntity));
    })
    .catch((error) => {
      dispatch({ type: FETCH_CARD_DATA_FAILED, payload: error });
      dispatch(isLoadingCardFalse());
    });
};

export const setSingleCard = (singleId) => (dispatch, getState) => {
  try {
    const singleCard = getState().cardsReducer.entities.cards[singleId]; // Get the card from local state
    const normalizedResponse = cardNormalizr(singleCard); // Normalize
    const result = normalizedResponse.result; // Get the id of the card

    const cardEntity = normalizedResponse.entities.card[result]; // Just the object, no need for a pointer
    const specPricesEntity = normalizedResponse.entities.spec_prices;
    const tcgPriceEntity = normalizedResponse.entities.tcg_price;

    dispatch({ type: SET_CARD_DATA_SUCCESSFUL, payload: cardEntity });
    dispatch(setSpecPricesSuccessful(specPricesEntity));
    dispatch(setTcgPricesSuccessful(tcgPriceEntity));
  } catch (error) {
    dispatch({ type: SET_CARD_DATA_FAILED, payload: error });
  }
};

/*** FILTER ***/

export const setFilterOptions = (payload) => {
  return { type: SET_FILTER_OPTIONS, payload };
};

export const clearFilterOptions = () => {
  return { type: CLEAR_FILTER_OPTIONS };
};

/*** STATE MANAGEMENT ***/

export const isLoadingCardsTrue = () => {
  return { type: IS_LOADING_CARDS_TRUE };
};

export const isLoadingCardsFalse = () => {
  return { type: IS_LOADING_CARDS_FALSE };
};

export const isLoadingCardTrue = () => {
  return { type: IS_LOADING_CARD_TRUE };
};

export const isLoadingCardFalse = () => {
  return { type: IS_LOADING_CARD_FALSE };
};

/*** SPEC PRICES ***/

export const setSpecPricesSuccessful = (specPrices) => {
  return { type: SET_SPEC_PRICES_SUCCESSFUL, payload: specPrices };
};

// Might be useful in the future
// export const setSpecPricesFailed = () => {
//   return { type: SET_SPEC_PRICES_FAILED };
// };

/*** TCG PRICES ***/

export const setTcgPricesSuccessful = (tcgPrices) => {
  return { type: SET_TCG_PRICES_SUCCESSFUL, payload: tcgPrices };
};

// Might be useful in the future
// export const setTcgPricesFailed = () => {
//   return { type: SET_TCG_PRICES_FAILED };
// };

/*** TCG CATEGORIES***/

export const setPriceCategoryLow = () => {
  return { type: SET_PRICE_CATEGORY_LOW };
};

export const setPriceCategoryMid = () => {
  return { type: SET_PRICE_CATEGORY_MID };
};

export const setPriceCategoryHigh = () => {
  return { type: SET_PRICE_CATEGORY_HIGH };
};

export const setPriceCategoryMarket = () => {
  return { type: SET_PRICE_CATEGORY_MARKET };
};
