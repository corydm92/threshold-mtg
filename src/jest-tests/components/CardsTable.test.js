import React from 'react';
import { shallow } from 'enzyme';
import CardsTable from '../../js/components/CardsTable';

describe('CardsTable tests', () => {
  it('Renders the Component', () => {
    const component = shallow(<CardsTable />);

    const cardstable = component.find("[data-testid='cardstable']");

    expect(cardstable).toHaveLength(1); // Tests for existance
  });
});
