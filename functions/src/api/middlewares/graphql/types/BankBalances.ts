import { GraphQLFloat, GraphQLNonNull, GraphQLObjectType } from "graphql";

const BankBalances = new GraphQLObjectType({
    name: "BankBalances",
    description: "Bank account balances",
    fields: {
        opening_balance: { type: GraphQLNonNull(GraphQLFloat) },
        current_balance: { type: GraphQLFloat }
    }
});

export default BankBalances;