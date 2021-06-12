import CreateAccountMutaion from "../authentication/CreateAccount";

export default function useCreateAccount() {
    const createAccount = ({ variables, onCompleted, onError }: any) => {
        CreateAccountMutaion.execute({
            variables,
            onError,
            onCompleted
        })
    }

    return { createAccount }
}