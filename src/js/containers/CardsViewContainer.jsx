import { connect } from 'react-redux';
import CardsView from '../components/CardsView';
import {
  setPriceCategoryLow,
  setPriceCategoryMid,
  setPriceCategoryHigh,
  setPriceCategoryMarket,
  setFilterOptions,
  clearFilterOptions,
} from '../../redux/actions';
import { cardsSelector, cardNamesAndSets } from '../../selectors/cardsSelector';

const mapStateToProps = (state) => {
  return {
    cards: cardsSelector(state),
    cardNamesAndSets: cardNamesAndSets(state), // Array of objects, each card name and set
    isLoadingCards: state.isLoadingReducer.cards,
    priceCategory: state.tcgPriceCategory,
    filterValues: state.filterReducer,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsView);
