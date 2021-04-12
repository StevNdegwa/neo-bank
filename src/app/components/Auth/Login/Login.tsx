import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import lock from "../../../../assets/media/images/lock.svg";
import AuthLayout from "../../../layouts/AuthLayout";
import { TextInput } from "../../Inputs";
import { Wrapper, Header, Form } from "./styles";

const Login: React.FC = ()=>{
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
                <Form autoComplete="off">
                    <TextInput name="userID" label="Account id" className="auth" placeholder="Your User ID e.g. JN58304" />
                    <div>
                        <Link to="/create-acount" className="small-text highlight">Register a new acount</Link>
                    </div>
                    <div style={{textAlign:"center", paddingTop:"10px"}}>
                        <button type="submit" className="medium filled primary rounded">Next</button>
                    </div>
                </Form>
            </Wrapper>
        </AuthLayout>
    )
}

export default Login;