import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RelayEnvironmentProvider } from "react-relay";
import { IconContext } from "react-icons";
import Home from "./components/Home";
import Auth from "./components/Auth";
import environment from "./config/relay/Environment";

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <IconContext.Provider value={{ className: "neo-bank-react-icons" }}>
        <Router>
          <Switch>
            <Route path="/create-acount" component={Auth.CreateAccount} />
            <Route path="/retail-login" component={Auth.Login} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </IconContext.Provider>
    </RelayEnvironmentProvider>
  );
}

export default App;
