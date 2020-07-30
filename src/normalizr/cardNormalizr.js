import { normalize, schema } from 'normalizr';

// Card schema
const card = new schema.Entity('cards');

const tcgPrice = new schema.Entity('card.tcg_price', {
  tcgPrice: card,
});

const specPrices = new schema.Entity('card.spec_prices', {
  specPrices: card,
});

const cards = new schema.Entity('cards', {
  card,
  tcg_price: tcgPrice,
  spec_prices: [specPrices],
});

const cardsNormalizedData = (originalData) => normalize(originalData, cards);

export default cardsNormalizedData;
