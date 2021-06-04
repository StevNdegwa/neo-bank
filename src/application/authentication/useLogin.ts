import { useState } from "react";
import { useQueryLoader } from "react-relay";
import Login from "../../infrastructure/api/graphql-relay/Login";

export default function useLogin(){
    let [loginQueryRef, loadLoginData] = useQueryLoader(Login.query);
    let [authn, setAuthn] = useState(false);
    
    const onSubmitHandler = (data: any)=>{
        loadLoginData(data, { fetchPolicy:"network-only" });
        setAuthn(true);
    }

    const handleNoData = ()=>{
        setAuthn(false)
    }

    return { authn, onSubmitHandler, handleNoData, loginQueryRef  };
}