import React from 'react';
import EnhancedToolbar from '../component-library/mui/components/Toolbar';
import Grid from '@material-ui/core/Grid';
// import TableDisplayIcons from './TableDisplayIcons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    toolbar: {},
  };
});

const CardsTableToolbar = (props) => {
  // const { onClick } = { ...props };

  const classes = useStyles();

  return (
    <EnhancedToolbar className={classes.toolbar}>
      <Grid container>
        <Grid item xs={10}>
          {/* Left Aligned Items Here */}
        </Grid>
        <Grid item xs={2}>
          {/* <TableDisplayIcons onClick={onClick} /> */}
        </Grid>
      </Grid>
    </EnhancedToolbar>
  );
};

export default CardsTableToolbar;
