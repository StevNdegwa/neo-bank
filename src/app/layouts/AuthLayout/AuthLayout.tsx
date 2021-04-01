import React from "react";

import {Wrapper, Header, Main, Footer} from "./styles";

const AuthLayout: React.FC<{ children: JSX.Element }> = ({ children })=>{
    return (
        <Wrapper>
            <Header></Header>
            <Main>
                { children }
            </Main>
            <Footer></Footer>
        </Wrapper>
    )
}

export default AuthLayout;