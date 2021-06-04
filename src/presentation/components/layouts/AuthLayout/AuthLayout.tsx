import { FC } from "react";
import { useHistory } from "react-router-dom";
import { MdHome } from "react-icons/md";

import {Wrapper, Action, Header, Main, Footer} from "./styles";

const AuthLayout: FC<{ children: JSX.Element }> = ({ children })=>{
    let history = useHistory();

    return (
        <Wrapper>
            <Header>
                <Action className="transparent" onClick={()=>history.push("/")} >
                    <MdHome/>
                </Action>
            </Header>
            <Main>
                { children }
            </Main>
            <Footer></Footer>
        </Wrapper>
    )
}

export default AuthLayout;