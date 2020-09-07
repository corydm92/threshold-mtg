import * as utils from '../utils';
import { fullState } from './test-mocks/reduxStoreMock';

describe('Utils tests', () => {
  let singleCard;

  beforeEach(() => {
    const entities = fullState.cardsReducer.entities.cards;
    const result = fullState.cardsReducer.result;
    singleCard = entities[result[0]];
  });

  describe('cardIsValid', () => {
    it('Returns isValid = false', () => {
      singleCard.spec_prices = null;
      const cardIsValid = utils.cardIsValid(singleCard);
      expect(cardIsValid).toBe(false);
    });
  });
});
