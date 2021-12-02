import React, { useState } from "react";
import { Grid } from "@mui/material";
import Input from "../../components/Input";
import ListComponent from "../../components/List";
import { grey } from "@mui/material/colors";
import Table from "../../components/Table";

const HomePage: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ px: 2 }}
        borderRight={{ md: `1px solid ${grey[900]}` }}
      >
        <Input search={search} setSearch={setSearch} />

        <ListComponent items={[]} />
      </Grid>

      <Grid item xs={12} md={6} sx={{ px: 2 }} marginTop={{ xs: 4, md: 0 }}>
        <Table />
      </Grid>
    </>
  );
};

export default HomePage;
