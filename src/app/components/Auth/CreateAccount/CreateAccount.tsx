import React from "react";

import AuthLayout from "../../../layouts/AuthLayout";
import { TextInput } from "../../Inputs";
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
                    <div style={{width:"100%"}}><button type="submit">Create Account</button></div>
                </Form>
            </Wrapper>
        </AuthLayout>
    )
}

export default CreateAccount;