import React, { useEffect } from 'react';

import HeaderNavigation from './HeaderNavigation';
import ToolbarMixin from '../component-library/mui/components/ToolbarMixin';
import Container from '../component-library/mui/components/Container';
import Routes from '../routes/Routes';

const MainView = (props) => {
  const { fetchCards, collectionPrice, tcgPriceCategory } = { ...props };

  useEffect(() => {
    fetchCards('/?limit=800');
    // fetchCards();
  }, [fetchCards]);

  const navTitle = 'Threshold MTG';

  const collectionPriceTitle =
    collectionPrice[tcgPriceCategory] &&
    ` - ${collectionPrice[tcgPriceCategory]}`;

  return (
    <div data-test='mainView'>
      <HeaderNavigation title={navTitle + collectionPriceTitle} />
      <Container>
        <ToolbarMixin>
          <Routes />
        </ToolbarMixin>
      </Container>
    </div>
  );
};

export default MainView;
