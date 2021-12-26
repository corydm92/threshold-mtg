import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

const mapStateToProps = (state) => {
  return {
    ckExport: state.cardsReducer.ckExport,
    rawExport: state.cardsReducer.rawExport,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
