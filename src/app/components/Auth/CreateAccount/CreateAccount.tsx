import React from "react";

import AuthLayout from "../../../layouts/AuthLayout";
import { TextInput, Button } from "../../Inputs";
import { Form, Wrapper } from "./styles";

const CreateAccount: React.FC = ()=>{
    return (
        <AuthLayout>
            <Wrapper>
                <Form>
                    <div className="input">
                        <TextInput name="firstname" label="First name" variant="auth"/>
                    </div>
                    <div  className="input">
                        <TextInput name="lastName" label="Last name" variant="auth"/>
                    </div>
                    <div className="input">
                        <TextInput name="email" label="Email" variant="auth"/>
                    </div>
                    <div style={{width:"100%"}}><Button type="submit">Create Account</Button></div>
                </Form>
            </Wrapper>
        </AuthLayout>
    )
}

export default CreateAccount;