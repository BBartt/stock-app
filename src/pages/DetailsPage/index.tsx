import React from "react";
import { Button, Grid, Typography } from "@mui/material";

const DetailsPage: React.FC = (): JSX.Element => {
  return (
    <Grid item>
      <Button variant="outlined">Go Back</Button>

      <Typography variant="h4" component="h4">
        Heading
      </Typography>

      <Typography component="address">adres</Typography>

      <Typography>capitalizaion</Typography>

      <Typography>long text</Typography>
    </Grid>
  );
};

export default DetailsPage;
