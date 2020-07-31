import { connect } from 'react-redux';
import MainView from '../components/MainView';
import { fetchCards, fetchCard } from '../../redux/actions';
import { cardsSelector } from '../../selectors/cardsSelector';

const mapStateToProps = (state) => {
  return {
    cards: cardsSelector(state),
    isLoading: state.isLoadingReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (params) => dispatch(fetchCards(params)),
    fetchCard: (params) => dispatch(fetchCard(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
