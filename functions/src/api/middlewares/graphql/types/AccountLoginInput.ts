import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const AccountLoginInput = new GraphQLInputObjectType({
    name: "AccountLoginInput",
    description: "Data required to successfully login to application",
    fields: {
        accountRef: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLString }
    }
})

export default AccountLoginInput;