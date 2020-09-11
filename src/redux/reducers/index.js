import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import cardReducer from './cardReducer';
import isLoadingReducer from './isLoadingReducer';
import specPricesReducer from './specPricesReducer';
import tcgPricesReducer from './tcgPricesReducer';
import tcgPriceCategory from './tcgPriceCategory';
import filterReducer from './filterReducer';
import priceCalcReducer from './priceCalcReducer';

export default combineReducers({
  tcgPriceCategory,
  cardsReducer,
  cardReducer,
  isLoadingReducer,
  specPricesReducer,
  tcgPricesReducer,
  filterReducer,
  priceCalcReducer,
});
