import { connect } from 'react-redux';
import CardsView from '../components/CardsView';
import { fetchCards, isLoadingCardsFalse } from '../../redux/actions';
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
    fetchCards: (params) => dispatch(fetchCards(params)),
    isLoadingCardsFalse: () => dispatch(isLoadingCardsFalse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsView);
