import { connect } from 'react-redux';
import MainView from '../components/MainView';
import {
  fetchCards,
  fetchSingleCard,
  isLoadingCardsFalse,
} from '../../redux/actions';
import { cardsSelector } from '../../selectors/cardsSelector';
import { cardSelector } from '../../selectors/cardSelector';

const mapStateToProps = (state) => {
  return {
    cards: cardsSelector(state),
    card: cardSelector(state),
    isLoadingCards: state.isLoadingReducer.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (params) => dispatch(fetchCards(params)),
    fetchSingleCard: (params) => dispatch(fetchSingleCard(params)),
    isLoadingCardsFalse: () => dispatch(isLoadingCardsFalse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
