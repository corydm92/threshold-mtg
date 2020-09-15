import React, { useState, useEffect, useRef } from 'react';
import EnhancedTableContainer from '../component-library/mui/components/Table/EnhancedTableContainer';
import EnhancedTable from '../component-library/mui/components/Table/EnhancedTable';
import EnhancedTableHead from '../component-library/mui/components/Table/EnhancedTableHead';
import EnhancedTableBody from '../component-library/mui/components/Table/EnhancedTableBody';
import EnhancedTableRow from '../component-library/mui/components/Table/EnhancedTableRow';
import EnhancedTableCell from '../component-library/mui/components/Table/EnhancedTableCell';
import EnhancedTablePagination from '../component-library/mui/components/Table/EnhancedTablePagination';
import EnhancedSpinner from '../component-library/mui/components/Spinner';
import EnhancedTableSortLabel from '../component-library/mui/components/Table/EnhancedTableSortLabel';
import Grid from '@material-ui/core/Grid';
import { getPriceCategory, isPositive, addZeroes } from '../../utils';
import { makeStyles } from '@material-ui/core/styles';
import CardDetails from './CardDetails';
import CardImage from './CardImage';
import EnhancedTypography from '../component-library/mui/components/Typography';
import IconHolder from './IconHolder';

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

const useStyles = makeStyles((theme) => {
  // Below is HeightOfToolbar * 2 (two toolbars, the header and the table toolbar) + theme.spacing (Associated margins + Pagination) - 3px (Other)
  const scrollSpace =
    theme.mixins.toolbar['@media (min-width:600px)'].minHeight * 2 +
    theme.spacing(7) -
    3;

  return {
    root: {
      '& .MuiGrid-item': {
        display: 'flex',
      },
      '& .MuiTableRow-root:last-child': {
        borderBottom: 0,
      },
    },
    centerGridItem: {
      justifyContent: 'center',
    },
    gridContainer: {
      padding: `${theme.spacing(1)}px 0px`,
    },
    stickyContainer: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: theme.palette.primary.contrastText,
      borderBottom: `1px solid ${theme.palette.custom.lightGray}`,
    },
    tableContainer: {
      // Positioning to fix table headers and side nav (nav has border of 1px)
      position: 'relative',
      bottom: '1px',
      maxHeight: `calc(100vh - ${scrollSpace}px)`,
      overflow: 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    noBorder: {
      border: 0,
    },
    spinner: {
      marginTop: theme.spacing(12),
    },
    pagination: {
      borderTop: `1px solid ${theme.palette.custom.lightGray}`,
    },
    tableHeader: {
      paddingTop: '16px', // Table Row has 8px padding, adding another 8px to make even with side bar header
    },
    cardDetails: {
      paddingLeft: theme.spacing(2),
    },
  };
});

