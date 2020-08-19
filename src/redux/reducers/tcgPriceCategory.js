import {
  SET_PRICE_CATEGORY_LOW,
  SET_PRICE_CATEGORY_MID,
  SET_PRICE_CATEGORY_HIGH,
  SET_PRICE_CATEGORY_MARKET,
} from '../actionTypes';

export const tcgPriceCategories = {
  SET_PRICE_CATEGORY_LOW: 'low_price',
  SET_PRICE_CATEGORY_MID: 'mid_price',
  SET_PRICE_CATEGORY_HIGH: 'high_price',
  SET_PRICE_CATEGORY_MARKET: 'market_price',
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
    default:
      return state;
  }
};

export default tcgPriceCategory;
