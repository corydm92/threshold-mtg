import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '../component-library/mui/components/Container';
import ViewListIcon from '@material-ui/icons/ViewList';
// import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import IconButton from '@material-ui/core/IconButton';
import EnhancedTooltip from '../component-library/mui/components/Tooltip';

import {
  listDisplay,
  // imageDisplay
} from '../constants/tableDisplayIcons';

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    icon: {
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

  const { onClick } = { ...props };

  return (
    <Container className={classes.container} dataTest={'TableDisplayIcons'}>
      {/* Legacy Image View Icon */}
      {/* <EnhancedTooltip title='Image View'>
        <IconButton
          data-test={imageDisplay}
          className={getClasses(imageDisplay)}
          onClick={() => onClick(imageDisplay)}
        >
          <ViewComfyIcon fontSize='large' />
        </IconButton>
      </EnhancedTooltip> */}
      <EnhancedTooltip title='List View'>
        <IconButton
          data-test={listDisplay}
          className={classes.icon}
          onClick={() => onClick(listDisplay)}
        >
          <ViewListIcon fontSize='large' />
        </IconButton>
      </EnhancedTooltip>
    </Container>
  );
};

export default TableDisplayIcons;
