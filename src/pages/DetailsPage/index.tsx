import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useHistory } from "react-router";
import { routes } from "../../routes";
import Loader from "../../components/Loader";
import { any, toLocalizeNumber } from "../../utils";

const DetailsPage: React.FC = (): JSX.Element => {
  const { stock } = useAppSelector((state) => state.stock);
  const { push } = useHistory();

  return (
    <Grid item>
      <Button onClick={() => push(routes.home)} variant="outlined">
        Go Back
      </Button>

      {any(stock) ? (
        <>
          <Typography variant="h4" component="h4">
            {stock.Name}
          </Typography>

          <Typography component="address">{stock.Address}</Typography>

          <Typography>
            {stock.MarketCapitalization &&
              toLocalizeNumber(stock.MarketCapitalization)}
          </Typography>

          <Typography>{stock.Description}</Typography>
        </>
      ) : (
        <Loader />
      )}
    </Grid>
  );
};

export default DetailsPage;
