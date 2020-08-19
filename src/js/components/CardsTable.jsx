import React from 'react';
import TableContainer from '../component-library/mui/components/Table/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import Table from '../component-library/mui/components/Table/Table';
import TableHead from '../component-library/mui/components/Table/TableHead';
import TableBody from '../component-library/mui/components/Table/TableBody';
import TableRow from '../component-library/mui/components/Table/TableRow';
import TableCell from '../component-library/mui/components/Table/TableCell';
import TablePagination from '../component-library/mui/components/Table/TablePagination';
import Spinner from '../component-library/mui/components/Spinner';
import Grid from '@material-ui/core/Grid';
import { getPriceCategory } from '../../utils';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const MuiTableHeaders = (priceCategory) => {
  const tableHeaders = [
    { label: 'Card Name', colSpan: 5, centerText: false },
    { label: 'Spread', colSpan: 1, centerText: true },
    { label: 'Gain / Loss', colSpan: 1, centerText: true },
    { label: 'Quantity', colSpan: 1, centerText: true },
    { label: 'Avg Purchase Price', colSpan: 2, centerText: true },
    { label: getPriceCategory(priceCategory), colSpan: 2, centerText: true },
  ];

  return (
    <TableHead>
      <TableRow>
        <Grid container>
          {tableHeaders.map((header) => {
            return (
              <Grid item xs={header.colSpan}>
                <TableCell centerText={header.centerText}>
                  {header.label}
                </TableCell>
              </Grid>
            );
          })}
        </Grid>
      </TableRow>
    </TableHead>
  );
};

const MuiTableBody = (cards) => {
  return (
    <TableBody>
      {cards.map((card) => {
        return (
          <TableRow>
            <Grid container>
              <Grid item xs={5}>
                <TableCell>
                  <div>
                    <div>{card.cardName}</div>
                    <div>{card.setName}</div>
                  </div>
                </TableCell>
              </Grid>
              <Grid item xs={1}>
                <TableCell centerText>{card.spread}</TableCell>
              </Grid>
              <Grid item xs={1}>
                <TableCell centerText>{card.gainLoss}</TableCell>
              </Grid>
              <Grid item xs={1}>
                <TableCell centerText>{card.quantity}</TableCell>
              </Grid>
              <Grid item xs={2}>
                <TableCell centerText>
                  {'$'}
                  {card.avgPurchasePrice}
                </TableCell>
              </Grid>
              <Grid item xs={2}>
                <TableCell centerText>
                  {'$'}
                  {card.tcgPrice}
                </TableCell>
              </Grid>
            </Grid>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

const MuiTable = (props) => {
  const { cards, isLoadingCards, priceCategory } = { ...props };
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableContainer>
        <Table stickyHeader>
          {MuiTableHeaders(priceCategory)}
          {!isLoadingCards && MuiTableBody(cards)}
        </Table>

        {isLoadingCards ? (
          // Must render as full table to center with no scroll bar
          <Table>
            <TableBody>
              <TableRow>
                <TableCell padding noBorder colSpan={5}>
                  <Spinner />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            className={classes.pagination}
            noBorder
            // count={rows.length}
            // rowsPerPage={rowsPerPage}
            // page={page}
            // onChangePage={handleChangePage}
            // onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </TableContainer>
    </React.Fragment>
  );
};

export default MuiTable;
