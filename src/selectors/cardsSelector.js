import { createSelector } from 'reselect';
import {
  getCardQuantity,
  getAvgPurchasePrice,
  gainLossCalc,
  getPriceSpread,
  roundTwoDecimals,
  cardIsValid,
} from '../utils';

import { uniq } from 'lodash';

const getCards = (state) => state.cardsReducer.entities.cards;
const getCardsResults = (state) => state.cardsReducer.result;
const getTcgPriceCategory = (state) => state.tcgPriceCategory;

export const cardNamesSelector = createSelector(
  [getCards, getCardsResults],
  (cards, results) => {
    return results
      .map((result) => {
        const card = { ...cards[result] };

        return card.card_name;
      })
      .sort();
  }
);

export const setNamesSelector = createSelector(
  [getCards, getCardsResults],
  (cards, results) => {
    const setsArr = results.map((result) => {
      const card = { ...cards[result] };

      return [card.set_name, card.card_name];
    });

    console.log(setsArr);

    const sortedSets = setsArr.sort();

    const uniqueSets = uniq(sortedSets, true);
    return uniqueSets;
  }
);

export const cardsSelector = createSelector(
  [getCards, getCardsResults, getTcgPriceCategory],
  (cards, results, priceCategory) => {
    return results.map((result) => {
      const card = { ...cards[result] };

      const isValid = cardIsValid(card);

      if (!isValid) {
        console.log(card);
        return {};
      }

      const tcgSellerDashboardUrl = `https://store.tcgplayer.com/admin/product/manage/${card.tcg_productId}`;

      const avgPurchasePrice = getAvgPurchasePrice(card.spec_prices);
      const tcgPrice = roundTwoDecimals(
        parseFloat(card.tcg_price[priceCategory]) // Necessary, returns from DB as string
      );
      const gainLoss = gainLossCalc(tcgPrice, avgPurchasePrice);
      const spread = getPriceSpread(tcgPrice, avgPurchasePrice);

      return {
        cardName: card.card_name,
        foil: card.foil,
        language: card.language,
        setName: card.set_name,
        tcgUrl: card.tcg_url,
        tcgImageUrl: card.tcg_imageUrl,
        tcgSellerDashboardUrl,
        spread,
        quantity: getCardQuantity(card.spec_prices),
        avgPurchasePrice,
        tcgPrice,
        gainLoss,
      };
    });
  }
);
