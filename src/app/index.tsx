import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RelayEnvironmentProvider } from "react-relay";
import { IconContext } from "react-icons";
import Home from "./components/Home";
import Auth from "./components/Auth";
import BankingPortal from "./components/BankingPortal";
import environment from "./config/relay/Environment";
import Firebase from "../utils/firebase";
import FirebaseContext from "./FirebaseContext";

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <IconContext.Provider value={{ className: "neo-bank-react-icons" }}>
        <FirebaseContext.Provider value={new Firebase()}>
          <Router>
            <Switch>
              <Route path="/create-acount" component={Auth.CreateAccount} />
              <Route path="/retail-login" component={Auth.Login} />
              <Route
                path="/user-home"
                render={
                  ({ location })=>{
                    return <BankingPortal user={location?.state}/>
                  }
                }
              />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </FirebaseContext.Provider>
      </IconContext.Provider>
    </RelayEnvironmentProvider>
  );
}

export default App;
