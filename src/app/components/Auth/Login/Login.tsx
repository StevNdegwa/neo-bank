import React from "react";
import AuthLayout from "../../../layouts/AuthLayout";

import { TextInput } from "../../Inputs";
import { Wrapper, Header, Form } from "./styles";

import { Link } from "react-router-dom";

import lock from "../../../../assets/media/images/lock.svg";

import { ReactSVG } from "react-svg";

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
                        <Link to="/" className="small-text">Forgot your password</Link>
                    </div>
                    <div>
                        <Link to="/create-acount" className="small-text">Register a new acount</Link>
                    </div>
                    <div style={{textAlign:"center", paddingTop:"10px"}}>
                        <button type="submit" className="medium filled primary">Next</button>
                    </div>
                </Form>
            </Wrapper>
        </AuthLayout>
    )
}

export default Login;