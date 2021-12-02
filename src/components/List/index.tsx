import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";

interface IList {
  items: any;
}

const ListComponent: React.FC<IList> = (items) => {
  return (
    <List
      sx={{ pt: 3 }}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Search Results
        </ListSubheader>
      }
    >
      <Box sx={{ border: `1px solid ${grey[900]}`, borderRadius: 1 }}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <AddIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Single-line item" />
        </ListItem>

        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <AddIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Single-line item" />
        </ListItem>

        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <AddIcon />
            </IconButton>
          }
        >
          <ListItemText primary="Single-line item" />
        </ListItem>
      </Box>
    </List>
  );
};

export default ListComponent;
