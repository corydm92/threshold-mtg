import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '../component-library/mui/components/Container';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import EnhancedIconButton from '../component-library/mui/components/IconButton';
import EnhancedTooltip from '../component-library/mui/components/Tooltip';

import { cardDisplay, filterDisplay } from '../constants/tableDisplayIcons';

const useStyles = makeStyles((theme) => {
  return {
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
        <EnhancedIconButton
          data-test='CardDisplayIcon'
          className={getClasses(cardDisplay)}
          onClick={() => onClick(cardDisplay)}
        >
          <ViewComfyIcon fontSize='large' />
        </EnhancedIconButton>
      </EnhancedTooltip>
      <EnhancedTooltip title='Filter View'>
        <EnhancedIconButton
          data-test='FilterDisplayIcon'
          className={getClasses(filterDisplay)}
          onClick={() => onClick(filterDisplay)}
        >
          <ViewListIcon fontSize='large' />
        </EnhancedIconButton>
      </EnhancedTooltip>
    </Container>
  );
};

export default TableDisplayIcons;
