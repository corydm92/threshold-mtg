import React, { useState, useEffect } from 'react';
import EnhancedToolbar from '../component-library/mui/components/Toolbar';
import Grid from '@material-ui/core/Grid';
import TableDisplayIcons from './TableDisplayIcons';
import { makeStyles } from '@material-ui/styles';
import EnhancedTextField from '../component-library/mui/components/Form/TextField';
import EnhancedTypography from '../component-library/mui/components/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { find } from 'lodash';

const useStyles = makeStyles((theme) => {
  return {
    selectContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    select: {
      width: '65%',
    },
    typography: {
      marginRight: theme.spacing(1),
    },
    toolbar: {
      paddingBottom: theme.spacing(1),
    },
  };
});

const SortOrderSelect = (props) => {
  const classes = useStyles();

  const sortOptions = [
    { label: 'Name - Ascending', id: 'cardName', direction: 'asc' },
    { label: 'Name - Descending', id: 'cardName', direction: 'desc' },
    { label: 'Date - Ascending', id: 'dateTo', direction: 'asc' },
    { label: 'Date - Descending', id: 'dateTo', direction: 'desc' },
    { label: 'Spread - Ascending', id: 'spread', direction: 'asc' },
    { label: 'Spread - Descending', id: 'spread', direction: 'desc' },
    { label: 'Gain - Ascending', id: 'gainLoss', direction: 'asc' },
    { label: 'Gain - Descending', id: 'gainLoss', direction: 'desc' },
    { label: 'TCG - Ascending', id: 'tcgPrice', direction: 'asc' },
    { label: 'TCG - Descending', id: 'tcgPrice', direction: 'desc' },
  ];

  const { sortHandler, mobileSortValues } = { ...props };

  const [selectValue, setSelectValue] = useState(mobileSortValues.label);

  useEffect(() => {
    setSelectValue(mobileSortValues.label);
  }, [mobileSortValues, sortOptions]);

  const createSortHandler = (label) => {
    const findOption = find(sortOptions, ['label', label]);
    sortHandler(findOption);
  };

  return (
    <EnhancedTextField
      dataTest='mobile-sort-select'
      select
      value={selectValue}
      onChange={(event) => createSortHandler(event.target.value)}
      className={classes.select}
      InputLabelProps={{
        shrink: true,
      }}
    >
      {sortOptions.map((option) => {
        return (
          <MenuItem
            className={classes.menuItem}
            key={option.label}
            value={option.label}
          >
            {option.label}
          </MenuItem>
        );
      })}
    </EnhancedTextField>
  );
};

const CardsTableToolbar = (props) => {
  const classes = useStyles();
  const { onClick, activeDisplay, sortHandler, mobileSortValues } = {
    ...props,
  };

  return (
    <EnhancedToolbar className={classes.toolbar}>
      <Grid container>
        <Grid className={classes.selectContainer} item xs={7}>
          <EnhancedTypography className={classes.typography}>
            Sort Order:
          </EnhancedTypography>
          <SortOrderSelect
            mobileSortValues={mobileSortValues}
            sortHandler={sortHandler}
          />
        </Grid>

        <Grid item xs={5}>
          <TableDisplayIcons onClick={onClick} activeDisplay={activeDisplay} />
        </Grid>
      </Grid>
    </EnhancedToolbar>
  );
};

export default CardsTableToolbar;
