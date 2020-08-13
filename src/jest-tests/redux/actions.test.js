// ACTION TYPES
import {
  FETCH_CARDS_DATA_SUCCESSFUL,
  FETCH_CARDS_DATA_FAILED,
  FETCH_CARD_DATA_SUCCESSFUL,
  FETCH_CARD_DATA_FAILED,
  SET_CARD_DATA_SUCCESSFUL,
  SET_CARD_DATA_FAILED,
  IS_LOADING_CARDS_TRUE,
  IS_LOADING_CARDS_FALSE,
  IS_LOADING_CARD_TRUE,
  IS_LOADING_CARD_FALSE,
  SET_SPEC_PRICES_SUCCESSFUL,
  SET_TCG_PRICES_SUCCESSFUL,
  // SET_SPEC_PRICES_FAILED,
  // SET_TCG_PRICES_FAILED,
} from '../../redux/actionTypes';

// ACTION CREATORS
import { fetchCardsData } from '../../redux/actions';

// UTILS
import fetchMock from 'fetch-mock';
import { mockStore } from '../../utils/testUtils';

import { fullState } from '../../js/constants/reduxStoreMock';
import cardsGetMock from '../../js/constants/test-mocks/cardsGetMock';
import cardsReducerAfterNormalize from '../../js/constants/test-mocks/cardsReducerAfterNormalize';

const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

describe('Action Creator Tests', () => {
  describe('fetchCardsData action', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('Fetches Cards Data', () => {
      fetchMock.getOnce(REACT_APP_BASE_API_URL, {
        body: cardsGetMock,
        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [
        {
          type: FETCH_CARDS_DATA_SUCCESSFUL,
          payload: cardsReducerAfterNormalize,
        },
      ];

      const store = mockStore(cardsGetMock);

      return store.dispatch(fetchCardsData()).then(() => {
        expect(store.getActions()).toMatchObject(expectedActions);
      });
    });
  });
});
