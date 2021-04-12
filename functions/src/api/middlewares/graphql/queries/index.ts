import { bankAccountDB } from "../../../helpers/firebase";

import types from "../types";
import { nodeField, nodesField } from "../types/NodeInterface";

const queries = {
    account: {
        type: types.Account,
        description: "Registered account",
        args: { accountRef: { type: types.AccountLoginInput } },
        resolve: async (_:unknown, args: any) => {
            let { id, firstName, lastName, email } = await bankAccountDB().get(args.accountRef.slice(2));
                
            return {
                id,
                accountRef: `${firstName[0]}${lastName[0]}`.concat(id),
                firstName,
                lastName,
                email
            };
        }
    },
    login: {
        type: types.Account,
        description: "Login to account",
        args: { account: types.AccountLoginInput },
        resolve: async (_: unknown, args: any) => {
            return {
                name:"You"
            }
        }
    },
    node: nodeField,
    nodes: nodesField
}

export default queries;