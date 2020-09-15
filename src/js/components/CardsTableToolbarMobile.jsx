import React from 'react';
import EnhancedToolbar from '../component-library/mui/components/Toolbar';
import Grid from '@material-ui/core/Grid';
import TableDisplayIcons from './TableDisplayIcons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // position: 'fixed',
      // top: theme.mixins.toolbar.minHeight,
      // zIndex: 1,
      // backgroundColor: theme.palette.primary.contrastText,
      // borderBottom: `1px solid ${theme.palette.custom.lightGray}`,
    },
  };
});

const CardsTableToolbar = (props) => {
  const classes = useStyles();
  const { onClick, activeDisplay } = { ...props };

  return (
    <EnhancedToolbar className={classes.root}>
      <Grid container>
        <Grid item xs={10}>
          {/* Left Aligned Items Here */}
        </Grid>
        <Grid item xs={2}>
          <TableDisplayIcons onClick={onClick} activeDisplay={activeDisplay} />
        </Grid>
      </Grid>
    </EnhancedToolbar>
  );
};

export default CardsTableToolbar;
