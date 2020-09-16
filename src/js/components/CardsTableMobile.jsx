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
  return {
    root: {
      '& .MuiGrid-item': {
        display: 'flex',
        flexWrap: 'wrap',
      },
      '& .MuiTableRow-root:last-child': {
        borderBottom: 0,
      },
    },
    gridItem: {
      display: 'block',
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
    noBorder: {
      border: 0,
    },
    spinner: {
      marginTop: theme.spacing(12),
    },
    pagination: {
      borderTop: `1px solid ${theme.palette.custom.lightGray}`,
      justifyContent: 'center',
      '& .MuiToolbar-root': {
        padding: `0 0 ${theme.spacing(2)}px`,
      },
    },
    tableHeader: {
      paddingTop: '16px', // Table Row has 8px padding, adding another 8px to make even with side bar header
    },
    typography: {
      display: 'inline',
    },
    mobileDetailsCell: {
      width: '100%',
      justifyContent: 'space-between',
    },
    mobileImageGridItem: {
      justifyContent: 'left',
    },
    mobileMaxWidth: {
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cardDetails: {
      '& p': {
        textAlign: 'center',
        display: 'block',
      },
    },
    iconHolder: {
      width: 'auto',
      paddingBottom: theme.spacing(1),
    },
    tableBody: {
      '& .MuiTableCell-root': {
        paddingBottom: theme.spacing(1),
      },
      '& .MuiTableRow-root': {
        display: 'block',
        marginBottom: theme.spacing(2),
      },
    },
    dataSection: {
      padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    },
  };
});

const MuiTableBody = React.forwardRef((props, ref) => {
  const { data, setPriceCalc, priceCategory } = { ...props };

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
    <EnhancedTableBody className={classes.tableBody}>
      {data.map((card, index) => {
        return (
          <EnhancedTableRow
            id={`table-row-${index}`}
            key={index}
            ref={index === 0 ? ref : null}
          >
            <EnhancedTableCell
              className={classes.mobileMaxWidth}
              alignTop
              dataTest='mobile-card-details'
            >
              <CardDetails
                className={classes.cardDetails}
                cardName={card.cardName}
                setName={card.setName}
                dateFrom={card.dateFrom}
                dateTo={card.dateTo}
              />
            </EnhancedTableCell>

            <Grid
              container
              className={`${classes.mobileMaxWidth} ${classes.dataSection}`}
            >
              <Grid className={classes.mobileImageGridItem} item xs={6}>
                <EnhancedTableCell dataTest='card-name'>
                  <CardImage tcgImageUrl={card.tcgImageUrl} foil={card.foil} />
                </EnhancedTableCell>
              </Grid>
              <Grid item xs={6}>
                <EnhancedTableCell
                  useColor
                  bold
                  isPositive={isPositive(card.spread)}
                  centerText
                  dataTest='card-spread'
                  className={classes.mobileDetailsCell}
                >
                  <EnhancedTypography className={classes.typography}>
                    {'Spread:'}
                  </EnhancedTypography>
                  {addZeroes(card.spread)}
                  {'%'}
                </EnhancedTableCell>

                <EnhancedTableCell
                  className={classes.mobileDetailsCell}
                  useColor
                  bold
                  isPositive={isPositive(card.gainLoss)}
                  centerText
                  dataTest='card-gain-loss'
                >
                  <EnhancedTypography className={classes.typography}>
                    {'Gain / Loss: '}
                  </EnhancedTypography>
                  {addZeroes(card.gainLoss)}
                </EnhancedTableCell>

                <EnhancedTableCell
                  className={classes.mobileDetailsCell}
                  centerText
                  dataTest='card-quantity'
                >
                  <EnhancedTypography className={classes.typography}>
                    {'Quantity: '}
                  </EnhancedTypography>
                  {card.quantity}
                </EnhancedTableCell>

                <EnhancedTableCell
                  className={classes.mobileDetailsCell}
                  centerText
                  dataTest='card-avg-purchase-price'
                >
                  <EnhancedTypography className={classes.typography}>
                    {'Avg Purchase Price: '}
                  </EnhancedTypography>
                  {'$'}
                  {addZeroes(card.avgPurchasePrice)}
                </EnhancedTableCell>

                <EnhancedTableCell
                  className={classes.mobileDetailsCell}
                  centerText
                  dataTest='card-tcg-price'
                >
                  <EnhancedTypography className={classes.typography}>
                    {getPriceCategory(priceCategory)}
                  </EnhancedTypography>
                  {'$'}
                  {addZeroes(card.tcgPrice)}
                </EnhancedTableCell>
              </Grid>
            </Grid>

            <EnhancedTableCell
              className={classes.mobileMaxWidth}
              alignTop
              dataTest='mobile-icon-holder'
            >
              <IconHolder
                className={classes.iconHolder}
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
            </EnhancedTableCell>
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
          {/* <MuiTableHeaders
            order={order}
            orderBy={orderBy}
            priceCategory={priceCategory}
            onRequestSort={handleRequestSort}
          /> */}
          {!isLoadingCards && (
            <MuiTableBody
              data={data}
              setPriceCalc={setPriceCalc}
              ref={firstRowRef}
              priceCategory={priceCategory}
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
          labelRowsPerPage=''
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
