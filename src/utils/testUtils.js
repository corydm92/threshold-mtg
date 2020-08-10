import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);

  return wrapper;
};

export const mockStore = (initState = {}) => {
  const middleWares = [thunk];
  const mockStore = configureStore(middleWares);
  return mockStore(initState);
};
