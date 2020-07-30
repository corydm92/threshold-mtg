import { normalize, schema } from 'normalizr';

// Card schema
const card = new schema.Entity('cards');

const tcgPrice = new schema.Entity('card.tcg_price', {
  tcgPrice: card,
});

const specPrices = new schema.Entity('card.spec_prices', {
  specPrices: card,
});

// This is what our result object will be (array of id's).
// The key of the schema object must be the same as the key of the incoming payload
const cards = new schema.Entity('cards', {
  card,
  tcg_price: tcgPrice,
  spec_prices: [specPrices],
});

const cardsNormalizedData = (originalData) => normalize(originalData, cards);

export default cardsNormalizedData;
