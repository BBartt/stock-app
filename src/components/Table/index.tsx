import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getStock, removeStock } from "../../redux/actions/stocks";
import { grey } from "@mui/material/colors";
import { routes } from "../../routes";
import { useHistory } from "react-router";

const TableComponent = () => {
  const { favourites } = useAppSelector((state) => state.portfolio);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (symbol: string) => {
    dispatch(getStock(symbol));
    history.push(routes.details);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        border: `1px solid ${grey[900]}`,
        borderRadius: 1,
        height: 330,
        overflowX: "auto",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company name</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {favourites.map((favourite) => {
            const symbol = favourite["1. symbol"];
            const name = favourite["2. name"];

            return (
              <TableRow
                key={name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Button onClick={() => handleClick(symbol)} variant="text">
                    {name}
                  </Button>
                </TableCell>
                <TableCell>{symbol}</TableCell>

                <TableCell>
                  <Button onClick={() => dispatch(removeStock(name))}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
