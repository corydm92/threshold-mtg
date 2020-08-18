export const getCardQuantity = (specPrices) => {
  let totalQuantity = 0;
  for (let spec of specPrices) {
    totalQuantity += spec.quantity;
  }

  return totalQuantity;
};

export const roundTwoDecimals = (num) => {
  return num.toFixed(2);
};

export const getAvgPurchasePrice = (specPrices) => {
  let totalQuantity = getCardQuantity(specPrices);
  let totalPurchasePrice = 0;

  for (let spec of specPrices) {
    totalPurchasePrice +=
      parseFloat(spec?.total_cash) || parseFloat(spec.total_credit);
  }

  const averagePurchasePrice = roundTwoDecimals(
    totalPurchasePrice / totalQuantity
  );

  return averagePurchasePrice;
};
