import React from 'react';
import SingleCardViewContainer from '../containers/SingleCardViewContainer';
import CardsTableContainer from '../containers/CardsTableContainer';
import AppBar from '../component-library/mui/components/AppBar';
import ToolbarMixin from '../component-library/mui/components/ToolbarMixin';

const MainView = (props) => {
  return (
    <React.Fragment>
      <AppBar title="MTG Management" />
      <ToolbarMixin>
        {/* Routing Goes Here */}
        <SingleCardViewContainer />
        <CardsTableContainer />
      </ToolbarMixin>
    </React.Fragment>
  );
};

export default MainView;
