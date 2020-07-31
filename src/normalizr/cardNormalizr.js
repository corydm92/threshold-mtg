import { normalize, schema } from 'normalizr';

// Shema for the tcg_price entity
const tcgPrice = new schema.Entity('tcg_price');

// Shema for the spec_prices entity
const specPrices = new schema.Entity('spec_prices');

// The keys of the schema object must be the same as the keys of the incoming payload
// Whole card object schema, replacing tcg_price/spec_prices with the schema defined above
const card = new schema.Entity('card', {
  tcg_price: tcgPrice,
  spec_prices: [specPrices],
});

const cardsNormalizedData = (originalData) => normalize(originalData, card);

export default cardsNormalizedData;
