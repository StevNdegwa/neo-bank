import { GraphQLObjectType, GraphQLString } from "graphql";
import Account from "./Account";
import BankBalances from "./BankBalances";

const BankUser: GraphQLObjectType<any, any> = new GraphQLObjectType({
    name: "BankUser",
    description: "Bank user session data",
    fields: {
        account: { type: Account },
        balances: { type: BankBalances },
        token: { type: GraphQLString }
    }
});

export default BankUser;