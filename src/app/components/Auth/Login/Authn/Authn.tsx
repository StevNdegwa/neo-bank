import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { GraphQLTaggedNode, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { Link, useHistory } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

import type { LoginQuery } from "../__generated__/LoginQuery.graphql";
import FirebaseContext from "../../../../FirebaseContext";
import { PasswordInput, TextInput } from "../../../Inputs";
import { Form, Info, Spacer } from "../styles";

export type AuthnProps = {
  loginQuery: GraphQLTaggedNode;
  loginQueryRef: PreloadedQuery<LoginQuery>
};

const Authn: React.FC<AuthnProps> = ({ loginQueryRef, loginQuery }) => {
  const { account } : any = usePreloadedQuery(loginQuery, loginQueryRef);
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
      }
      
      history.push("/user-home", { user });
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }

  if(!account){
    throw new Error("No account data");
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
