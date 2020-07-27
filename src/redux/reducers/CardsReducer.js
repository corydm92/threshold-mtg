import {
  FETCH_CARD_DATA_SUCCESSFUL,
  FETCH_CARD_DATA_FAILED,
} from '../actionTypes';

let initState = [];

const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CARD_DATA_SUCCESSFUL: {
      return [action.payload];
    }
    case FETCH_CARD_DATA_FAILED:
      return initState;
    default:
      return state;
  }
};

export default cardsReducer;
