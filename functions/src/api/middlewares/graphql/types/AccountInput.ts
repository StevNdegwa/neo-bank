import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const AccountInput = new GraphQLInputObjectType({
    name: "AccountInput",
    description: "Register a new account",
    fields: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) }
    }
})

export default AccountInput;