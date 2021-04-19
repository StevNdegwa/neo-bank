import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const AccountLoginInput = new GraphQLInputObjectType({
    name: "AccountLoginInput",
    description: "Data required to successfully login to application",
    fields: {
        idToken: { type: GraphQLNonNull(GraphQLString) },
        csrfToken: { type: GraphQLNonNull(GraphQLString) },
        accountRef: { type: GraphQLNonNull(GraphQLString) },
        refreshToken: { type: GraphQLNonNull(GraphQLString) }
    }
});

export default AccountLoginInput;