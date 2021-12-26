import {
  FETCH_CARDS_DATA_SUCCESSFUL,
  FETCH_CARDS_DATA_FAILED,
  FETCH_CARD_DATA_SUCCESSFUL,
  FETCH_CARD_DATA_FAILED,
  SET_CARD_DATA_SUCCESSFUL,
  SET_CARD_DATA_FAILED,
  SET_COLLECTION_PRICE,
  SET_FILTER_OPTIONS,
  CLEAR_FILTER_OPTIONS,
  SET_PRICE_CALC,
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

import {
  tcgLow,
  tcgMid,
  tcgHigh,
  tcgMarket,
} from '../js/constants/tcgPriceCategories';

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

      // Creating raw with quantity here, but should be done in schema/api
      const raw = res.data.results.reduce((acc, current) => {
        let quantity = 0;

        if (current.spec_prices.length) {
          current.spec_prices.forEach((spec) => (quantity += spec.quantity));
          return [...acc, { ...current, quantity }];
        } else {
          return acc;
        }
      }, []);

      dispatch({
        type: FETCH_CARDS_DATA_SUCCESSFUL,
        payload: { normalized: normalizedResponse, raw },
      });

      dispatch(setCollectionPrice());

      dispatch(isLoadingCardsFalse());
    })
    .catch((err) => {
      dispatch({ type: FETCH_CARDS_DATA_FAILED, payload: err });
      console.error(err);
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

export const setFilterOptions = (payload) => async (dispatch) => {
  await dispatch(isLoadingCardsTrue());
  await dispatch({ type: SET_FILTER_OPTIONS, payload });
  dispatch(isLoadingCardsFalse());
};

export const clearFilterOptions = () => {
  return { type: CLEAR_FILTER_OPTIONS };
};

/*** PRICE CALC ***/

export const setPriceCalc = (payload) => {
  return { type: SET_PRICE_CALC, payload };
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

export const setCollectionPrice = () => (dispatch, getState) => {
  const cardEntities = getState().cardsReducer.entities.cards; // obj of obj
  const cardResults = getState().cardsReducer.result; // array of id

  try {
    let low = 0;
    let mid = 0;
    let high = 0;
    let market = 0;

    for (let card of cardResults) {
      if (
        cardEntities[card].spec_prices.length &&
        cardEntities[card].tcg_price
      ) {
        let quantity = 0;

        cardEntities[card].spec_prices.forEach(
          (spec) => (quantity += spec.quantity)
        );

        low += quantity * parseFloat(cardEntities[card].tcg_price[tcgLow]) || 0;
        mid += quantity * parseFloat(cardEntities[card].tcg_price[tcgMid]) || 0;
        high +=
          quantity * parseFloat(cardEntities[card].tcg_price[tcgHigh]) || 0;
        market +=
          quantity * parseFloat(cardEntities[card].tcg_price[tcgMarket]) || 0;
      }
    }

    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    const payload = {
      [tcgLow]: formatter.format(low.toFixed(2)),
      [tcgMid]: formatter.format(mid.toFixed(2)),
      [tcgHigh]: formatter.format(high.toFixed(2)),
      [tcgMarket]: formatter.format(market.toFixed(2)),
    };

    dispatch({
      type: SET_COLLECTION_PRICE,
      payload,
    });
  } catch (error) {
    console.error(error);
  }
};
