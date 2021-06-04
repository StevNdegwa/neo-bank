import React from "react";

import { Wrapper, Main, Login } from "./styles";
import { Link } from "react-router-dom";

const Home: React.FC = ()=>{
    return (
        <Wrapper>
            <Main>
                <button className="medium filled primary">About</button>
            </Main>
            <Login>
                <Link to="/retail-login" className="button-look outline primary">Retail Login</Link>
                <Link to="/" className="button-look outline primary">Corporate Login</Link>
            </Login>
        </Wrapper>
    )
}

export default Home;