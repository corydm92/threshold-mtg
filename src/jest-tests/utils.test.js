import * as utils from '../utils';
import { fullState } from './test-mocks/reduxStoreMock';
import singleCardSelectorObj from './test-mocks/singleCardSelectorObj';

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

  describe('addZeros', () => {
    it('Returns two decimal points for whole number', () => {
      const wholeNumber = '4';
      const parseWholeNumber = utils.addZeroes(wholeNumber);

      expect(parseWholeNumber).toEqual('4.00');
    });

    it('Returns two decimal points for one decimal number', () => {
      const oneDecimal = '4.6';
      const parseOneDecimal = utils.addZeroes(oneDecimal);

      expect(parseOneDecimal).toEqual('4.60');
    });
  });

  describe('isPositive', () => {
    it('Returns true for positive number', () => {
      const positiveNumber = 100;

      expect(utils.isPositive(positiveNumber)).toBe(true);
    });

    it('Returns false for zero', () => {
      const zero = 0;

      expect(utils.isPositive(zero)).toBe(false);
    });

    it('Returns false for negative numbers', () => {
      const negNum = -100;

      expect(utils.isPositive(negNum)).toBe(false);
    });
  });

  describe('filterByReducer', () => {
    let filterReducer;
    let singleCardObj;

    beforeEach(() => {
      filterReducer = fullState.filterReducer;
      singleCardObj = singleCardSelectorObj;
    });

    describe('isFoil', () => {
      it('Returns correct value if active', () => {
        filterReducer.isFoil = true;
        singleCardObj.foil = 1;
        let filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(true);

        singleCardObj.foil = 0;
        filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(false);
      });

      it('Returns correct value if inactive', () => {
        filterReducer.isFoil = false;
        singleCardObj.foil = 1;
        let filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(true);

        singleCardObj.foil = 0;
        filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(true);
      });
    });
  });
});
