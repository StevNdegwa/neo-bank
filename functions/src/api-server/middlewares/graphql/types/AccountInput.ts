import { GraphQLInputObjectType, GraphQLString } from "graphql";

const AccountInput = new GraphQLInputObjectType({
    name: "AccountInput",
    description: "Register a new account",
    fields: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString }
    }
})

export default AccountInput;