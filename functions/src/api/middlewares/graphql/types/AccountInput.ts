import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const AccountInput = new GraphQLInputObjectType({
    name:"AccountInput",
    description: "Verify account input",
    fields: {
        accountRef: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString }
    }
});

export default AccountInput;