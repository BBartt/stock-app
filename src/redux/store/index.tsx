import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import stocksReducer from "../reducers/bestStockMatchesReducer";
import stockReducer from "../reducers/stockReducer";
import portfolioReducer from "../reducers/portfolioReducer";

const reducers = combineReducers({
  stocks: stocksReducer,
  stock: stockReducer,
  portfolio: portfolioReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducers>;

export type AppDispatch = typeof store.dispatch;

export default store;
