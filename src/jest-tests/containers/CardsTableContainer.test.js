import React, { useEffect } from 'react';
import { shallow } from 'enzyme';
import CardsTableContainer from '../../js/containers/CardsTableContainer';
import { mockStore } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';

describe('HomePageContainer tests', () => {
  const fetchCards = jest.fn();
  let wrapper;

  beforeEach(() => {
    const store = mockStore(fullState);
    wrapper = shallow(
      <CardsTableContainer store={store} fetchCards={fetchCards} />
    ).dive(); // Dive to access the container component, not the provider
  });

  it('Renders the Component', () => {
    expect(wrapper).not.toBeNull();
  });
});
