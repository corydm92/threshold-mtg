import { SET_FILTER_OPTIONS, CLEAR_FILTER_OPTIONS } from '../actionTypes';

const initState = {
  isFoil: false,
  setName: null, // Must be null for autocomplete (console warnings)
  cardName: null, // Must be null for autocomplete (console warnings)
  spreadOperator: '',
  spreadValue: '',
  gainOperator: '',
  gainValue: '',
  tcgPriceOperator: '',
  tcgPriceValue: '',
  dateFrom: '',
  dateTo: '',
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FILTER_OPTIONS:
      return action.payload;
    case CLEAR_FILTER_OPTIONS:
      return initState;
    default:
      return state;
  }
};

export default filterReducer;
