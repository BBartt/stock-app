import { IMatches } from "../../interfaces";
import { removeDuplicatesBy } from "../../utils";
import { AddRemoveReducer, Constants } from "../actions/types";

export interface IinitialState {
  favourites: IMatches[];
}

export const initialState: IinitialState = {
  favourites: [],
};

const portfolioReducer = (
  state: IinitialState = initialState,
  action: AddRemoveReducer
): IinitialState => {
  switch (action.type) {
    case Constants.ADD:
      const newState = [...state.favourites, action.payload];
      const removiedDuplicates = removeDuplicatesBy(newState, "1. symbol");

      return {
        favourites: removiedDuplicates,
      };
    case Constants.DELETE:
      const newFavourites: IMatches[] = state.favourites.filter(
        (favourites) => favourites["1. symbol"] !== action.payload
      );

      return {
        favourites: newFavourites,
      };
    default:
      return state;
  }
};

export default portfolioReducer;
