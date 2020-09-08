import { isEmpty } from 'lodash';

export const getCardQuantity = (specPrices) => {
  let totalQuantity = 0;

  for (let spec of specPrices) {
    totalQuantity += spec.quantity;
  }

  return totalQuantity;
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
  if (num > 0) {
    return true;
  }
  return false;
};

export const getPriceSpread = (currentPrice, purchasePrice) => {
  return roundTwoDecimals(
    ((currentPrice - purchasePrice) / purchasePrice) * 100
  );
};

function replaceInCardName(cardName) {
  const replaceTargets = [
    ' (Borderless)',
    ' (Extended Art)',
    ' (JP Alternate Art)',
    ' (Showcase)',
    ' (Alternate Art)',
  ];
  for (let target of replaceTargets) {
    cardName = cardName.replace(target, '');
  }
  return cardName;
}

export const formatCardKingdomBuylistLink = (cardName) => {
  const baseUri =
    'https://www.cardkingdom.com/purchasing/mtg_singles?filter%5Bsearch%5D=mtg_advanced&filter%5Bname%5D=';

  const replacedCardname = replaceInCardName(cardName);

  const outStr = baseUri + encodeURIComponent(replacedCardname);

  return outStr;
};

export const formatEdhrecLink = (cardName) => {
  const baseUri = 'https://edhrec.com/cards/';

  const replacedCardname = replaceInCardName(cardName);

  const outStr = baseUri + replacedCardname.split(' ').join('-');

  return outStr;
};

// Used in determining which HeaderNavigation link is active on Comp Did Mount
// Takes in the useLocation() hook from react router dom
export const getTabLinksPath = (location) => {
  const pathMap = {
    inventory: {
      path: '/inventory',
      value: 0,
    },
    home: {
      path: '/',
      value: 1,
    },
  };

  if (location.pathname.startsWith('/inventory')) {
    return pathMap.inventory.value;
  } else {
    return pathMap.home.value;
  }
};

export const filterByReducer = (filterReducer, card) => {
  const {
    isFoil,
    setName,
    cardName,
    spreadOperator,
    spreadValue,
    gainOperator,
    gainValue,
    tcgPriceOperator,
    tcgPriceValue,
    dateFrom,
    dateTo,
  } = { ...filterReducer };

  if (isFoil && !card.foil) {
    return false;
  }

  if (setName && card.setName !== setName) {
    return false;
  }

  if (cardName && card.cardName !== cardName) {
    return false;
  }

  if (spreadOperator && spreadValue) {
    switch (spreadOperator) {
      case '>':
        if (card.spread > spreadValue) {
          break;
        } else {
          return false;
        }
      case '>=':
        if (card.spread >= spreadValue) {
          break;
        } else {
          return false;
        }
      case '=':
        if (card.spread === spreadValue) {
          break;
        } else {
          return false;
        }
      case '<=':
        if (card.spread <= spreadValue) {
          break;
        } else {
          return false;
        }
      case '<':
        if (card.spread < spreadValue) {
          break;
        } else {
          return false;
        }
      default:
        break;
    }
  }

  if (gainOperator && gainValue) {
    switch (gainOperator) {
      case '>':
        if (card.gainLoss > gainValue) {
          break;
        } else {
          return false;
        }
      case '>=':
        if (card.gainLoss >= gainValue) {
          break;
        } else {
          return false;
        }
      case '=':
        if (card.gainLoss === gainValue) {
          break;
        } else {
          return false;
        }
      case '<=':
        if (card.gainLoss <= gainValue) {
          break;
        } else {
          return false;
        }
      case '<':
        if (card.gainLoss < gainValue) {
          break;
        } else {
          return false;
        }
      default:
        break;
    }
  }

  if (tcgPriceOperator && tcgPriceValue) {
    switch (tcgPriceOperator) {
      case '>':
        if (card.tcgPrice > tcgPriceValue) {
          break;
        } else {
          return false;
        }
      case '>=':
        if (card.tcgPrice >= tcgPriceValue) {
          break;
        } else {
          return false;
        }
      case '=':
        if (card.tcgPrice === tcgPriceValue) {
          break;
        } else {
          return false;
        }
      case '<=':
        if (card.tcgPrice <= tcgPriceValue) {
          break;
        } else {
          return false;
        }
      case '<':
        if (card.tcgPrice < tcgPriceValue) {
          break;
        } else {
          return false;
        }
      default:
        break;
    }
  }

  if (dateFrom) {
    // ex: original purchase dates = [8/1, 8/15]
    // I want to find all cards I purchased after 8/10
    // if (8/1 < 8/10 && 8/15 < 8/10)
    // This will return true because we purchased a card after 8/10

    if (card.dateFrom < dateFrom && card.dateTo < dateFrom) {
      return false;
    }
  }

  if (dateTo) {
    // ex: original purchase dates = [8/1, 8/15]
    // I want to check for all cards I purchased before 8/10
    // if (8/15 > 8/10 && 8/1 > 8/10)
    // This will return true because we purchased a card before 8/10

    if (card.dateTo > dateTo && card.dateFrom > dateTo) {
      return false;
    }
  }

  return true;
};

export const formatDateString = (date, type = 'USA') => {
  const splitArray = date.split('-');

  const year = splitArray[0];
  const month = splitArray[1];
  const day = splitArray[2];

  switch (type) {
    default:
      // USA
      return `${month}/${day}/${year}`;
  }
};
