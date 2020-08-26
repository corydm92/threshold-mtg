import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '../component-library/mui/components/Container';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import { listDisplay, imageDisplay } from '../constants/tableDisplayIcons';

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
      <Tooltip
        title='Image View'
        placement='bottom'
        arrow
        enterDelay={500}
        enterNextDelay={500}
      >
        <IconButton
          data-test={imageDisplay}
          className={getClasses(imageDisplay)}
          onClick={() => onClick(imageDisplay)}
        >
          <ViewComfyIcon fontSize='large' />
        </IconButton>
      </Tooltip>
      <Tooltip
        title='List View'
        placement='bottom'
        arrow
        enterDelay={500}
        enterNextDelay={500}
      >
        <IconButton
          data-test={listDisplay}
          className={getClasses(listDisplay)}
          onClick={() => onClick(listDisplay)}
        >
          <ViewListIcon fontSize='large' />
        </IconButton>
      </Tooltip>
    </Container>
  );
};

export default TableDisplayIcons;
