import {
  SET_PRICE_CATEGORY_LOW,
  SET_PRICE_CATEGORY_MID,
  SET_PRICE_CATEGORY_HIGH,
  SET_PRICE_CATEGORY_MARKET,
} from '../actionTypes';

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

const initState = tcgPriceCategories[SET_PRICE_CATEGORY_MARKET];

const tcgPriceCategory = (state = initState, action) => {
  switch (action.type) {
    case SET_PRICE_CATEGORY_LOW:
      return tcgPriceCategories[SET_PRICE_CATEGORY_LOW];
    case SET_PRICE_CATEGORY_MID:
      return tcgPriceCategories[SET_PRICE_CATEGORY_MID];
    case SET_PRICE_CATEGORY_HIGH:
      return tcgPriceCategories[SET_PRICE_CATEGORY_HIGH];
    case SET_PRICE_CATEGORY_MARKET:
      return tcgPriceCategories[SET_PRICE_CATEGORY_MARKET];
    default:
      return state;
  }
};

export default tcgPriceCategory;
