import { connect } from 'react-redux';
import MainView from '../components/MainView';

const mapStateToProps = (state) => {
  return {
    cards: state.CardsReducer,
  };
};

export default connect(mapStateToProps)(MainView);
