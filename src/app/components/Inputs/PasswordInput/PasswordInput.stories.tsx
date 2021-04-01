import React from "react";
import PasswordInput, { PasswordInputProps } from "./PasswordInput";
import { Meta, Story } from "@storybook/react";

export default {
    component: PasswordInput,
    title:"PasswordInput Component"
} as Meta;

const Template: Story<PasswordInputProps> = (props)=>(<PasswordInput { ...props }/>)

export const Default = Template.bind({});

export const Auth = Template.bind({})

Auth.args = {
    name:"passowrd",
    label:"Password",
    placeholder:"User Password"
}