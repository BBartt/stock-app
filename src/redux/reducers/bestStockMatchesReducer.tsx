import { IMatches } from "../../interfaces";
import { Constants, IActionStocksReducer } from "../actions/types";

export interface IinitialState {
  isLoading: boolean;
  error: string | null;
  data: IMatches[];
}

export const initialState: IinitialState = {
  isLoading: false,
  error: null,
  data: [],
};

const bestStockMatchesReducer = (
  state: IinitialState = initialState,
  action: IActionStocksReducer
): IinitialState => {
  switch (action.type) {
    case Constants.FETCH_STOCKS_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case Constants.FETCH_STOCKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case Constants.FETCH_STOCKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default bestStockMatchesReducer;
