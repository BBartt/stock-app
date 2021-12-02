import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { routes } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = (): JSX.Element => {
  return (
    <HashRouter>
      <>
        <GlobalStyle />
        <Header>SDH Frontend homework</Header>

        <main>
          <Switch>
            <Route exact={true} path={routes.home}>
              <HomePage />
            </Route>
            <Route path={routes.details}>
              <DetailsPage />
            </Route>
          </Switch>
        </main>
      </>
    </HashRouter>
  );
};

export default App;
