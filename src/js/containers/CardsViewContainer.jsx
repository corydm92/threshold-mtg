import { connect } from 'react-redux';
import CardsView from '../components/CardsView';
import {
  isLoadingCardsFalse,
  setPriceCategoryLow,
  setPriceCategoryMid,
  setPriceCategoryHigh,
  setPriceCategoryMarket,
} from '../../redux/actions';
import { cardsSelector } from '../../selectors/cardsSelector';

const mapStateToProps = (state) => {
  return {
    cards: cardsSelector(state),
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
