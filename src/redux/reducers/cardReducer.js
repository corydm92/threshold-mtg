import {
  FETCH_CARD_DATA_SUCCESSFUL,
  FETCH_CARD_DATA_FAILED,
  SET_CARD_DATA_SUCCESSFUL,
  SET_CARD_DATA_FAILED,
} from '../actionTypes';

// Our init state for a single card should be an empty object, because we expect a single card entity
const initState = {};

const cardReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CARD_DATA_SUCCESSFUL:
    // Fallthrough
    case SET_CARD_DATA_SUCCESSFUL:
      return action.payload;
    case FETCH_CARD_DATA_FAILED:
    // Fallthrough
    case SET_CARD_DATA_FAILED:
      return initState;
    default:
      return state;
  }
};

export default cardReducer;
