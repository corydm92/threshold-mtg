import React from 'react';
import AppBar from '../component-library/mui/components/AppBar';
import EnhancedTypography from '../component-library/mui/components/Typography';
import MobileMenu from './MobileMenu';
import HeaderTabLinks from './HeaderTabLinks';

import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      '& .MuiToolbar-root': {
        display: 'flex',
        justifyContent: 'space-between',
      },
      '& .MuiTab-textColorInherit': {
        // Sets opacity for visited links to 1
        opacity: 1,
      },
    },
    title: {
      flexGrow: 1,
      fontSize: theme.typography.h5.fontSize,
    },
  };
});

const HeaderNavigation = (props) => {
  const classes = useStyles();
  const location = useLocation();

  const { title } = { ...props };

  return (
    <AppBar
      className={classes.appBar}
      title={title}
      dataTest={'HeaderNavigation'}
    >
      <EnhancedTypography dataTest='appbar-title' className={classes.title}>
        {title}
      </EnhancedTypography>

      <MobileMenu />
      <HeaderTabLinks location={location} />
    </AppBar>
  );
};

export default HeaderNavigation;
