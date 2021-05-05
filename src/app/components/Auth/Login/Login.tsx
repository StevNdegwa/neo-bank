import { FC, Suspense, useState } from "react";
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
import ErrorBoundary from "../../../ErrorBoundary";
import LoginErrorFallback from "./LoginErrorFallback";

export const loginQuery: GraphQLTaggedNode = graphql`
    query LoginQuery ($accountRef: String!) {
        account ( account: { accountRef: $accountRef} ){
            ...on UserAccount{
                id
                firstName
                lastName
                email
                accountRef
            }
            ...on UserAccountNotFoundError{
                error {
                    message
                    code
                }
            }
        }
        
    }
`;

export type LoginProps = {};

const Login: FC<LoginProps> = ()=>{
    
    let [loginQueryRef, loadLoginData] = useQueryLoader<LoginQuery>(loginQuery);
    let [authn, setAuthn] = useState(false);
    
    const onSubmitHandler = (data: any)=>{
        loadLoginData(data, { fetchPolicy:"network-only" });
        setAuthn(true);
    }

    const handleNoData = ()=>{
        setAuthn(false)
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
                    !authn ? 
                    <ValidateAccount validateAccount={onSubmitHandler}/> :
                    loginQueryRef &&
                        <ErrorBoundary onRetry={handleNoData} fallback={({ error, retry })=>(<LoginErrorFallback error={error} tryAgain={retry} />)}>
                            <Suspense fallback={
                                <Info style={{ height:"200px" }}><PulseLoader loading={true} /></Info>
                            }>
                                <Authn loginQuery={loginQuery} loginQueryRef={loginQueryRef} setNoData={handleNoData}/>
                            </Suspense>
                        </ErrorBoundary>
                }
            </Wrapper>
        </AuthLayout>
    )
}

Login.displayName = "Login";

export default Login;