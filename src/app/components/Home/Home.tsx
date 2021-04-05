import React from "react";

import { Wrapper, Main, Login } from "./styles";
import { Link } from "react-router-dom";

const Home: React.FC = ()=>{
    return (
        <Wrapper>
            <Main>
                <button className="medium">About</button>
            </Main>
            <Login>
                <Link to="/retail-login" className="button-look outline rounded">Retail Login</Link>
                <Link to="/" className="button-look outline rounded">Corporate Login</Link>
            </Login>
        </Wrapper>
    )
}

export default Home;