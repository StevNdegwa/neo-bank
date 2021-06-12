import React, { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import AuthLayout from "../../layouts/AuthLayout";
import { Form, Wrapper } from "./styles";
import useCreateAccount from "../../../../application/authentication/useCreateAccount";
import Main from "./Main";
import Footer from "./Footer";
import Feedback from "./Feedback";
import { useModal } from "../../Modal";
import { useError } from "../../../../application/helpers/hooks";

export type CreateAccountProps = {};

export enum Pages {
  DETAILS = "USER_DETAILS",
  PROFILE = "USER_PROFILE",
}

const CreateAccount: React.FC = () => {
  const [page, setPage] = useState<Pages>(Pages.DETAILS);
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, closeModal, openModal } = useModal();
  const { error: submitError, setError: setSubmitError, clearError } = useError(
    closeModal
  );
  const [userDetails, setUserDetails] = useState<any>({});

  const { createAccount } = useCreateAccount();

  const methods = useForm();

  const retry = useCallback(() => {
    clearError();
    setPage(Pages.DETAILS);
  }, [clearError, setPage]);

  const onSubmit = useCallback((data: any) => {
    setLoading(true);
    openModal();
    createAccount({
      variables: data,
      onCompleted: (userDetails: any, error: any) => {
        if (!!error) {
          setSubmitError(error);
        } else {
          setUserDetails(userDetails);
        }
        setLoading(false);
        return;
      },
      onError: (error:any)=>{
        setSubmitError(new Error(error.message))
      }
    });
    /* eslint-disable */
  }, []);

  return (
    <AuthLayout>
      <Wrapper>
        <Feedback
          submitting={loading}
          userDetails={userDetails}
          isOpen={isOpen}
          closeModal={closeModal}
          error={submitError}
          retry={retry}
        />
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
