import { GraphQLUnionType } from "graphql";
import BankUser from "./BankUser";

const BankUserSession: GraphQLUnionType = new GraphQLUnionType({
    name:"BankUserSession",
    description: "Bank user session",
    types: [ BankUser ],
    resolveType: (value: any)=>{//Adde error onject
        /**
         *  if( !value.errors ) {
         *       return BankUser
         *  } else {
         *       return null;
        *  }
        **/
        console.log(value)
        return BankUser
    }
})

export default BankUserSession;