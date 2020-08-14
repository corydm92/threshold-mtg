import tcgPricesReducer, {
  initState,
} from '../../../redux/reducers/tcgPricesReducer';
import { fullState } from '../../../js/constants/reduxStoreMock';
import {
  SET_TCG_PRICES_SUCCESSFUL,
  SET_TCG_PRICES_FAILED,
} from '../../../redux/actionTypes';

const mockTcgPricesReducer = { ...fullState.tcgPricesReducer };

describe('SpecTcgReducer tests', () => {
  it('Returns init state', () => {
    expect(tcgPricesReducer(undefined, {})).toEqual(initState);
  });

  it('Stores normalized payload', () => {
    expect(
      tcgPricesReducer(
        {},
        {
          type: SET_TCG_PRICES_SUCCESSFUL,
          payload: mockTcgPricesReducer,
        }
      )
    ).toEqual(mockTcgPricesReducer);
  });

  it('Returns initState on failed fetch', () => {
    expect(
      tcgPricesReducer(
        {},
        {
          type: SET_TCG_PRICES_FAILED,
        }
      )
    ).toEqual(initState);
  });
});
