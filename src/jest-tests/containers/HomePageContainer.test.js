import React from 'react';
import { shallow } from 'enzyme';
import { mockStore } from '../../utils/testUtils';
import { fullState } from '../test-mocks/reduxStoreMock';
import HomePageContainer from '../../js/containers/HomePageContainer';

describe('HomePageContainer tests', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      store: mockStore(fullState),
    };
    wrapper = shallow(<HomePageContainer {...props} />).dive();
  });

  it('Renders the Component', () => {
    expect(wrapper).not.toBeNull();
  });
});
