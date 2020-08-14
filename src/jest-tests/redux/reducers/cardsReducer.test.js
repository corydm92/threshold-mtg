import cardsReducer, { initState } from '../../../redux/reducers/cardsReducer';
import {
  FETCH_CARDS_DATA_SUCCESSFUL,
  FETCH_CARDS_DATA_FAILED,
} from '../../../redux/actionTypes';

import { fullState } from '../../../js/constants/reduxStoreMock';

const mockCardsReducer = { ...fullState.cardsReducer };

describe('Cards Reducer Test', () => {
  it('should return the initial state', () => {
    expect(cardsReducer(undefined, {})).toEqual(initState);
  });

  it('Should store payload', () => {
    expect(
      cardsReducer(
        {},
        {
          type: FETCH_CARDS_DATA_SUCCESSFUL,
          payload: mockCardsReducer,
        }
      )
    ).toEqual(mockCardsReducer);
  });

  it('Should return init on failed fetch', () => {
    expect(
      cardsReducer(
        {},
        {
          type: FETCH_CARDS_DATA_FAILED,
        }
      )
    ).toEqual(initState);
  });
});
