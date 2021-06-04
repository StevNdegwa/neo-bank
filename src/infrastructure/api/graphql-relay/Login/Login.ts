import { graphql } from "babel-plugin-relay/macro";
import IGraphql from "../../../interfaces/IGraphql";

const Login: IGraphql = {
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