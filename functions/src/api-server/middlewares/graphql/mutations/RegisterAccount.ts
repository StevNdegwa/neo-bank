import { GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import types from "../types";

const RegisterAccount = mutationWithClientMutationId({
    name: "registerAccount",
    inputFields: {
        account: { type: GraphQLNonNull(types.AccountInput) }
    },
    outputFields:{
        registerAccount: {
            type: types.Account,
            resolve: (payload)=>{
                console.log(payload);
                return {}
            }
        }
    },
    mutateAndGetPayload: ({ firstName, lastName, email })=>{
        //Register a new account
        return {}
    }
})

export default RegisterAccount;