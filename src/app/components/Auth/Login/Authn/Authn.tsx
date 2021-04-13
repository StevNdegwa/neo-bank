import { useForm } from "react-hook-form";
import { GraphQLTaggedNode, usePreloadedQuery } from "react-relay";
import { Link } from "react-router-dom";

import { PasswordInput, TextInput } from "../../../Inputs";
import { Form, Info, Spacer } from "../styles";

const Authn: React.FC<AuthnProps> = ({ loginQueryRef, loginQuery }) => {
  const { account } : any = usePreloadedQuery(loginQuery, loginQueryRef);

  const { register, handleSubmit } = useForm({ 
    defaultValues:{
      accountRef:"SN1001",
      password: ""
    }
  });

  const authenticateUSer = (data: { accountRef: string, password: string })=>{
    console.log(data);
  }
  
  return (
    <Form autoComplete="off" onSubmit={handleSubmit(authenticateUSer)}>

      <Info style={{ height:"50px", lineHeight:"50px" }}>
        Welcome back &nbsp; <span className="highlight"> {account?.lastName} </span>&nbsp;!
      </Info>

      <TextInput
        register={register("accountRef", { required: true })}
        disabled={true}
        name="accountRef"
        className="auth"
        label="Account Id"
        defaultValue={account?.accountRef}
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

export type AuthnProps = {
  loginQuery: GraphQLTaggedNode;
  loginQueryRef: any
};

export default Authn;
