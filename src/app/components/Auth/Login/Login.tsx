import { FC, Suspense } from "react";
import { ReactSVG } from "react-svg";
import { graphql } from "babel-plugin-relay/macro";
import { GraphQLTaggedNode, useQueryLoader } from "react-relay";
import PulseLoader from "react-spinners/PulseLoader";

import lock from "../../../../assets/media/images/lock.svg";
import AuthLayout from "../../../layouts/AuthLayout";
import { Wrapper, Header, Info } from "./styles";
import ValidateAccount from "./ValidateAccount/ValidateAccount";
import Authn from "./Authn/Authn";
import { LoginQuery } from "./__generated__/LoginQuery.graphql";

export const loginQuery: GraphQLTaggedNode = graphql`
    query LoginQuery ($accountRef: String!) {
        account ( account: { accountRef: $accountRef} ){
            id
            firstName
            lastName
            email
            accountRef
        }
    }
`;

export type LoginProps = {};

const Login: FC<LoginProps> = ()=>{
    const [loginQueryRef, loadLoginData] = useQueryLoader<LoginQuery>(loginQuery);
    
    const onSubmitHandler = (data: any)=>{
        loadLoginData(data);
    }

    return (
        <AuthLayout>
            <Wrapper>
                <Header>
                    <div className="rb-logo">
                        { /* <img width="100%" alt="Retail Banking" height="150px" src={retail_banking} /> */ }
                        <ReactSVG width="40px" src={lock}/>
                    </div>
                    <div className="text">Internet banking login</div>
                </Header>
                {
                    !loginQueryRef ? 
                    <ValidateAccount validateAccount={onSubmitHandler}/> :
                    <Suspense fallback={
                        <Info style={{ height:"200px" }}><PulseLoader loading={true} /></Info>
                    }>
                        <Authn loginQuery={loginQuery} loginQueryRef={loginQueryRef} />
                    </Suspense>
                }
            </Wrapper>
        </AuthLayout>
    )
}

Login.displayName = "Login";

export default Login;