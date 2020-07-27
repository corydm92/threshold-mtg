import { IS_LOADING } from '../actionTypes';

const initialState = false;

const isLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default isLoadingReducer;
