import { HashRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import StyledHeader from "./components/StyledHeader";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import { routes } from "./routes";
import { Grid } from "@mui/material";

const App: React.FC = (): JSX.Element => {
  return (
    <HashRouter>
      <>
        <CssBaseline />
        <StyledHeader>SDH Frontend homework</StyledHeader>

        <Grid container sx={{ mt: 2 }}>
          <Switch>
            <Route exact={true} path={routes.home}>
              <HomePage />
            </Route>
            <Route path={routes.details}>
              <DetailsPage />
            </Route>
          </Switch>
        </Grid>
      </>
    </HashRouter>
  );
};

export default App;
