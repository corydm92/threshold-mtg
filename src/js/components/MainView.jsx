import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SingleCardViewContainer from '../containers/SingleCardViewContainer';
import CardsTableContainer from '../containers/CardsTableContainer'
import AppBar from '../component-library/mui/components/AppBar'
import ToolbarMixin from '../component-library/mui/components/ToolbarMixin'

const MainView = (props) => {

  return (
    <React.Fragment>
      <AppBar />
      <ToolbarMixin> {/* Spacing for AppBar */}
        {/* Routing Goes Here */}
        <SingleCardViewContainer />
        <CardsTableContainer />

      </ToolbarMixin>
    </React.Fragment>
  );
};

export default MainView;
