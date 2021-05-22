import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppSession from "../../../utils/AppSession";
import PageLayout from "../../layouts/PageLayout";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Content, Main } from "./styles";
import PortalSessionContext from "./PortalSessionContext";

import routes from "./routes";

export const appSession = new AppSession();
export const appConfig = appSession.initializeApp();

export type BankingPortalProps = {
  match: any;
};

const BankingPortal: React.FC<BankingPortalProps> = ({ match }) => {
  return (
    <PortalSessionContext.Provider value={appSession}>
      <PageLayout>
        <Sidebar />
        <Content>
          <Header />
          <Main>
            <BrowserRouter forceRefresh> 
              <Switch>
                {Array.from(routes).map((route) => {
                  return (
                    <Route
                      path={`${match.path}${route.path}`}
                      key={route.path}
                      exact
                    >
                      <route.component />
                    </Route>
                  );
                })}
              </Switch>
            </BrowserRouter>
          </Main>
        </Content>
      </PageLayout>
    </PortalSessionContext.Provider>
  );
};

export default BankingPortal;
