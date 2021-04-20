import { GraphQLUnionType } from "graphql";
import BankUser from "./BankUser";
import BankUserSessionError from "./BankUserSessionError";

const BankUserSession: GraphQLUnionType = new GraphQLUnionType({
    name:"BankUserSession",
    description: "Bank user session",
    types: [ BankUser, BankUserSessionError ],
    resolveType: (value: any)=>{//Adde error onject
        if(value.token){
            return BankUser
        }
        return BankUserSessionError;
    }
})

export default BankUserSession;