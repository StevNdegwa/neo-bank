import { FC } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { Wrapper } from "./styles";
import { loadQuery, usePreloadedQuery } from "react-relay";
import environment from "../../../config/relay/Environment";


const userDashboardQuery = graphql`
    query UserDashboardQuery ( $idToken:String!, $csrfToken:String!, $ref: String! ) {
        sessionLogin(login: { idToken: $idToken, csrfToken:$csrfToken, accountRef:$ref}) {
            balances {
                opening_balance
            }
            account {
                id
                accountRef
                firstName,
                lastName,
                email
            }
            token
        }
    }
`;

const udqRef = loadQuery(
    environment,
    userDashboardQuery, 
    { 
        ref: window.history.state.state.accountRef,
        idToken: window.history.state.state.user.idToken,
        csrfToken: window.history.state.state.user.csrfToken
    }
);

const UserDashboard: FC = ()=>{
    const data = usePreloadedQuery(userDashboardQuery, udqRef);

    console.log(data);

    return (
        <Wrapper>
            User dashboard
        </Wrapper>
    )
}

export default UserDashboard;