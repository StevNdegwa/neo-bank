import { GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import * as yup from "yup";
import types from "../types";

import { bankAccountDB, authenticateBankAccountOwner } from "../../../helpers/firebase";

const RegisterAccount = mutationWithClientMutationId({
    name: "registerAccount",
    inputFields: {
        account: { type: GraphQLNonNull(types.RegisterAccountInput) }
    },
    outputFields: {
        registerAccount: {
            type: types.RegisterAccount,
            resolve: (data) => {

                if(data.id){

                    return {
                        ...data,
                        accountRef: data.id
                    };
                }

                return data;
            }
        }
    },
    mutateAndGetPayload: async (payload) => {
        try {

            let newAccSchema  = yup.object().shape({
                firstName: yup.string().required("User first name is required").min(3, "A valid first name was expected"),
                lastName: yup.string().required("User last name is required").min(2, "A valid last name is required"),
                email: yup.string().email("A valid email is required"),
                password: yup.string().min(8, "A minimum of 8 characters is expected")
            })

            await newAccSchema.validate(payload.account)

        } catch (error) {
            return {
                error: {
                    message: error.errors.join(":"),
                    code:"INVALID_ACCOUNT_DATA"
                }
            }    
        }

        try {
            
            let accountData = await bankAccountDB().register(payload.account);

            try {

                let { firstName, lastName, email, password } = payload.account;

                await authenticateBankAccountOwner()
                    .create(accountData.id, {
                        email,
                        password,
                        displayName:`${firstName}, ${lastName}`
                    })
                
            } catch (error) {
                return {
                    error:{
                        message:`${error}`,
                        code: "USER_ACCOUNT_CREATION_ERROR"
                    }
                }
            }

            return accountData;

        } catch (error) {

            return {
                error: {
                    message:`${error.message}`,
                    code: "SERVER_ERROR"
                }
            }
        }
    }
});

export default RegisterAccount;