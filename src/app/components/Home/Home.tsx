import React from "react";

import { Wrapper, Main, Login, Link } from "./styles";
import { Button } from "../Inputs";

const Home: React.FC = ()=>{
    return (
        <Wrapper>
            <Main>
                <Button>About</Button>
            </Main>
            <Login>
                <Link to="/retail-login" variant="button">Retail Login</Link>
                <Link to="/" variant="button">Corporate Login</Link>
            </Login>
        </Wrapper>
    )
}

export default Home;