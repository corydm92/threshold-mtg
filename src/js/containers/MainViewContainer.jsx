import { connect } from 'react-redux';
import MainView from '../components/MainView';
import { fetchCards, isLoadingCardsFalse } from '../../redux/actions';
import { cardsSelector } from '../../selectors/cardsSelector';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
