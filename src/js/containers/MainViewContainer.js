import { connect } from 'react-redux';
import MainView from '../components/MainView';
import { fetchCards } from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    cards: state.cardsReducer,
    isLoading: state.isLoadingReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (params) => dispatch(fetchCards(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
