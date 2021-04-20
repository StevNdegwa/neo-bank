import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageLayout from "../../layouts/PageLayout";
import Sidebar from "./Sidebar";
import UserDashboard from "./UserDashboard";
import Header from "./Header";
import { Content, Main } from "./styles";

export type BankingPortalProps = {
  user: any;
};

const BankingPortal: React.FC<BankingPortalProps> = ({ user }) => {
  console.log(user);

  return (
    <PageLayout>
        <Sidebar />
        <Content>
          <Header/>
          <Main>
            <Router>
              <Switch>
                <Route path="/" component={UserDashboard} />
              </Switch>
            </Router>
          </Main>
        </Content>
    </PageLayout>
  );
};

export default BankingPortal;
