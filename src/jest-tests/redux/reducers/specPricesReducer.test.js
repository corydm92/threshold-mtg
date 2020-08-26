import specPricesReducer, {
  initState,
} from '../../../redux/reducers/specPricesReducer';
import { fullState } from '../../test-mocks/reduxStoreMock';
import {
  SET_SPEC_PRICES_SUCCESSFUL,
  SET_SPEC_PRICES_FAILED,
} from '../../../redux/actionTypes';

const mockSpecPricesReducer = { ...fullState.specPricesReducer };

describe('SpecPricesReducer tests', () => {
  it('Returns init state', () => {
    expect(specPricesReducer(undefined, {})).toEqual(initState);
  });

  it('Stores normalized payload', () => {
    expect(
      specPricesReducer(
        {},
        {
          type: SET_SPEC_PRICES_SUCCESSFUL,
          payload: mockSpecPricesReducer,
        }
      )
    ).toEqual(mockSpecPricesReducer);
  });

  it('Returns initState on failed fetch', () => {
    expect(
      specPricesReducer(
        {},
        {
          type: SET_SPEC_PRICES_FAILED,
        }
      )
    ).toEqual(initState);
  });
});
