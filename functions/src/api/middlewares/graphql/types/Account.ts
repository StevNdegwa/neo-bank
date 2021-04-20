import { GraphQLUnionType } from "graphql";
import UserAccount from "./UserAccount";
import UserAccountNotFoundError from "./UserAccountNotFoundError";

const Account = new GraphQLUnionType({
    name: "UserAccount",
    description: "A registered user account",
    types: [UserAccount, UserAccountNotFoundError],
    resolveType: (value: any) => {
        if (value.accountRef) {
            return UserAccount;
        }
        
        return UserAccountNotFoundError;
    }
});

export default Account;