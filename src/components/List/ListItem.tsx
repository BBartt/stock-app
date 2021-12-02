import React from "react";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { IMatches } from "../../interfaces";
import { addStock } from "../../redux/actions/stocks";

interface IListItem {
  stock: IMatches;
}

const Item: React.FC<IListItem> = ({ stock }) => {
  const dispatch = useDispatch();
  const name = stock["1. symbol"];
  const symbol = stock["2. name"];
  const primary = `${name} - ${symbol}`;

  const handleDispatch = (stock: IMatches) => {
    dispatch(addStock(stock));
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleDispatch(stock)}
        >
          <AddIcon />
        </IconButton>
      }
    >
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default Item;
