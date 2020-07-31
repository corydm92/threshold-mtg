import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import cardReducer from './cardReducer';
import isLoadingReducer from './isLoadingReducer';
import specPricesReducer from './specPricesReducer';
import tcgPricesReducer from './tcgPricesReducer';

export default combineReducers({
  cardsReducer,
  cardReducer,
  isLoadingReducer,
  specPricesReducer,
  tcgPricesReducer,
});
