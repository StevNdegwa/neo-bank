import { graphql } from "babel-plugin-relay/macro";

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
        ...on BankUserSessionError {
            error {
                message
                code
            }
        }
    }
}
`

export default userDashboardQuery;