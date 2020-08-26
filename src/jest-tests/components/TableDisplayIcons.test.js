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
  const activeClick = jest.fn();

  describe('Whole Component', () => {
    beforeEach(() => {
      const props = {
        activeClick,
        activeDisplay: listDisplay,
      };

      wrapper = shallow(<TableDisplayIcons {...props} />).dive();
    });

    it('Renders the Component', () => {
      const tableDisplayIcons = findByTestAttr(wrapper, 'TableDisplayIcons');
      expect(tableDisplayIcons).toHaveLength(1);
    });
  });
});
