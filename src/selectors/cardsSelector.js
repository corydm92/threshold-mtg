import { createSelector } from 'reselect';
import { getCardQuantity, getAvgPurchasePrice } from '../utils';

const getCards = (state) => state.cardsReducer.entities.cards;
const getCardsResults = (state) => state.cardsReducer.result;

export const cardsSelector = createSelector(
  [getCards, getCardsResults],
  (cards, results) => {
    return results.map((result) => {
      const card = { ...cards[result] };
      // Bundle relevant data into an out obj and return here

      const cardName = `${card.card_name}${card.foil ? ' - Foil' : ''}${
        card.language && ` - ${card.language}`
      }`;

      return {
        cardName,
        setName: card.set_name,
        spread: '100%',
        quantity: getCardQuantity(card.spec_prices),
        avgPurchasePrice: getAvgPurchasePrice(card.spec_prices),
      };
    });
  }
);
