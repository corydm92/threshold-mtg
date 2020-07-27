import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import isLoadingReducer from './isLoadingReducer';

export default combineReducers({ cardsReducer, isLoadingReducer });
