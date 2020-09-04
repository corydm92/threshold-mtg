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

export const cardsSelector = createSelector(
  [getCards, getCardsResults, getTcgPriceCategory, getFilterCategories],
  (cards, results, priceCategory, filterCategories) => {
    return results.reduce((res, result) => {
      const card = { ...cards[result] };

      const isValid = cardIsValid(card);

      if (!isValid) {
        console.log(card);
        // Reduce allows us to filter invalid cards by returning our current res
        return res;
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

      if (filterByReducer(filterCategories, outObj)) {
        res.push(outObj);
      }

      return res;
    }, []);
  }
);

export const cardNamesAndSets = createSelector([cardsSelector], (cards) => {
  return cards.map((card) => {
    return { name: card.cardName, set: card.setName };
  });
});
