import { GraphQLUnionType } from "graphql";
import RegisterAccountError from "./RegisterAccountError";
import UserAccount from "./UserAccount";

const RegisterAccount = new GraphQLUnionType({
    name:"RegisterAccount",
    types: [ UserAccount, RegisterAccountError ],
    resolveType: (value:any)=>{
        
        if(!!value.accountRef){
            return UserAccount;
        }
        return RegisterAccountError;
    }
});

export default RegisterAccount;