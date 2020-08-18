import React from 'react';
import TableContainer from './TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import Table from './Table';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TablePagination from './TablePagination';
import Spinner from '../Spinner';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const tableHeaders = [
  { label: 'Card Name', colSpan: 6 },
  { label: 'Spread', colSpan: 1 },
  { label: 'Quantity', colSpan: 1 },
  { label: 'Avg Purchase Price', colSpan: 2 },
  { label: 'TCG Price', colSpan: 2 },
];

const MuiTable = (props) => {
  const classes = useStyles();

  const { cards, isLoadingCards } = { ...props };

  return (
    <React.Fragment>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <Grid container>
                {tableHeaders.map((header) => {
                  return (
                    <Grid item xs={header.colSpan}>
                      <TableCell>{header.label}</TableCell>
                    </Grid>
                  );
                })}
              </Grid>
            </TableRow>
          </TableHead>
          {!isLoadingCards && (
            <TableBody>
              {cards.map((card) => {
                return (
                  <TableRow>
                    <Grid container>
                      <Grid item xs={6}>
                        <TableCell>
                          <div>
                            <div>{card.cardName}</div>
                            <div>{card.setName}</div>
                          </div>
                        </TableCell>
                      </Grid>
                      <Grid item xs={1}>
                        <TableCell>{card.spread}</TableCell>
                      </Grid>
                      <Grid item xs={1}>
                        <TableCell>{card.quantity}</TableCell>
                      </Grid>
                      <Grid item xs={2}>
                        <TableCell>{card.avgPurchasePrice}</TableCell>
                      </Grid>
                      <Grid item xs={2}>
                        <TableCell>{card.tcgPrice}</TableCell>
                      </Grid>
                    </Grid>
                  </TableRow>
                );
              })}
            </TableBody>
          )}
        </Table>

        {isLoadingCards ? (
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
