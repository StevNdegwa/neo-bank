import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

const ErrorResponse = new GraphQLObjectType({
    name: "ErrorResponse",
    description:"Error response",
    fields:{
        message: { type: GraphQLNonNull(GraphQLString) },
        code: { type: GraphQLNonNull(GraphQLString) }
    }
});

export default ErrorResponse;