import React, { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRelayEnvironment } from "react-relay";

import AuthLayout from "../../../layouts/AuthLayout";
import { Form, Wrapper } from "./styles";
import commitCreateAccountMutation from "./commitCreateAccount";
import Main from "./Main";
import Footer from "./Footer";
import Feedback from "./Feedback";
import { useModal } from "../../Modal";
import { useError } from "../../../../utils/hooks";

export type CreateAccountProps = {};

export enum Pages {
  DETAILS = "USER_DETAILS",
  PROFILE = "USER_PROFILE",
}

const CreateAccount: React.FC = () => {
  const [page, setPage] = useState<Pages>(Pages.DETAILS);
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, closeModal, openModal } = useModal();
  const { error: submitError, setError: setSubmitError, clearError } = useError(closeModal);
  const [userDetails, setUserDetails] = useState<any>({});

  const methods = useForm();

  const environment = useRelayEnvironment();

  const onSubmit = useCallback((data: any) => {
    setLoading(true);
    openModal();
    commitCreateAccountMutation(
        environment, 
        data, 
        (userDetails, error) => {
            if(!!error){
                setSubmitError(error);
            }else{
                setUserDetails(userDetails);
            }
            setLoading(false);
            return;
        }
    );
    /* eslint-disable */
  }, []);

  return (
    <AuthLayout>
      <Wrapper>
        <Feedback submitting={loading} userDetails={userDetails} isOpen={isOpen} closeModal={closeModal} error={submitError} retry={clearError}/>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <Main page={page} />
            <Footer page={page} setPage={setPage} />
          </Form>
        </FormProvider>
      </Wrapper>
    </AuthLayout>
  );
};

export default CreateAccount;
