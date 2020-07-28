import { normalize, schema } from 'normalizr';

// Card schema
const card = new schema.Entity('cards');

// What we will define our final entities as
const mySchema = { cards: [card] };

const cardsNormalizedData = (originalData) => normalize(originalData, mySchema);

export default cardsNormalizedData;
