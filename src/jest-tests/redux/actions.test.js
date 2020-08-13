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
import { fetchCardsData, fetchSingleCardData } from '../../redux/actions';

// UTILS
import moxios from 'moxios';
import { mockStore } from '../../utils/testUtils';

// CONSTANTS
import cardsGetMock from '../../js/constants/test-mocks/fetchCardsData/cardsGetMock';
import cardsReducerAfterNormalize from '../../js/constants/test-mocks/fetchCardsData/cardsReducerAfterNormalize';
import cardGetMock from '../../js/constants/test-mocks/fetchCardData/cardGetMock';
import cardReducerAfterNormalize from '../../js/constants/test-mocks/fetchCardData/cardReducerAfterNormalize';
import specPricesReducerAfterNormalize from '../../js/constants/test-mocks/fetchCardData/specPricesReducerAfterNormalize';
import tcgPricesReducerAfterNormalize from '../../js/constants/test-mocks/fetchCardData/tcgPricesReducerAfterNormalize';

describe('Action Creator Tests', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  // FETCH CARDS DATA
  describe('fetchCardsData action', () => {
    it('Fetches Cards Data', () => {
      const expectedActions = [
        {
          type: FETCH_CARDS_DATA_SUCCESSFUL,
          payload: cardsReducerAfterNormalize,
        },
      ];

      const store = mockStore();

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: cardsGetMock,
        });
      });

      return store.dispatch(fetchCardsData()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  // FETCH CARD DATA
  describe('fetchCardData action', () => {
    it('Fetches Card Data', () => {
      const expectedActions = [
        {
          type: FETCH_CARD_DATA_SUCCESSFUL,
          payload: cardReducerAfterNormalize,
        },
        {
          type: SET_SPEC_PRICES_SUCCESSFUL,
          payload: specPricesReducerAfterNormalize,
        },
        {
          type: SET_TCG_PRICES_SUCCESSFUL,
          payload: tcgPricesReducerAfterNormalize,
        },
      ];

      const store = mockStore();

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: cardGetMock,
        });
      });

      return store.dispatch(fetchSingleCardData()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
