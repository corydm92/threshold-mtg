import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/testUtils';
import TableDisplayIcons from '../../js/components/TableDisplayIcons';
import {
  listDisplay,
  imageDisplay,
} from '../../js/constants/tableDisplayIcons';

describe('Sidebar tests', () => {
  let wrapper;
  const onClick = jest.fn();

  beforeEach(() => {
    const props = {
      onClick,
      activeDisplay: listDisplay,
    };

    wrapper = shallow(<TableDisplayIcons {...props} />).dive();
  });

  it('Renders the Component', () => {
    const tableDisplayIcons = findByTestAttr(wrapper, 'TableDisplayIcons');
    expect(tableDisplayIcons).toHaveLength(1);
  });

  it('Triggers onClick for imageDisplay', () => {
    const imageDisplayIcon = findByTestAttr(wrapper, imageDisplay);
    expect(imageDisplayIcon).toHaveLength(1);
    imageDisplayIcon.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('Triggers onClick for listDisplay', () => {
    const listDisplayIcon = findByTestAttr(wrapper, listDisplay);
    expect(listDisplayIcon).toHaveLength(1);
    listDisplayIcon.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
