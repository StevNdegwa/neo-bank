import { FC } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { loadQuery, usePreloadedQuery } from "react-relay";
import { Wrapper } from "./styles";
import environment from "../../../config/relay/Environment";


export const userDashboardQuery = graphql`
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
            ...on BankUserSessionError {
                error {
                    message
                    code
                }
            }
        }
    }
`;

let { accountRef, idToken, csrfToken, refreshToken } = window.history.state.state.user;

export const variables = { 
    ref: accountRef,
    idToken,
    csrfToken,
    refreshToken
};

const udqRef = loadQuery(
    environment,
    userDashboardQuery, 
    variables
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