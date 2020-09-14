import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '../component-library/mui/components/Container';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import IconButton from '@material-ui/core/IconButton';
import EnhancedTooltip from '../component-library/mui/components/Tooltip';

import { cardDisplay, filterDisplay } from '../constants/tableDisplayIcons';

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    icon: {
      color: theme.palette.primary.light,
    },
    iconActive: {
      color: theme.palette.primary.main,
    },
    container: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: 0,
      minHeight: 0,
    },
  };
});

const TableDisplayIcons = (props) => {
  const classes = useStyles();

  const { activeDisplay, onClick } = { ...props };

  const getClasses = (display) => {
    if (display === activeDisplay) {
      return classes.iconActive;
    } else {
      return classes.icon;
    }
  };

  return (
    <Container className={classes.container} dataTest={'TableDisplayIcons'}>
      <EnhancedTooltip title='Card View'>
        <IconButton
          data-test='CardDisplayIcon'
          className={getClasses(cardDisplay)}
          onClick={() => onClick(cardDisplay)}
        >
          <ViewComfyIcon fontSize='large' />
        </IconButton>
      </EnhancedTooltip>
      <EnhancedTooltip title='Filter View'>
        <IconButton
          data-test='FilterDisplayIcon'
          className={getClasses(filterDisplay)}
          onClick={() => onClick(filterDisplay)}
        >
          <ViewListIcon fontSize='large' />
        </IconButton>
      </EnhancedTooltip>
    </Container>
  );
};

export default TableDisplayIcons;
