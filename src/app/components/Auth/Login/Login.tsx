import React from "react";
import AuthLayout from "../../../layouts/AuthLayout";

import { Button, TextInput } from "../../Inputs";
import { Wrapper, Header, Form } from "./styles";

import { Link } from "react-router-dom";

import retail_banking from "../../../../assets/media/images/retail-banking.png";

const Login: React.FC = ()=>{
    return (
        <AuthLayout>
            <Wrapper>
                <Header>
                    <div className="rb-logo">
                        <img width="100%" alt="Retail Banking" height="150px" src={retail_banking} />
                    </div>
                    <div className="text">Internet Banking Login</div>
                </Header>
                <Form>
                    <TextInput name="userID" label="User ID" variant="auth" placeholder="Your User ID e.g. JN58304" />
                    <div><Link to="/">Forgot your password?</Link></div>
                    <div><Link to="/create-acount">Register a new acount.</Link></div>
                    <div style={{textAlign:"center", paddingTop:"10px"}}><Button type="submit">Login</Button></div>
                </Form>
            </Wrapper>
        </AuthLayout>
    )
}

export default Login;