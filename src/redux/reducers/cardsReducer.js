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
      const { normalized, ckExport, rawExport } = action.payload;
      return { ...normalized, ckExport, rawExport };
    }
    case FETCH_CARDS_DATA_FAILED:
      return initState;
    default:
      return state;
  }
};

export default cardsReducer;
