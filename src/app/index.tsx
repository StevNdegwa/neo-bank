import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IconContext } from "react-icons";
import Home from "./components/Home";
import Auth from "./components/Auth";

function App() {
  return (
    <IconContext.Provider value={{className:"neo-bank-react-icons"}}>
      <Router>
      <Switch>
        <Route path="/create-acount" component={Auth.CreateAccount}/>
        <Route path="/retail-login" component={Auth.Login}/>
        <Route path="/" component={Home}/>  
      </Switch> 
    </Router>
    </IconContext.Provider>
  );
}

export default App;
