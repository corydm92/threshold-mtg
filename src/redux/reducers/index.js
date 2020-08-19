import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import cardReducer from './cardReducer';
import isLoadingReducer from './isLoadingReducer';
import specPricesReducer from './specPricesReducer';
import tcgPricesReducer from './tcgPricesReducer';
import tcgPriceCategory from './tcgPriceCategory';

export default combineReducers({
  tcgPriceCategory,
  cardsReducer,
  cardReducer,
  isLoadingReducer,
  specPricesReducer,
  tcgPricesReducer,
});
