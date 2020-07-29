import { normalize, schema } from 'normalizr';

// Card schema, the string will be the key for our entitiy.
const card = new schema.Entity('cards');

// This is what our result object will be (array if id's).
// The key of the schema object must be the same as the key of the incoming payload
const mySchema = { cards: [card] };

const cardsNormalizedData = (originalData) => normalize(originalData, mySchema);

export default cardsNormalizedData;
