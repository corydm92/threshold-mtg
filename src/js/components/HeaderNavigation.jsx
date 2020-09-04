import React from 'react';
import AppBar from '../component-library/mui/components/AppBar';
import EnhancedTypography from '../component-library/mui/components/Typography';
import MobileMenu from './MobileMenu';
import HeaderTabLinks from './HeaderTabLinks';

import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    title: {
      flexGrow: 1,
    },
  };
});

const HeaderNavigation = (props) => {
  const classes = useStyles();
  const location = useLocation();

  const { title } = { ...props };

  return (
    <AppBar title={title}>
      <EnhancedTypography
        data-test='appbar-title'
        variant='h5'
        className={classes.title}
      >
        {title}
      </EnhancedTypography>

      <MobileMenu />
      <HeaderTabLinks location={location} />
    </AppBar>
  );
};

export default HeaderNavigation;
