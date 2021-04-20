import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import ErrorResponse from "./ErrorResponse";

const BankUserSessionError = new GraphQLObjectType({
    name: "BankUserSessionError",
    description: "Bank user session error",
    fields: {
        error: { type: GraphQLNonNull(ErrorResponse) }
    }
})

export default BankUserSessionError;