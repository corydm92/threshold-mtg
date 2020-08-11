import React from 'react';
import { shallow } from 'enzyme';
import { mockStore } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';
import HomePageContainer from '../../js/containers/HomePageContainer';

describe('HomePageContainer tests', () => {
  it('Renders the Component', () => {
    const store = mockStore(fullState);

    const component = shallow(<HomePageContainer store={store} />).dive();

    expect(component).not.toBeNull();
  });
});
