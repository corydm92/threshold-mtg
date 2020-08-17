import React from 'react';
import { shallow } from 'enzyme';
import { mockStore, findByTestAttr } from '../../utils/testUtils';
import { fullState } from '../../js/constants/reduxStoreMock';
import InventoryContainer from '../../js/containers/InventoryContainer';
describe('InventoryContainer tests', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      store: mockStore(fullState),
    };
    wrapper = shallow(<InventoryContainer {...props} />).dive();
  });

  it('Renders the Container', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Returns Div with test Attribute', () => {
    const inventoryContainer = findByTestAttr(
      wrapper.dive(),
      'inventory-container'
    );

    expect(inventoryContainer).toHaveLength(1);
  });
});
