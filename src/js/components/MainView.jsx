import React, { useEffect } from 'react';

import HeaderNavigation from './HeaderNavigation';
import ToolbarMixin from '../component-library/mui/components/ToolbarMixin';
import Container from '../component-library/mui/components/Container';
import Routes from '../routes/Routes';

const MainView = (props) => {
  const { fetchCards, collectionPrice } = { ...props };

  useEffect(() => {
    // fetchCards('/?limit=20');
    fetchCards();
  }, [fetchCards]);

  const navTitle = 'Threshold MTG';

  const collectionPriceTitle = collectionPrice && ` - $${collectionPrice}`;

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
