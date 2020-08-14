import isLoadingReducer, {
  initState,
} from '../../../redux/reducers/isLoadingReducer';
import {
  IS_LOADING_CARDS_TRUE,
  IS_LOADING_CARDS_FALSE,
  IS_LOADING_CARD_TRUE,
  IS_LOADING_CARD_FALSE,
} from '../../../redux/actionTypes';

describe('isLoadingReducer tests', () => {
  it('Returns inital state', () => {
    expect(isLoadingReducer(undefined, {})).toEqual(initState);
  });

  it('Sets isLoadingCards to True', () => {
    expect(
      isLoadingReducer(initState, {
        type: IS_LOADING_CARDS_TRUE,
      })
    ).toEqual({ ...initState, cards: true });
  });

  it('Sets isLoadingCards to False', () => {
    expect(
      isLoadingReducer(
        { ...initState, cards: true },
        {
          type: IS_LOADING_CARDS_FALSE,
        }
      )
    ).toEqual({ ...initState, cards: false });
  });

  it('Sets isLoadingCard to True', () => {
    expect(
      isLoadingReducer(initState, {
        type: IS_LOADING_CARD_TRUE,
      })
    ).toEqual({ ...initState, card: true });
  });

  it('Sets isLoadingCard to False', () => {
    expect(
      isLoadingReducer(
        { ...initState, card: true },
        {
          type: IS_LOADING_CARD_FALSE,
        }
      )
    ).toEqual({ ...initState, card: false });
  });
});
