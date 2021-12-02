import React from "react";
import { List, ListSubheader } from "@mui/material";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";
import { IMatches } from "../../interfaces";
import Loader from "../Loader";
import ListItem from "./ListItem";

interface IList {
  stocks: IMatches[];
  isLoading: boolean;
  error: string | null;
}

const ListComponent: React.FC<IList> = ({ stocks = [], isLoading, error }) => {
  if (error) return <h1>{error}</h1>;

  if (isLoading) return <Loader />;

  return (
    <List
      sx={{ pt: 3 }}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Search Results
        </ListSubheader>
      }
    >
      <Box
        sx={{
          border: `1px solid ${grey[900]}`,
          borderRadius: 1,
          height: 200,
          overflowX: "auto",
        }}
      >
        {stocks?.length > 0 ? (
          stocks.map((stock: IMatches) => {
            const symbol = stock["1. symbol"];

            return <ListItem key={symbol} stock={stock} />;
          })
        ) : (
          <div>No data</div>
        )}
      </Box>
    </List>
  );
};

export default ListComponent;
