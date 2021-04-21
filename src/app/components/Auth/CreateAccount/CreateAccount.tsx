import React from "react";
import { useForm } from "react-hook-form";

import AuthLayout from "../../../layouts/AuthLayout";
import { TextInput } from "../../Inputs";
import { Form, Wrapper } from "./styles";
import  commitCreateAccountMutation from "./commitCreateAccount";
import { useRelayEnvironment } from "react-relay";

export type CreateAccountProps = { };

const CreateAccount: React.FC = ()=>{
    const { register, handleSubmit } = useForm();
    const environment = useRelayEnvironment();

    const onSubmit = (data:any)=>{
        commitCreateAccountMutation(environment, data);
    }

    return (
        <AuthLayout>
            <Wrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <TextInput register={register("firstName")} name="firstname" label="First name" className="auth" placeholder="First name"/>
                    </div>
                    <div>
                        <TextInput  register={register("lastName")} name="lastName" label="Last name" className="auth" placeholder="Last name"/>
                    </div>
                    <div style={{width:"100%"}}>
                        <TextInput  register={register("email")} name="email" label="Email" className="auth" placeholder="Email address"/>
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