import { GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";
import { nodeInterface } from "./NodeInterface";

const Account: GraphQLObjectType<any, any> = new GraphQLObjectType({
    name: "Account",
    interfaces: [ nodeInterface ],
    description: "A registered account",
    fields: {
        id: globalIdField("Account"),
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString }
    }
})

export default Account;