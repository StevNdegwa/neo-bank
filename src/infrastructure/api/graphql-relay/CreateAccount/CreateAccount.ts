import { graphql } from "babel-plugin-relay/macro";
import { GraphQLTaggedNode } from "relay-runtime";

import GraphQlMutation from "../GraphQlMutation";

const CreateAccount: GraphQLTaggedNode = graphql`
    mutation CreateAccountMutation($account: RegisterAccountInput!) {
        registerAccount(input: { account: $account }) {
            ...on registerAccountPayload {
                registerAccount {
                    ...on UserAccount {
                        id
                        accountRef
                        firstName
                        lastName
                        email
                    }
                    ... on RegisterAccountError {
                        error {
                            message
                            code
                        }
                    }
                }
            }
        }
    }
`;

export default new GraphQlMutation(CreateAccount);