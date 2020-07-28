import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import isLoadingReducer from './isLoadingReducer';
import specPricesReducer from './specPricesReducer';

export default combineReducers({
  cardsReducer,
  isLoadingReducer,
  specPricesReducer,
});
