import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/testUtils';
import MainView from '../../js/components/MainView';

describe('MainView tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainView />);
  });

  it('Renders the Component', () => {
    const mainView = findByTestAttr(wrapper, 'mainView');

    expect(mainView).toHaveLength(1); // Tests for existance
  });
});
