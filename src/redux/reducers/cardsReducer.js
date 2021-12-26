import {
  FETCH_CARDS_DATA_SUCCESSFUL,
  FETCH_CARDS_DATA_FAILED,
} from '../actionTypes';

// Exporting for test purposes
export const initState = {
  entities: {},
  result: [],
};

const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CARDS_DATA_SUCCESSFUL: {
      const { normalized, raw } = action.payload;
      return { ...normalized, raw };
    }
    case FETCH_CARDS_DATA_FAILED:
      return initState;
    default:
      return state;
  }
};

export default cardsReducer;
