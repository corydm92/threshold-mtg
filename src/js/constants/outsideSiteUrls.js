const formatSet = (set) => {
  set.replace(' ', '-');
  return;
};

export const tcgPlayerShopLink = (cardSet, cardName) =>
  'https://shop.tcgplayer.com/magic' + cardSet + cardName;
