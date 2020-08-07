import cardsReducer from '../../../redux/reducers/cardsReducer';

describe('Cards Reducer Test', () => {
  it('should return the initial state', () => {
    expect(cardsReducer(undefined, {})).toMatchSnapshot();
  });
});
