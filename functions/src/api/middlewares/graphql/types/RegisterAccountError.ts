import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import ErrorResponse from "./ErrorResponse";

const RegisterAccountError = new GraphQLObjectType({
    name:"RegisterAccountError",
    description:"Error registering account",
    fields:{
        error: { type: GraphQLNonNull(ErrorResponse) }
    }
});

export default RegisterAccountError;