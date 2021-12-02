import { AxiosResponse } from "axios";
import API from "./config";

const API_KEY = process.env.REACT_APP_API_KEY ?? "";

function get(search: string): Promise<AxiosResponse<any, any>> {
  return API.get(
    `query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${API_KEY}`
  );
}

function getOverview(search: string): Promise<AxiosResponse<any, any>> {
  return API.get(`query?function=OVERVIEW&symbol=${search}&apikey=${API_KEY}`);
}
export const stocksApi = {
  get,
  getOverview,
};
