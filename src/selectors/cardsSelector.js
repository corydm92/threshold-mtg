import { createSelector } from 'reselect';

const cards = (state) => state.cardsReducer.entities.cards;
const cardsResults = (state) => state.cardsReducer.result;

export const cardsSelector = createSelector(
  [cards, cardsResults],
  (cards, results) => {
    return results.map((result) => {
      // Bundle relevant data into an out obj and return here
      return { ...cards[result] };
    });
  }
);
