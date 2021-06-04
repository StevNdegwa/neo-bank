import { GraphQLTaggedNode } from "relay-runtime";

export default interface IGraphql {
    query: GraphQLTaggedNode;
    variables: any;
}