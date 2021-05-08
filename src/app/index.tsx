import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RelayEnvironmentProvider } from "react-relay";
import { IconContext } from "react-icons";
import PulseLoader from "react-spinners/PulseLoader";

import Home from "./components/Home";
import Auth from "./components/Auth";
import BankingPortalErrorUI from "./components/BankingPortal/BankingPortalErrorUI";
import ErrorBoundary from "./ErrorBoundary";
import environment from "./config/relay/Environment";
import Firebase from "../utils/firebase";
import FirebaseContext from "./FirebaseContext";
import { EBFallBack } from "./types";

import { Center } from "../styles/main";

const BankingPortal = lazy(() => import("./components/BankingPortal"));

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
                path="/banking"
                render={({ location, match }) => {
                  return (
                    <ErrorBoundary
                      fallback={({ error } : EBFallBack) => (
                        <BankingPortalErrorUI error={error} />
                      )}
                    >
                      <Suspense
                        fallback={
                          <Center
                            style={{
                              backgroundColor: "white",
                              height: "100%",
                              width: "100%",
                            }}
                          >
                            <PulseLoader />
                          </Center>
                        }
                      >
                        <BankingPortal match={match} />
                      </Suspense>
                    </ErrorBoundary>
                  );
                }}
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
