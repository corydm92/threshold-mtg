import {
  SET_SPEC_PRICES_SUCCESSFUL,
  SET_SPEC_PRICES_FAILED,
} from '../actionTypes';

const initState = {};

const specPricesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SPEC_PRICES_SUCCESSFUL: {
      return action.payload;
    }
    case SET_SPEC_PRICES_FAILED: {
      return initState;
    }
    default:
      return state;
  }
};

export default specPricesReducer;
