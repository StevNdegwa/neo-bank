import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const RegisterAccountInput = new GraphQLInputObjectType({
    name: "RegisterAccountInput",
    description: "Data required to register a new account",
    fields: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
    }
})

export default RegisterAccountInput;