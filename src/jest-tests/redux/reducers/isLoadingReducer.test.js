import isLoadingReducer, {
  initialState,
} from '../../../redux/reducers/isLoadingReducer';
import {
  IS_LOADING_CARDS_TRUE,
  IS_LOADING_CARDS_FALSE,
  IS_LOADING_CARD_TRUE,
  IS_LOADING_CARD_FALSE,
} from '../../../redux/actionTypes';

describe('isLoadingReducer tests', () => {
  it('Returns inital state', () => {
    expect(isLoadingReducer(undefined, {})).toEqual(initialState);
  });

  it('Sets isLoadingCards to True', () => {
    expect(
      isLoadingReducer(initialState, {
        type: IS_LOADING_CARDS_TRUE,
      })
    ).toEqual({ ...initialState, cards: true });
  });

  it('Sets isLoadingCards to False', () => {
    expect(
      isLoadingReducer(
        { ...initialState, cards: true },
        {
          type: IS_LOADING_CARDS_FALSE,
        }
      )
    ).toEqual({ ...initialState, cards: false });
  });

  it('Sets isLoadingCard to True', () => {
    expect(
      isLoadingReducer(initialState, {
        type: IS_LOADING_CARD_TRUE,
      })
    ).toEqual({ ...initialState, card: true });
  });

  it('Sets isLoadingCard to False', () => {
    expect(
      isLoadingReducer(
        { ...initialState, card: true },
        {
          type: IS_LOADING_CARD_FALSE,
        }
      )
    ).toEqual({ ...initialState, card: false });
  });
});
