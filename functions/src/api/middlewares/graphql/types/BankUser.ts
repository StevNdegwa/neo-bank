import { GraphQLObjectType, GraphQLString } from "graphql";
import UserAccount from "./UserAccount";
import BankBalances from "./BankBalances";

const BankUser: GraphQLObjectType<any, any> = new GraphQLObjectType({
    name: "BankUser",
    description: "Bank user session data",
    fields: {
        account: { type: UserAccount },
        balances: { type: BankBalances },
        token: { type: GraphQLString }
    }
});

export default BankUser;