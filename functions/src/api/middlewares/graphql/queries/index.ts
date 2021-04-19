import { GraphQLError, GraphQLFieldConfigMap, Thunk } from "graphql";
import * as jwt from "jsonwebtoken";
import { bankAccountDB, bankAccountBalancesDB } from "../../../helpers/firebase";

import types from "../types";
import { nodeField, nodesField } from "../types/NodeInterface";

import { security } from "../../../config";

const queries: Thunk<GraphQLFieldConfigMap<unknown, any>> = {
    account: {
        type: types.Account,
        description: "Registered account",
        args: { account: { type: types.AccountInput } },
        resolve: async (_: unknown, args: any, context: any) => {
            let account = await bankAccountDB().get(args.account.accountRef);

            if(!account){
                throw new GraphQLError("Account not found");
            }

            let { id, firstName, lastName, email } = account;

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
        description: "Logged in session data",
        args: { login: { type: types.AccountLoginInput } },
        resolve: async (_: unknown, args: any, context: any) => {

            var { refreshToken, accountRef } = args.login;
            
            let balances = await bankAccountBalancesDB().get(accountRef);
            let { id, lastName, firstName, email } = await bankAccountDB().get(accountRef);

            //Sign user token
            var token = jwt.sign(
                {
                    client_id: accountRef,
                    refreshToken,
                    email
                },
                security.secret,
                {
                    expiresIn: 3600
                }
            )

            return {
                balances,
                account: {
                    id,
                    accountRef:id,
                    firstName,
                    lastName,
                    email
                },
                token
            };
        }
    },
    node: nodeField,
    nodes: nodesField
}

export default queries;