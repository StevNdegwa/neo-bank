import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { PasswordInput, TextInput } from "../../Inputs";
import { Pages } from "./CreateAccount";

export type MainProps = {
    page: Pages;
}

const Main:FC<MainProps> = ({ page })=>{

    const { register } = useFormContext();

    const showMain = ()=>{
        switch (page) {
            case Pages.DETAILS:
                return (
                    <>
                        <div>
                            <TextInput register={register("firstName")} name="firstname" label="First name" className="auth" placeholder="First name"/>
                        </div>
                        <div>
                            <TextInput  register={register("lastName")} name="lastName" label="Last name" className="auth" placeholder="Last name"/>
                        </div>
                        <div style={{width:"100%"}}>
                            <TextInput  register={register("email")} name="email" label="Email" className="auth" placeholder="Email address"/>
                        </div>
                    </>
                );
            case Pages.PROFILE:
                return (
                    <>
                        <div style={{width:"100%"}}>
                            <TextInput autoFocus register={register("userName")}  name="userName" label="User name" className="auth" placeholder="User name"/>
                        </div>
                        <div style={{width:"100%"}}>
                            <PasswordInput register={register("password")}  name="password" label="Password" placeholder="Account password"/>
                        </div>
                    </>
                );
            default:
                return null;
        }
    }

    return showMain();
}

export default Main;