import { SET_PRICE_CALC } from '../actionTypes';

const initState = {
  tcgPrice: '',
  purchasePrice: '',
  gain: '',
  spread: '',
};

const priceCalcReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PRICE_CALC:
      return action.payload;
    default:
      return state;
  }
};

export default priceCalcReducer;
