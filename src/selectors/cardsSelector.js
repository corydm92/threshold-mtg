import { createSelector } from 'reselect';

const cards = (state) => state.cardsReducer.entities;
const cardsResults = (state) => state.cardsReducer.result.cards;

export const cardsSelector = createSelector(
  [cards, cardsResults],
  (cards, results) => {
    return results.map((result) => {
      return cards[result];
    });
  }
);
