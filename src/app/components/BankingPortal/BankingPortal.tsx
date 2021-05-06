import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageLayout from "../../layouts/PageLayout";
import Sidebar from "./Sidebar";
import UserDashboard from "./UserDashboard";
import Header from "./Header";
import { Content, Main } from "./styles";
import PortalSessionContext from "./PortalSessionContext";
import AppSession from "../../../utils/AppSession";

export type BankingPortalProps = {
  user: any;
};

const appSession = new AppSession();
const [ dashboardQueryRef, dashboardQuery ] = appSession.initializeApp();

const BankingPortal: React.FC<BankingPortalProps> = ({ user }) => {

  return (
    <PortalSessionContext.Provider value={appSession}>
      <PageLayout>
        <Sidebar />
        <Content>
          <Header />
          <Main>
            <Router>
              <Switch>
                <Route path="/">
                  <UserDashboard  dashboardQueryRef={dashboardQueryRef} dashboardQuery={dashboardQuery}/>
                </Route>
              </Switch>
            </Router>
          </Main>
        </Content>
      </PageLayout>
    </PortalSessionContext.Provider>
  );
};

export default BankingPortal;
