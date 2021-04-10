import { GraphQLString } from "graphql";

import { bankAccountDB } from "../../../helpers/firebase";

import types from "../types";
import { nodeField, nodesField } from "../types/NodeInterface";

const queries = {
    account: {
        type: types.Account,
        description: "Registered account",
        args: { accountRef: { type: GraphQLString } },
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
    node: nodeField,
    nodes: nodesField
}

export default queries;