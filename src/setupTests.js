import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// File not referenced, only used for configuration

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});
