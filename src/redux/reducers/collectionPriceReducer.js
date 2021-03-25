import { SET_COLLECTION_PRICE } from '../actionTypes';

const collectionPriceReducer = (state = '', action) => {
  switch (action.type) {
    case SET_COLLECTION_PRICE:
      return action.payload;
    default:
      return state;
  }
};

export default collectionPriceReducer;
