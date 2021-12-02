import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { IStock, IMatches } from "../../interfaces";
import { RootState } from "../store";
import {
  FetchStocksFail,
  FetchStocksBegin,
  FetchStocksSuccess,
  Constants,
  Stock,
  AddRemoveReducer,
} from "./types";
import { stocksApi } from "../api/stocksApi";

export const fetchStocksBegin = (): FetchStocksBegin => ({
  type: Constants.FETCH_STOCKS_BEGIN,
  payload: null,
});

export const fetchStocksSuccess = (items: {
  bestMatches: IMatches[];
}): FetchStocksSuccess => ({
  type: Constants.FETCH_STOCKS_SUCCESS,
  payload: items.bestMatches,
});

export const fetchStocksFailure = (items: {
  message: string;
}): FetchStocksFail => ({
  type: Constants.FETCH_STOCKS_FAILURE,
  payload: items.message,
});

export const getStocks =
  (search: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    dispatch(fetchStocksBegin());
    stocksApi
      .get(search)
      .then((res) => {
        dispatch(fetchStocksSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchStocksFailure(err));
      });
  };

export const fetchStock = (item: IStock): Stock => ({
  type: Constants.STOCK,
  payload: item,
});

export const getStock =
  (symbol: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    stocksApi
      .getOverview(symbol)
      .then((res) => {
        dispatch(fetchStock(res.data));
      })
      .catch((err) => dispatch(fetchStocksFailure(err)));
  };

export const addStock = (stock: IMatches): AddRemoveReducer => ({
  type: Constants.ADD,
  payload: stock,
});

export const removeStock = (stock: string): AddRemoveReducer => ({
  type: Constants.DELETE,
  payload: stock,
});
