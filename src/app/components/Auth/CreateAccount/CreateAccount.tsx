import React from "react";

import AuthLayout from "../../../layouts/AuthLayout";
import { TextInput } from "../../Inputs";
import { Form, Wrapper } from "./styles";

const CreateAccount: React.FC = ()=>{
    return (
        <AuthLayout>
            <Wrapper>
                <Form>
                    <div>
                        <TextInput name="firstname" label="First name" className="auth" placeholder="First name"/>
                    </div>
                    <div>
                        <TextInput name="lastName" label="Last name" className="auth" placeholder="Last name"/>
                    </div>
                    <div style={{width:"100%"}}>
                        <TextInput name="email" label="Email" className="auth" placeholder="Email address"/>
                    </div>
                    <div>
                        <button type="submit" className="filled primary rounded medium">Create Account</button>
                    </div>
                </Form>
            </Wrapper>
        </AuthLayout>
    )
}

export default CreateAccount;