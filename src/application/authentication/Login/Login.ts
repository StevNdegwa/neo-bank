import { graphql } from "babel-plugin-relay/macro";

const Login = {
    query: graphql`
        query LoginQuery ($accountRef: String!) {
            account ( account: { accountRef: $accountRef} ){
                ...on UserAccount{
                    id
                    firstName
                    lastName
                    email
                    accountRef
                }
                ...on UserAccountNotFoundError{
                    error {
                        message
                        code
                    }
                }
            }
        }
    `,
    variables: {}
};

export default Login;