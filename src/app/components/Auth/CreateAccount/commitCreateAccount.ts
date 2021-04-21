import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "relay-runtime";
import { Environment } from "react-relay";

import type { commitCreateAccountMutation } from "./__generated__/commitCreateAccountMutation.graphql";

const commitCreateAccount = (environment: Environment, account: commitCreateAccountMutation) => {
  return commitMutation(environment, {
        mutation: graphql`
                mutation commitCreateAccountMutation($account: RegisterAccountInput!) {
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
            `,
        variables:{ account },
        onCompleted: (response)=>{
            console.log(response);
        }
    }
  );
};

export default commitCreateAccount;