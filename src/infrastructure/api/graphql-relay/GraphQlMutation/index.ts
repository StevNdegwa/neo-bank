import { GraphQLTaggedNode, commitMutation } from "relay-runtime";
import IGraphql from "../../../interfaces/IGraphql";
import environment from "../Environment";


class GraphQlMutation implements IGraphql {
    query: GraphQLTaggedNode;
    variables: any;

    constructor(query: GraphQLTaggedNode, variables?: any) {
        this.query = query;
        this.variables = variables;
    }

    execute({ variables, onCompleted, onError }:any) {
        return commitMutation(
            environment,
            {
                mutation: this.query,
                variables: variables || this.variables,
                onCompleted,
                onError
            },
        )
    }
}

export default GraphQlMutation;