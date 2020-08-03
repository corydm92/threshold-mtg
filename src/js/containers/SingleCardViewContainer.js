import { connect } from 'react-redux';
import SingleCardView from '../components/SingleCardView';
import { fetchSingleCard, isLoadingCardFalse } from '../../redux/actions';
import { cardSelector } from '../../selectors/cardSelector';

const mapStateToProps = (state) => {
  return {
    card: cardSelector(state),
    isLoadingCard: state.isLoadingReducer.card,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleCard: (params) => dispatch(fetchSingleCard(params)),
    isLoadingCardFalse: () => dispatch(isLoadingCardFalse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCardView);
