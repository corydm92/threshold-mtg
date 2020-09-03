import { SET_FILTER_OPTIONS, CLEAR_FILTER_OPTIONS } from '../actionTypes';

const initState = {
  isFoil: false,
  setName: '',
  cardName: '',
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
