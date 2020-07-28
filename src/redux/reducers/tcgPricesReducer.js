import {
  SET_TCG_PRICES_SUCCESSFUL,
  SET_TCG_PRICES_FAILED,
} from '../actionTypes';

const initState = {};

const tcgPricesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TCG_PRICES_SUCCESSFUL: {
      return action.payload;
    }
    case SET_TCG_PRICES_FAILED: {
      return initState;
    }
    default:
      return state;
  }
};

export default tcgPricesReducer;
