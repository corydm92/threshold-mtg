import { isEmpty } from 'lodash';

export const getCardQuantity = (specPrices, card) => {
  try {
    let totalQuantity = 0;

    for (let spec of specPrices) {
      totalQuantity += spec.quantity;
    }

    return totalQuantity;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export const cardIsValid = (card) => {
  let isValid = true;

  if (isEmpty(card.spec_prices)) {
    isValid = false;
  }

  return isValid;
};

export const roundTwoDecimals = (num) => {
  return parseFloat(num.toFixed(2));
};

export const addZeroes = (num) => {
  // Display only, forces two decimal points
  num = num.toString();
  const dec = num.split('.')[1];
  const len = dec && dec.length > 2 ? dec.length : 2;
  return Number(num).toFixed(len);
};

export const getAvgPurchasePrice = (specPrices) => {
  let totalQuantity = getCardQuantity(specPrices);
  let totalPurchasePrice = 0;

  for (let spec of specPrices) {
    totalPurchasePrice +=
      parseFloat(spec.total_cash) || parseFloat(spec.total_credit);
  }

  const averagePurchasePrice = roundTwoDecimals(
    totalPurchasePrice / totalQuantity
  );

  return averagePurchasePrice;
};

export const getPriceCategory = (category) => {
  const categories = {
    low_price: 'TCG Low Price',
    mid_price: 'TCG Mid Price',
    high_price: 'TCG High Price',
    market_price: 'TCG Market Price',
  };

  return categories[category];
};

export const gainLossCalc = (currentPrice, purchasePrice) => {
  return roundTwoDecimals(currentPrice - purchasePrice);
};

export const isPositive = (num) => {
  if (num >= 0) {
    return true;
  }
  return false;
};

export const getPriceSpread = (currentPrice, purchasePrice) => {
  return roundTwoDecimals(
    ((currentPrice - purchasePrice) / purchasePrice) * 100
  );
};
