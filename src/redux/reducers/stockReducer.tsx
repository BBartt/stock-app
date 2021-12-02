import { IStock } from "../../interfaces";
import { Constants, IActionStockReducer } from "../actions/types";

export interface IinitialState {
  stock: IStock;
}

export const initialState: IinitialState = {
  stock: {
    Name: "",
    Description: "",
    MarketCapitalization: 0,
    Address: "",
  },
};

const stockReducer = (
  state: IinitialState = initialState,
  action: IActionStockReducer
): IinitialState => {
  switch (action.type) {
    case Constants.STOCK:
      return {
        ...state,
        stock: action.payload,
      };

    default:
      return state;
  }
};

export default stockReducer;
