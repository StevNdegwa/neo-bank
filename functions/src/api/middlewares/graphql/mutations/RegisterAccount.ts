import { GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import types from "../types";

import { bankAccountDB } from "../../../helpers/firebase";

const RegisterAccount = mutationWithClientMutationId({
    name: "registerAccount",
    inputFields: {
        account: { type: GraphQLNonNull(types.RegisterAccountInput) }
    },
    outputFields:{
        registerAccount: {
            type: types.Account,
            resolve: ({ id, email, firstName, lastName })=>{
                
                return {
                    id,
                    accountRef: `${firstName[0]}${lastName[0]}`.concat(id),
                    firstName,
                    lastName,
                    email
                };
            }
        }
    },
    mutateAndGetPayload: async (payload)=>{
        try {
            let accountData = await bankAccountDB().register(payload.account);

            return accountData;

        } catch (error) {
            console.log(error);
        }
    }
})

export default RegisterAccount;