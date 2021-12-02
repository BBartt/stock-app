import { IStock, IMatches } from "../../interfaces";

export enum Constants {
  FETCH_STOCKS_BEGIN = "FETCH_STOCKS_BEGIN",
  FETCH_STOCKS_FAILURE = "FETCH_STOCKS_FAILURE",
  FETCH_STOCKS_SUCCESS = "FETCH_STOCKS_SUCCESS",
  STOCK = "STOCK",
  ADD = "ADD",
  DELETE = "DELETE",
}

export type FetchStocksBegin = {
  type: typeof Constants.FETCH_STOCKS_BEGIN;
  payload: null;
};

export type FetchStocksSuccess = {
  type: typeof Constants.FETCH_STOCKS_SUCCESS;
  payload: IMatches[];
};

export type FetchStocksFail = {
  type: typeof Constants.FETCH_STOCKS_FAILURE;
  payload: string;
};

export type IActionStocksReducer =
  | FetchStocksBegin
  | FetchStocksSuccess
  | FetchStocksFail;

export type Stock = {
  type: typeof Constants.STOCK;
  payload: IStock;
};

export type IActionStockReducer = Stock;

export type addStockType = {
  type: typeof Constants.ADD;
  payload: IMatches;
};

export type removeStockType = {
  type: typeof Constants.DELETE;
  payload: string;
};

export type AddRemoveReducer = addStockType | removeStockType;
