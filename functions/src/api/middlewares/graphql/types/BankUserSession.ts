import { GraphQLObjectType, GraphQLString } from "graphql";
import Account from "./Account";
import BankBalances from "./BankBalances";

const BankUserSession: GraphQLObjectType<any, any> = new GraphQLObjectType({
    name: "BankUserSession",
    description: "Bank user session data",
    fields: {
        account: { type: Account },
        balances: { type: BankBalances },
        token: { type: GraphQLString }
    }
});

export default BankUserSession;