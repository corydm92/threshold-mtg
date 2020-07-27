import { connect } from 'react-redux';
import MainView from '../components/MainView';
import { fetchCardsData } from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    cards: state.cardsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCardsData: () => dispatch(fetchCardsData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
