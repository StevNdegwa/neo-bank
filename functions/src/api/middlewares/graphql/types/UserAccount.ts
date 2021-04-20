import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";
import { nodeInterface } from "./NodeInterface";

const UserAccount: GraphQLObjectType<any, any> = new GraphQLObjectType({
    name: "UserAccount",
    interfaces: [ nodeInterface ],
    description: "A registered user account",
    fields: {
        id: globalIdField("Account"),
        accountRef: { type: GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString }
    }
})

export default UserAccount;