import { GraphQLString } from "graphql";
import types from "../types";
import { nodeField, nodesField } from "../types/NodeInterface";

const queries = {
    account: {
        type: types.Account,
        description: "Registered account",
        args: { id: { type: GraphQLString } },
        resolve: (_:unknown, args:any, request: any, response: any)=>{
            console.log(response);
            return { name: "Registered account" };
        }
    },
    node: nodeField,
    nodes: nodesField
}

export default queries;