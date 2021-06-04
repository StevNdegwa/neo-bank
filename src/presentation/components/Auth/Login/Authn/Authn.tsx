import { FC, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

import AppAuth from "../../../../../application/authentication/AppAuth";
import FirebaseContext from "../../../../../application/context/FirebaseContext";
import { PasswordInput, TextInput } from "../../../Inputs";
import { Form, Info, Spacer } from "../styles";

import useAuthN from "../../../../../application/authentication/useAuthN";

export type AuthnProps = {
  loginQueryRef: any;
  setNoData: ()=>void
};

const Authn: FC<AuthnProps> = ({ loginQueryRef, setNoData }) => {
  const { account } = useAuthN(loginQueryRef);

  const firebase = useContext(FirebaseContext);
  let history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const { register, handleSubmit } = useForm({ });

  const authenticateUSer = async (data: { accountRef: string, password: string, email: string })=>{
    setLoading(true);
    
    try {
      let result = await firebase?.signInUser(data.email, data.password); 
      
      let user = {
        email: result?.email,
        displayName: result?.displayName,
        csrfToken: result?.refreshToken,
        idToken: result?.uid,
        refreshToken: result?.refreshToken,
        accountRef: data.accountRef
      };

      return Promise.all([
        AppAuth.login(user),
        history.push("/banking", { user })
      ])
      
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }

  if(account.error){
    throw account.error.message;
  }
  
  return (
    <Form autoComplete="off" onSubmit={handleSubmit(authenticateUSer)}>

      { loading && 
        <Info className="transparent" style={{ position:"absolute" }}>
          <PulseLoader/>
        </Info>
      }

      <Info style={{ height:"50px", lineHeight:"50px" }}>
        Welcome back &nbsp; <span className="highlight"> {account?.lastName} </span>&nbsp;!
      </Info>

      <Spacer height="10px"/>

      { error &&
        <Info style={{ lineHeight:"30px", fontSize:"0.8rem" }}>
          { `${error}` }
        </Info>
      }
      
      <TextInput
        register={register("accountRef", { required: true })}
        disabled={false}
        name="accountRef"
        className="auth"
        label="Account Id"
        defaultValue={account?.accountRef}
      />

      <Spacer height="10px"/>

      <TextInput
        register={register("email", { required: true })}
        name="email"
        type="email"
        className="auth"
        label="User email"
        defaultValue={account?.email}
      />

      <Spacer height="10px"/>
      
      <PasswordInput
        register={register("password", { required: true })}
        name="password"
        label="Account Password"
        placeholder="Your password"
      />
      
      <div>
        <Link to="/" className="small-text highlight">
          Forgot your password?
        </Link>
      </div>
      
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <button type="submit" className="medium filled primary rounded">
          LogIn
        </button>
      </div>
    
    </Form>
  );
};

Authn.displayName = "Authn";

export default Authn;
