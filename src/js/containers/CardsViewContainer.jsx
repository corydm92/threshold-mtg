import { connect } from 'react-redux';
import CardsView from '../components/CardsView';
import {
  isLoadingCardsFalse,
  setPriceCategoryLow,
  setPriceCategoryMid,
  setPriceCategoryHigh,
  setPriceCategoryMarket,
} from '../../redux/actions';
import { cardsSelector, cardNamesAndSets } from '../../selectors/cardsSelector';

const mapStateToProps = (state) => {
  return {
    cards: cardsSelector(state),
    cardNamesAndSets: cardNamesAndSets(state), // Array of objects, each card name and set
    isLoadingCards: state.isLoadingReducer.cards,
    priceCategory: state.tcgPriceCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLoadingCardsFalse: () => dispatch(isLoadingCardsFalse()),
    setPriceCategoryLow: () => dispatch(setPriceCategoryLow()),
    setPriceCategoryMid: () => dispatch(setPriceCategoryMid()),
    setPriceCategoryHigh: () => dispatch(setPriceCategoryHigh()),
    setPriceCategoryMarket: () => dispatch(setPriceCategoryMarket()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsView);
