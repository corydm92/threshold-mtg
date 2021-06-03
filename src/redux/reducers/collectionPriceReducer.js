import { SET_COLLECTION_PRICE } from '../actionTypes';

import {
  tcgLow,
  tcgMid,
  tcgHigh,
  tcgMarket,
} from '../../js/constants/tcgPriceCategories';

export const tcgPriceCategories = {
  SET_PRICE_CATEGORY_LOW: tcgLow,
  SET_PRICE_CATEGORY_MID: tcgMid,
  SET_PRICE_CATEGORY_HIGH: tcgHigh,
  SET_PRICE_CATEGORY_MARKET: tcgMarket,
};

const collectionPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLECTION_PRICE:
      return action.payload;
    default:
      return state;
  }
};

const initialState = {
  [tcgLow]: '',
  [tcgMid]: '',
  [tcgHigh]: '',
  [tcgMarket]: '',
};

export default collectionPriceReducer;
