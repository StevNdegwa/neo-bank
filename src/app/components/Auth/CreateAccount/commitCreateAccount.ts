import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "relay-runtime";
import { Environment } from "react-relay";

import type { commitCreateAccountMutation } from "./__generated__/commitCreateAccountMutation.graphql";

const commitCreateAccount = (environment: Environment, account: commitCreateAccountMutation, callBack: (userDetails:any, error:Error | null)=>void) => {
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
        onCompleted: (response: any)=>{
            let value = response?.registerAccount?.registerAccount;
            if(value.error){
                return callBack(null, new Error(value.error.message));
            }else{
                return callBack(value, null);
            }
        }
    }
  );
};

export default commitCreateAccount;