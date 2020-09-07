import * as utils from '../utils';
import { fullState } from './test-mocks/reduxStoreMock';
import singleCardSelectorObj from './test-mocks/singleCardSelectorObj';
import { filter } from 'lodash';

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

    describe('setName', () => {
      it('Returns correct value if active', () => {
        filterReducer.setName = 'test set';
        singleCardObj.setName = 'test set';
        let filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(true);

        singleCardObj.setName = 'different set';
        filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(false);
      });

      it('Returns correct value if inactive', () => {
        filterReducer.setName = '';
        singleCardObj.setName = 'test set';
        let filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(true);

        singleCardObj.setName = 'different set';
        filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(true);
      });
    });

    describe('cardName', () => {
      it('Returns correct value if active', () => {
        filterReducer.cardName = 'test card';
        singleCardObj.cardName = 'test card';
        let filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(true);

        singleCardObj.cardName = 'different card';
        filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(false);
      });

      it('Returns correct value if inactive', () => {
        filterReducer.cardName = '';
        singleCardObj.cardName = 'test card';
        let filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(true);

        singleCardObj.cardName = 'different card';
        filterResult = utils.filterByReducer(filterReducer, singleCardObj);

        expect(filterResult).toBe(true);
      });
    });

    describe('spread', () => {
      it('Returns correct value if both spreadOperator and spreadValue are active', () => {
        singleCardObj.spread = 1;

        function getFilterResult(operator, value) {
          filterReducer.spreadOperator = operator;
          filterReducer.spreadValue = value;
          return utils.filterByReducer(filterReducer, singleCardObj);
        }

        let gtResult = getFilterResult('>', 1);
        let gteqResult = getFilterResult('>=', 1);
        let eqResult = getFilterResult('=', 1);
        let lteqResult = getFilterResult('<=', 1);
        let ltResult = getFilterResult('<', 1);

        expect(gtResult).toBe(false);
        expect(gteqResult).toBe(true);
        expect(eqResult).toBe(true);
        expect(lteqResult).toBe(true);
        expect(ltResult).toBe(false);
      });

      it('Returns correct value if spreadOperator is inactive', () => {
        singleCardObj.spread = 1;

        function getFilterResult(operator, value) {
          filterReducer.spreadOperator = '';
          filterReducer.spreadValue = value;
          return utils.filterByReducer(filterReducer, singleCardObj);
        }

        let gtResult = getFilterResult('>', 1);
        let gteqResult = getFilterResult('>=', 1);
        let eqResult = getFilterResult('=', 1);
        let lteqResult = getFilterResult('<=', 1);
        let ltResult = getFilterResult('<', 1);

        expect(gtResult).toBe(true);
        expect(gteqResult).toBe(true);
        expect(eqResult).toBe(true);
        expect(lteqResult).toBe(true);
        expect(ltResult).toBe(true);
      });

      it('Returns correct value if spreadValue is inactive', () => {
        singleCardObj.spread = 1;

        function getFilterResult(operator, value) {
          filterReducer.spreadOperator = operator;
          filterReducer.spreadValue = null;
          return utils.filterByReducer(filterReducer, singleCardObj);
        }

        let gtResult = getFilterResult('>', 1);
        let gteqResult = getFilterResult('>=', 1);
        let eqResult = getFilterResult('=', 1);
        let lteqResult = getFilterResult('<=', 1);
        let ltResult = getFilterResult('<', 1);

        expect(gtResult).toBe(true);
        expect(gteqResult).toBe(true);
        expect(eqResult).toBe(true);
        expect(lteqResult).toBe(true);
        expect(ltResult).toBe(true);
      });
    });

    describe('gain', () => {
      it('Returns correct value if both gainOperator and gainValue are active', () => {
        singleCardObj.gainLoss = 1;

        function getFilterResult(operator, value) {
          filterReducer.gainOperator = operator;
          filterReducer.gainValue = value;
          return utils.filterByReducer(filterReducer, singleCardObj);
        }

        let gtResult = getFilterResult('>', 1);
        let gteqResult = getFilterResult('>=', 1);
        let eqResult = getFilterResult('=', 1);
        let lteqResult = getFilterResult('<=', 1);
        let ltResult = getFilterResult('<', 1);

        expect(gtResult).toBe(false);
        expect(gteqResult).toBe(true);
        expect(eqResult).toBe(true);
        expect(lteqResult).toBe(true);
        expect(ltResult).toBe(false);
      });

      it('Returns correct value if gainOperator is inactive', () => {
        singleCardObj.gainLoss = 1;

        function getFilterResult(operator, value) {
          filterReducer.gainOperator = '';
          filterReducer.gainValue = value;
          return utils.filterByReducer(filterReducer, singleCardObj);
        }

        let gtResult = getFilterResult('>', 1);
        let gteqResult = getFilterResult('>=', 1);
        let eqResult = getFilterResult('=', 1);
        let lteqResult = getFilterResult('<=', 1);
        let ltResult = getFilterResult('<', 1);

        expect(gtResult).toBe(true);
        expect(gteqResult).toBe(true);
        expect(eqResult).toBe(true);
        expect(lteqResult).toBe(true);
        expect(ltResult).toBe(true);
      });

      it('Returns correct value if gainValue is inactive', () => {
        singleCardObj.gainLoss = 1;

        function getFilterResult(operator, value) {
          filterReducer.gainOperator = operator;
          filterReducer.gainValue = null;
          return utils.filterByReducer(filterReducer, singleCardObj);
        }

        let gtResult = getFilterResult('>', 1);
        let gteqResult = getFilterResult('>=', 1);
        let eqResult = getFilterResult('=', 1);
        let lteqResult = getFilterResult('<=', 1);
        let ltResult = getFilterResult('<', 1);

        expect(gtResult).toBe(true);
        expect(gteqResult).toBe(true);
        expect(eqResult).toBe(true);
        expect(lteqResult).toBe(true);
        expect(ltResult).toBe(true);
      });
    });

    describe('tcgPrice', () => {
      it('Returns correct value if both tcgPriceOperator and tcgPriceValue are active', () => {
        singleCardObj.tcgPrice = 1;

        function getFilterResult(operator, value) {
          filterReducer.tcgPriceOperator = operator;
          filterReducer.tcgPriceValue = value;
          return utils.filterByReducer(filterReducer, singleCardObj);
        }

        let gtResult = getFilterResult('>', 1);
        let gteqResult = getFilterResult('>=', 1);
        let eqResult = getFilterResult('=', 1);
        let lteqResult = getFilterResult('<=', 1);
        let ltResult = getFilterResult('<', 1);

        expect(gtResult).toBe(false);
        expect(gteqResult).toBe(true);
        expect(eqResult).toBe(true);
        expect(lteqResult).toBe(true);
        expect(ltResult).toBe(false);
      });

      it('Returns correct value if tcgPriceOperator is inactive', () => {
        singleCardObj.tcgPrice = 1;

        function getFilterResult(operator, value) {
          filterReducer.tcgPriceOperator = '';
          filterReducer.tcgPriceValue = value;
          return utils.filterByReducer(filterReducer, singleCardObj);
        }

        let gtResult = getFilterResult('>', 1);
        let gteqResult = getFilterResult('>=', 1);
        let eqResult = getFilterResult('=', 1);
        let lteqResult = getFilterResult('<=', 1);
        let ltResult = getFilterResult('<', 1);

        expect(gtResult).toBe(true);
        expect(gteqResult).toBe(true);
        expect(eqResult).toBe(true);
        expect(lteqResult).toBe(true);
        expect(ltResult).toBe(true);
      });

      it('Returns correct value if tcgPriceValue is inactive', () => {
        singleCardObj.tcgPrice = 1;

        function getFilterResult(operator, value) {
          filterReducer.tcgPriceOperator = operator;
          filterReducer.tcgPriceValue = null;
          return utils.filterByReducer(filterReducer, singleCardObj);
        }

        let gtResult = getFilterResult('>', 1);
        let gteqResult = getFilterResult('>=', 1);
        let eqResult = getFilterResult('=', 1);
        let lteqResult = getFilterResult('<=', 1);
        let ltResult = getFilterResult('<', 1);

        expect(gtResult).toBe(true);
        expect(gteqResult).toBe(true);
        expect(eqResult).toBe(true);
        expect(lteqResult).toBe(true);
        expect(ltResult).toBe(true);
      });
    });
  });
});
