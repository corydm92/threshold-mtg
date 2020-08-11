import React from 'react';
import { mount } from 'enzyme';
import CardsTable from '../../js/components/CardsTable';
import { findByTestAttr } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';
import { cardsSelector } from '../../selectors/cardsSelector';

describe('CardsTable tests', () => {
  let wrapper;
  let fetchCards = jest.fn();

  beforeEach(() => {
    const props = {
      fetchCards,
      cards: cardsSelector(fullState),
      isLoadingCards: fullState.isLoadingReducer.cards,
    };

    wrapper = mount(<CardsTable {...props} />);
  });

  it('Renders the Component', () => {
    const cardsTable = findByTestAttr(wrapper, 'cardsTable');
    expect(cardsTable).not.toBeNull();
  });

  it('Checks useEffect hooks on mount', () => {
    expect(fetchCards).toHaveBeenCalled();
  });
});
