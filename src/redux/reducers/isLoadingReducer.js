import {
  IS_LOADING_CARDS_TRUE,
  IS_LOADING_CARDS_FALSE,
  IS_LOADING_CARD_TRUE,
  IS_LOADING_CARD_FALSE,
} from '../actionTypes';

export const initState = {
  cards: false,
  card: false,
};

const isLoadingReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_LOADING_CARDS_TRUE: {
      return { ...state, cards: true };
    }
    case IS_LOADING_CARDS_FALSE: {
      return { ...state, cards: false };
    }
    case IS_LOADING_CARD_TRUE: {
      return { ...state, card: true };
    }
    case IS_LOADING_CARD_FALSE: {
      return { ...state, card: false };
    }
    default:
      return state;
  }
};

export default isLoadingReducer;
