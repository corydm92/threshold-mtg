import React, { useState, useEffect } from 'react';
import EnhancedTableContainer from '../component-library/mui/components/Table/EnhancedTableContainer';
import EnhancedTable from '../component-library/mui/components/Table/EnhancedTable';
import EnhancedTableHead from '../component-library/mui/components/Table/EnhancedTableHead';
import EnhancedTableBody from '../component-library/mui/components/Table/EnhancedTableBody';
import EnhancedTableRow from '../component-library/mui/components/Table/EnhancedTableRow';
import EnhancedTableCell from '../component-library/mui/components/Table/EnhancedTableCell';
import EnhancedTablePagination from '../component-library/mui/components/Table/EnhancedTablePagination';
import Spinner from '../component-library/mui/components/Spinner';
import EnhancedTableSortLabel from '../component-library/mui/components/Table/EnhancedTableSortLabel';
import Grid from '@material-ui/core/Grid';
import { getPriceCategory, isPositive, addZeroes } from '../../utils';
import { makeStyles } from '@material-ui/core/styles';
import CardDetails from './CardDetails';

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

const muiTableHeaderStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
  };
});

const MuiTableHeaders = (props) => {
  const { order, orderBy, onRequestSort, priceCategory } = { ...props };
  const classes = muiTableHeaderStyles();

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
    <EnhancedTableHead>
      <EnhancedTableRow className={classes.root}>
        <Grid container>
          {tableHeaders.map((header, index) => {
            return (
              <Grid item xs={header.colSpan} key={index}>
                <EnhancedTableCell
                  sortDirection={orderBy === header.id ? order : false}
                  bold
                  centerText={header.centerText}
                >
                  <EnhancedTableSortLabel
                    active={orderBy === header.id}
                    direction={orderBy === header.id ? order : 'desc'}
                    onClick={createSortHandler(header.id)}
                  >
                    {header.label}
                  </EnhancedTableSortLabel>
                </EnhancedTableCell>
              </Grid>
            );
          })}
        </Grid>
      </EnhancedTableRow>
    </EnhancedTableHead>
  );
};

const MuiTableBody = (props) => {
  const { data, activeDisplay } = { ...props };

  return (
    <EnhancedTableBody>
      {data.map((card, index) => {
        return (
          <EnhancedTableRow key={index}>
            <Grid container>
              <Grid item xs={4}>
                <EnhancedTableCell data-cy='card-details'>
                  <CardDetails
                    cardName={card.cardName}
                    setName={card.setName}
                    tcgUrl={card.tcgUrl}
                    tcgImageUrl={card.tcgImageUrl}
                    tcgInventoryUrl={card.tcgInventoryUrl}
                    activeDisplay={activeDisplay}
                  />
                </EnhancedTableCell>
              </Grid>
              <Grid item xs={1}>
                <EnhancedTableCell
                  useColor
                  bold
                  isPositive={isPositive(card.spread)}
                  centerText
                  data-cy='card-spread'
                >
                  {addZeroes(card.spread)}
                  {'%'}
                </EnhancedTableCell>
              </Grid>
              <Grid item xs={2}>
                <EnhancedTableCell
                  useColor
                  bold
                  isPositive={isPositive(card.gainLoss)}
                  centerText
                  data-cy='card-gain-loss'
                >
                  {addZeroes(card.gainLoss)}
                </EnhancedTableCell>
              </Grid>
              <Grid item xs={1}>
                <EnhancedTableCell centerText data-cy='card-quantity'>
                  {card.quantity}
                </EnhancedTableCell>
              </Grid>
              <Grid item xs={2}>
                <EnhancedTableCell centerText data-cy='card-avg-purchase-price'>
                  {'$'}
                  {addZeroes(card.avgPurchasePrice)}
                </EnhancedTableCell>
              </Grid>
              <Grid item xs={2}>
                <EnhancedTableCell centerText data-cy='card-tcg-price'>
                  {'$'}
                  {addZeroes(card.tcgPrice)}
                </EnhancedTableCell>
              </Grid>
            </Grid>
          </EnhancedTableRow>
        );
      })}
    </EnhancedTableBody>
  );
};

const MuiTable = (props) => {
  const { cards, isLoadingCards, priceCategory, activeDisplay } = { ...props };

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('spread');
  const [rowPerPage, setRowPerPage] = useState(10);
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
    setCurrentPage(0);
  };

  return (
    <React.Fragment>
      <EnhancedTableContainer data-test='CardsTable'>
        <EnhancedTable stickyHeader>
          <MuiTableHeaders
            order={order}
            orderBy={orderBy}
            priceCategory={priceCategory}
            onRequestSort={handleRequestSort}
          />
          {!isLoadingCards && (
            <MuiTableBody data={data} activeDisplay={activeDisplay} />
          )}
        </EnhancedTable>

        {isLoadingCards ? (
          // Must render as full table to center with no scroll bar
          <EnhancedTable>
            <EnhancedTableBody>
              <EnhancedTableRow>
                <EnhancedTableCell padding noBorder colSpan={5}>
                  <Spinner />
                </EnhancedTableCell>
              </EnhancedTableRow>
            </EnhancedTableBody>
          </EnhancedTable>
        ) : (
          <EnhancedTablePagination
            rowsPerPageOptions={[5, 10, 25]}
            count={cards.length}
            rowsPerPage={rowPerPage}
            noBorder
            page={currentPage}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </EnhancedTableContainer>
    </React.Fragment>
  );
};

export default MuiTable;
