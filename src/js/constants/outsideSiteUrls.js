const formatSet = (set) => {
  set.replace(' ', '-');
  return;
};

export const formatCardKingdomBuylistLink = (cardName) => {
  const baseUrl =
    'https://www.cardkingdom.com/purchasing/mtg_singles?filter%5Bsearch%5D=mtg_advanced&filter%5Bname%5D=';

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
    return encodeURIComponent(cardName);
  }

  const outStr = baseUrl + replaceInCardName(cardName);

  return outStr;
};
