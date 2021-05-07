import { Wrapper } from "./styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Accounts = ()=>{
    return (
        <Router>
            <Switch>
                <Route path="/accounts-summary">
                    <Wrapper>
                        Accounts
                    </Wrapper>
                </Route>
            </Switch>
        </Router>
    )
}

export default Accounts;