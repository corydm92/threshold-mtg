import React, { useState, useEffect } from 'react';
import TableContainer from '../component-library/mui/components/Table/TableContainer';
import Table from '../component-library/mui/components/Table/Table';
import TableHead from '../component-library/mui/components/Table/TableHead';
import TableBody from '../component-library/mui/components/Table/TableBody';
import TableRow from '../component-library/mui/components/Table/TableRow';
import TableCell from '../component-library/mui/components/Table/TableCell';
import TablePagination from '../component-library/mui/components/Table/TablePagination';
import Spinner from '../component-library/mui/components/Spinner';
import TableSortLabel from '../component-library/mui/components/Table/TableSortLabel';
import Grid from '@material-ui/core/Grid';
import { getPriceCategory, isPositive, addZeroes } from '../../utils';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] <= a[orderBy]) {
    return -1;
  }
  if (b[orderBy] >= a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const MuiTableHeaders = (props) => {
  const { order, orderBy, onRequestSort, priceCategory } = { ...props };

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const tableHeaders = [
    { id: 'cardName', label: 'Card', colSpan: 4, centerText: false },
    { id: 'spread', label: 'Spread', colSpan: 1, centerText: true },
    { id: 'gainLoss', label: 'Gain / Loss', colSpan: 2, centerText: true },
    { id: 'quantity', label: 'Quantity', colSpan: 1, centerText: true },
    {
      id: 'avgPurchasePrice',
      label: 'Avg Purchase Price',
      colSpan: 2,
      centerText: true,
    },
    {
      id: 'tcgPrice',
      label: getPriceCategory(priceCategory),
      colSpan: 2,
      centerText: true,
    },
  ];

  return (
    <TableHead>
      <TableRow>
        <Grid container>
          {tableHeaders.map((header) => {
            return (
              <Grid item xs={header.colSpan}>
                <TableCell
                  sortDirection={orderBy === header.id ? order : false}
                  bold
                  centerText={header.centerText}
                >
                  <TableSortLabel
                    active={orderBy === header.id}
                    direction={orderBy === header.id ? order : 'desc'}
                    onClick={createSortHandler(header.id)}
                  >
                    {header.label}
                  </TableSortLabel>
                </TableCell>
              </Grid>
            );
          })}
        </Grid>
      </TableRow>
    </TableHead>
  );
};

const MuiTableBody = (props) => {
  const { data } = { ...props };

  return (
    <TableBody>
      {data.map((card) => {
        return (
          <TableRow>
            <Grid container>
              <Grid item xs={4}>
                <TableCell>
                  <div>
                    <div>{card.cardName}</div>
                    <div>{card.setName}</div>
                  </div>
                </TableCell>
              </Grid>
              <Grid item xs={1}>
                <TableCell
                  useColor
                  bold
                  isPositive={isPositive(card.spread)}
                  centerText
                >
                  {addZeroes(card.spread)}
                  {'%'}
                </TableCell>
              </Grid>
              <Grid item xs={2}>
                <TableCell
                  useColor
                  bold
                  isPositive={isPositive(card.gainLoss)}
                  centerText
                >
                  {addZeroes(card.gainLoss)}
                </TableCell>
              </Grid>
              <Grid item xs={1}>
                <TableCell centerText>{card.quantity}</TableCell>
              </Grid>
              <Grid item xs={2}>
                <TableCell centerText>
                  {'$'}
                  {addZeroes(card.avgPurchasePrice)}
                </TableCell>
              </Grid>
              <Grid item xs={2}>
                <TableCell centerText>
                  {'$'}
                  {addZeroes(card.tcgPrice)}
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

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('spread');
  const [rowPerPage, setRowPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(cards);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  useEffect(() => {
    const startingIndex = rowPerPage * (currentPage + 1) - rowPerPage;
    const endingIndex = rowPerPage * (currentPage + 1);

    const data = stableSort(cards, getComparator(order, orderBy)).slice(
      startingIndex,
      endingIndex
    );
    setData(data);
  }, [cards, rowPerPage, currentPage, order, orderBy]);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowPerPage(event.target.value);
  };

  return (
    <React.Fragment>
      <TableContainer data-test='cardsTable'>
        <Table stickyHeader>
          <MuiTableHeaders
            order={order}
            orderBy={orderBy}
            priceCategory={priceCategory}
            onRequestSort={handleRequestSort}
          />
          {!isLoadingCards && <MuiTableBody data={data} />}
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
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={cards.length}
            rowsPerPage={rowPerPage}
            noBorder
            page={currentPage}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </TableContainer>
    </React.Fragment>
  );
};

export default MuiTable;
