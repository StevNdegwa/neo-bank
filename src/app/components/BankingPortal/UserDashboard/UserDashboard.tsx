import { FC } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { Wrapper } from "./styles";
import { loadQuery, usePreloadedQuery } from "react-relay";
import environment from "../../../config/relay/Environment";


const userDashboardQuery = graphql`
    query UserDashboardQuery ( $refreshToken:String!, $idToken:String!, $csrfToken:String!, $ref: String! ) {
        sessionLogin(login: { refreshToken:$refreshToken, idToken: $idToken, csrfToken:$csrfToken, accountRef:$ref}) {
            ...on BankUser {
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
    }
`;

let { accountRef, idToken, csrfToken, refreshToken } = window.history.state.state.user;

const udqRef = loadQuery(
    environment,
    userDashboardQuery, 
    { 
        ref: accountRef,
        idToken,
        csrfToken,
        refreshToken
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