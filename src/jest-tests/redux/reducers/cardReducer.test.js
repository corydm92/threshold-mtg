import cardReducer, { initState } from '../../../redux/reducers/cardReducer';
import {
  FETCH_CARD_DATA_SUCCESSFUL,
  FETCH_CARD_DATA_FAILED,
} from '../../../redux/actionTypes';
import { fullState } from '../../../js/constants/test-mocks/reduxStoreMock';

const mockCardReducer = { ...fullState.cardReducer };

describe('CardReducer tests', () => {
  it('Returns init state by default', () => {
    expect(cardReducer(undefined, {})).toEqual(initState);
  });

  it('Stores Payload', () => {
    expect(
      cardReducer(undefined, {
        type: FETCH_CARD_DATA_SUCCESSFUL,
        payload: mockCardReducer,
      })
    ).toEqual(mockCardReducer);
  });

  it('Returns InitState on failed fetch', () => {
    expect(
      cardReducer(undefined, {
        type: FETCH_CARD_DATA_FAILED,
      })
    ).toEqual(initState);
  });
});
