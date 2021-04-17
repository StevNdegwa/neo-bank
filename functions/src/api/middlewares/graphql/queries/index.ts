import { GraphQLFieldConfigMap, Thunk } from "graphql";
import { bankAccountDB, bankAccountBalancesDB } from "../../../helpers/firebase";

import types from "../types";
import { nodeField, nodesField } from "../types/NodeInterface";

const queries: Thunk<GraphQLFieldConfigMap<unknown, any>> = {
    account: {
        type: types.Account,
        description: "Registered account",
        args: { account: { type: types.AccountInput } },
        resolve: async (_:unknown, args: any, context:any) => {
            console.log(context);
            let { id, firstName, lastName, email } = await bankAccountDB().get(args.account.accountRef);
                
            return {
                id,
                accountRef: id,
                firstName,
                lastName,
                email
            };
        }
    },
    sessionLogin: {
        type: types.BankUserSession,
        description: "Login to account",
        args: { login: { type: types.AccountLoginInput } },
        resolve: async (_: unknown, args: any, context:any) => {

            //let idToken = args.login.idToken.toString(),
            //    csrfToken = args.login.csrfToken.toString();
            
            /**
             * if(csrfToken !== context.request.cookies.csrfToken){
                throw new Error("UNAUTHORIZED REQUEST");
            }
            **/
            
            let balances = await bankAccountBalancesDB().get(args.login.accountRef);
            let account =  await bankAccountDB().get(args.login.accountRef);

            return {
                balances,
                account:{
                    id: account.id,
                    accountRef: account.id,
                    firstName: account.firstName,
                    lastName: account.lastName,
                    email: account.email
                },
                token:"empty-for-now"
            };
        }
    },
    node: nodeField,
    nodes: nodesField
}

export default queries;