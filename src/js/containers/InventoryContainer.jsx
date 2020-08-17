import React from 'react';
import { connect } from 'react-redux';
import InventoryRoutes from '../routes/InventoryRoutes';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const InventoryContainer = (props) => {
  return (
    <div data-test='inventory-container'>
      <InventoryRoutes />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryContainer);
