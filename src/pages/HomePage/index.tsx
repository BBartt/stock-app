import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import ListComponent from "../../components/List";
import Table from "../../components/Table";
import { getStocks } from "../../redux/actions/stocks";
import useDebounce from "../../hooks/useDebounce";
import { useAppSelector } from "../../hooks/useAppSelector";

const HomePage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounce(search);

  const { isLoading, error, data } = useAppSelector((state) => state.stocks);

  useEffect(() => {
    debouncedSearchTerm.length > 0 && dispatch(getStocks(debouncedSearchTerm));
  }, [dispatch, debouncedSearchTerm, debouncedSearchTerm.length]);

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

        <ListComponent stocks={data} isLoading={isLoading} error={error} />
      </Grid>

      <Grid item xs={12} md={6} sx={{ px: 2 }} marginTop={{ xs: 4, md: 0 }}>
        <Table />
      </Grid>
    </>
  );
};

export default HomePage;