const MuiTableHeaders = (props) => {
  const { order, orderBy, onRequestSort, priceCategory } = { ...props };

  const classes = useStyles();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const tableHeaders = [
    { id: 'cardName', label: 'Card', colSpan: 1 },
    { id: 'dateTo', label: 'Date', colSpan: 3 },
    { id: 'spread', label: 'Spread', colSpan: 1 },
    { id: 'gainLoss', label: 'Gain / Loss', colSpan: 2 },
    { id: 'quantity', label: 'Quantity', colSpan: 1 },
    {
      id: 'avgPurchasePrice',
      label: 'Avg Purchase Price',
      colSpan: 2,
    },
    {
      id: 'tcgPrice',
      label: getPriceCategory(priceCategory),
      colSpan: 2,
    },
  ];

  const isCardName = (header) => {
    if (header.id === 'cardName') {
      return 'asc';
    }
    return 'desc';
  };

  return (
    <EnhancedTableHead>
      <EnhancedTableRow className={classes.noBorder}>
        <Grid
          container
          className={`${classes.gridContainer} ${classes.stickyContainer} ${classes.tableHeader}`}
        >
          {tableHeaders.map((header, index) => {
            return (
              <Grid
                item
                className={classes.centerGridItem}
                xs={header.colSpan}
                key={index}
              >
                <EnhancedTableCell
                  sortDirection={orderBy === header.id ? order : false}
                >
                  <EnhancedTableSortLabel
                    active={orderBy === header.id}
                    direction={
                      orderBy === header.id ? order : isCardName(header)
                    }
                    onClick={createSortHandler(header.id)}
                  >
                    <EnhancedTypography bold>{header.label}</EnhancedTypography>
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

const MuiTableBody = React.forwardRef((props, ref) => {
  const { data, setPriceCalc } = { ...props };

  const classes = useStyles();

  const handlePriceCalc = (tcgPrice, purchasePrice, gain, spread, cardName) => {
    setPriceCalc({
      tcgPrice,
      purchasePrice,
      gain,
      spread,
      cardName,
    });
  };

  return (
    <EnhancedTableBody>
      {data.map((card, index) => {
        return (
          <EnhancedTableRow
            id={`table-row-${index}`}
            key={index}
            ref={index === 0 ? ref : null}
          >
            <Grid container className={classes.gridContainer}>
              <Grid item xs={1}>
                <EnhancedTableCell dataTest='card-name'>
                  <CardImage tcgImageUrl={card.tcgImageUrl} foil={card.foil} />
                </EnhancedTableCell>
              </Grid>
              <Grid item xs={3}>
                <EnhancedTableCell alignTop dataTest='card-date'>
                  <CardDetails
                    className={classes.cardDetails}
                    cardName={card.cardName}
                    setName={card.setName}
                    dateFrom={card.dateFrom}
                    dateTo={card.dateTo}
                  >
                    <IconHolder
                      scaleSize={1}
                      foil={card.foil}
                      setName={card.setName}
                      tcgUrl={card.tcgUrl}
                      tcgSellerDashboardUrl={card.tcgSellerDashboardUrl}
                      cardName={card.cardName}
                      language={card.language}
                      handlePriceCalc={() =>
                        handlePriceCalc(
                          card.tcgPrice,
                          card.avgPurchasePrice,
                          card.gainLoss,
                          card.spread,
                          card.cardName
                        )
                      }
                    />
                  </CardDetails>
                </EnhancedTableCell>
              </Grid>
              <Grid item className={classes.centerGridItem} xs={1}>
                <EnhancedTableCell
                  useColor
                  bold
                  isPositive={isPositive(card.spread)}
                  centerText
                  dataTest='card-spread'
                >
                  {addZeroes(card.spread)}
                  {'%'}
                </EnhancedTableCell>
              </Grid>
              <Grid item className={classes.centerGridItem} xs={2}>
                <EnhancedTableCell
                  useColor
                  bold
                  isPositive={isPositive(card.gainLoss)}
                  centerText
                  dataTest='card-gain-loss'
                >
                  {addZeroes(card.gainLoss)}
                </EnhancedTableCell>
              </Grid>
              <Grid item className={classes.centerGridItem} xs={1}>
                <EnhancedTableCell centerText dataTest='card-quantity'>
                  {card.quantity}
                </EnhancedTableCell>
              </Grid>
              <Grid item className={classes.centerGridItem} xs={2}>
                <EnhancedTableCell
                  centerText
                  dataTest='card-avg-purchase-price'
                >
                  {'$'}
                  {addZeroes(card.avgPurchasePrice)}
                </EnhancedTableCell>
              </Grid>
              <Grid item className={classes.centerGridItem} xs={2}>
                <EnhancedTableCell centerText dataTest='card-tcg-price'>
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
});

const MuiTable = (props) => {
  const { cards, isLoadingCards, priceCategory, setPriceCalc } = { ...props };

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('spread');
  const [rowPerPage, setRowPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  // Use for scroll into view
  const firstRowRef = useRef();

  const classes = useStyles();

  // LIFECYCLE METHODS //

  useEffect(() => {
    setCurrentPage(0);
  }, [isLoadingCards]);

  const handleRequestSort = (event, property) => {
    if (property === 'cardName') {
      // Reverse logic for cardName column sorting
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      return setOrderBy(property);
    }

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

  // HELPER METHODS //

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
    firstRowRef.current.scrollIntoView(false);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowPerPage(event.target.value);
    setCurrentPage(0);
  };

  return (
    <React.Fragment>
      <EnhancedTableContainer
        className={classes.tableContainer}
        dataTest='CardsTable'
      >
        <EnhancedTable className={classes.root}>
          <MuiTableHeaders
            order={order}
            orderBy={orderBy}
            priceCategory={priceCategory}
            onRequestSort={handleRequestSort}
          />
          {!isLoadingCards && (
            <MuiTableBody
              data={data}
              setPriceCalc={setPriceCalc}
              ref={firstRowRef}
            />
          )}
        </EnhancedTable>
      </EnhancedTableContainer>
      {isLoadingCards ? (
        <EnhancedSpinner className={classes.spinner} />
      ) : (
        <EnhancedTablePagination
          rowsPerPageOptions={[5, 10, 25]}
          count={cards.length}
          rowsPerPage={rowPerPage}
          noBorder
          className={classes.pagination}
          page={currentPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </React.Fragment>
  );
};

export default MuiTable;
