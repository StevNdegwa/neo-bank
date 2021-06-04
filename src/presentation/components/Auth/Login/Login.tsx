import { FC, Suspense } from "react";
import { ReactSVG } from "react-svg";
import PulseLoader from "react-spinners/PulseLoader";

import useLogin from "../../../../application/authentication/useLogin";
import lock from "../../../../assets/media/images/lock.svg";
import AuthLayout from "../../layouts/AuthLayout";
import { Wrapper, Header, Info } from "./styles";
import ValidateAccount from "./ValidateAccount/ValidateAccount";
import Authn from "./Authn/Authn";
import ErrorBoundary from "../../../ErrorBoundary";
import LoginErrorFallback from "./LoginErrorFallback";

export type LoginProps = {};

const Login: FC<LoginProps> = ()=>{
    
    const { authn, onSubmitHandler, handleNoData, loginQueryRef } = useLogin();

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
                                <Authn loginQueryRef={loginQueryRef} setNoData={handleNoData}/>
                            </Suspense>
                        </ErrorBoundary>
                }
            </Wrapper>
        </AuthLayout>
    )
}

Login.displayName = "Login";

export default Login;