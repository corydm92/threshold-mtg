import { createSelector } from 'reselect';
import {
  getCardQuantity,
  getAvgPurchasePrice,
  gainLossCalc,
  getPriceSpread,
  roundTwoDecimals,
  cardIsValid,
  filterByReducer,
} from '../utils';

const getCards = (state) => state.cardsReducer.entities.cards;
const getCardsResults = (state) => state.cardsReducer.result;
const getTcgPriceCategory = (state) => state.tcgPriceCategory;
const getFilterCategories = (state) => state.filterReducer;

export const cardNamesAndSets = createSelector(
  [getCards, getCardsResults, getFilterCategories],
  (cards, cardsResults, filterCategories) => {
    const outArr = cardsResults.reduce((result, cardsResult) => {
      const card = { ...cards[cardsResult] };

      if (filterByReducer(filterCategories, card))
        result.push({ name: card.card_name, set: card.set_name });
      return result;
    }, []);

    return outArr;
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

      const outObj = {
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

      // console.log(outObj);

      return outObj;
    });
  }
);

const test = createSelector([cardsSelector], (card) => {
  console.log(card);
});
