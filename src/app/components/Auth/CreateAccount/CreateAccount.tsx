import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRelayEnvironment } from "react-relay";

import AuthLayout from "../../../layouts/AuthLayout";
import { Form, Wrapper } from "./styles";
import  commitCreateAccountMutation from "./commitCreateAccount";
import Main from "./Main";
import Footer from "./Footer";


export type CreateAccountProps = { };

export enum Pages {
    DETAILS = "USER_DETAILS",
    PROFILE = "USER_PROFILE"
}

const CreateAccount: React.FC = ()=>{
    const [page, setPage] = useState<Pages>(Pages.DETAILS);
    const methods = useForm();
    const environment = useRelayEnvironment();

    const onSubmit = (data:any)=>{
        commitCreateAccountMutation(environment, data);
    }

    return (
        <AuthLayout>
            <Wrapper>
                <FormProvider { ...methods}>
                    <Form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Main page={page}/>
                        <Footer page={page} setPage={setPage}/>
                    </Form>
                </FormProvider>
            </Wrapper>
        </AuthLayout>
    )
}

export default CreateAccount;