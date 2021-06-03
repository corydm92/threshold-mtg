import { connect } from 'react-redux';
import CardsView from '../components/CardsView';
import {
  setPriceCategoryLow,
  setPriceCategoryMid,
  setPriceCategoryHigh,
  setPriceCategoryMarket,
  setFilterOptions,
  clearFilterOptions,
  setPriceCalc,
  setCollectionPrice,
} from '../../redux/actions';
import { cardsSelector, cardNamesAndSets } from '../../selectors/cardsSelector';

const mapStateToProps = (state) => {
  return {
    cards: cardsSelector(state),
    cardNamesAndSets: cardNamesAndSets(state), // Array of objects, each card name and set
    isLoadingCards: state.isLoadingReducer.cards,
    priceCategory: state.tcgPriceCategory,
    filterValues: state.filterReducer,
    priceCalc: state.priceCalcReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPriceCategoryLow: () => dispatch(setPriceCategoryLow()),
    setPriceCategoryMid: () => dispatch(setPriceCategoryMid()),
    setPriceCategoryHigh: () => dispatch(setPriceCategoryHigh()),
    setPriceCategoryMarket: () => dispatch(setPriceCategoryMarket()),
    setFilterOptions: (payload) => dispatch(setFilterOptions(payload)),
    clearFilterOptions: () => dispatch(clearFilterOptions()),
    setPriceCalc: (payload) => dispatch(setPriceCalc(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsView);
