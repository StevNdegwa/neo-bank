import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import ErrorResponse from "./ErrorResponse";

const UserAccountNotFoundError = new GraphQLObjectType({
    name: "UserAccountNotFoundError",
    description: "User account not found error",
    fields: {
        error: { type: GraphQLNonNull(ErrorResponse) }
    }
});

export default UserAccountNotFoundError;