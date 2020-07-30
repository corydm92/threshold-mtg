import { normalize, schema } from 'normalizr';

// Card schema, the string will be the key for our entitiy.
const card = new schema.Entity('cards');

// Because we are taking in an array of cards as our payload, we can use shorthand to define a schema for an array
// longhand: myCardsSchema = new schema.Array(card);
const myCardsSchema = [card];

const cardsNormalizedData = (originalData) =>
  normalize(originalData, myCardsSchema);

export default cardsNormalizedData;
