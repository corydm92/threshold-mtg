import React from 'react';
import { shallow } from 'enzyme';
import { mockStore } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';
import MainViewContainer from '../../js/containers/MainViewContainer';

describe('MainViewContainer tests', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      store: mockStore(fullState),
    };
    wrapper = shallow(<MainViewContainer {...props} />).dive();
  });

  it('Renders the Component', () => {
    expect(wrapper).not.toBeNull();
  });
});
