import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TextInput } from "../../../Inputs";
import { Form } from "../styles";

const ValidateAccount: React.FC<ValidateAccountProps> = ({
  validateAccount,
}) => {
  const { register, handleSubmit } = useForm();

  return (
    <Form autoComplete="off" onSubmit={handleSubmit(validateAccount)}>
      <TextInput
        register = {register("accountRef", { required: true , setValueAs: (v:string)=>v.toUpperCase()})}
        name="accountRef"
        label="Account id"
        className="auth"
        placeholder="Your User ID e.g. JN58304"
      />
      <div>
        <Link to="/create-acount" className="small-text highlight">
          Register a new acount
        </Link>
      </div>
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <button type="submit" className="medium filled primary rounded">
          Next
        </button>
      </div>
    </Form>
  );
};

export type ValidateAccountProps = {
  validateAccount: (data: { userID: string }) => void;
};

export default ValidateAccount;
