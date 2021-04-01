import React from "react";
import TextInput, { TextInputProps } from "./TextInput";
import { Meta, Story } from "@storybook/react";

export default {
     component:TextInput,
     title:"TextInput Component"
} as Meta;

const Template: Story<TextInputProps> = (props)=><TextInput { ...props }/>

export const Primary = Template.bind({});

Primary.args = {
    name:"name",
    placeholder:"Primary text input",
    label:"Primary Text Input"
}

export const Auth = Template.bind({});

Auth.args = {
    name:"name",
    variant:"auth",
    placeholder:"Auth data input",
    label:"Auth data input"
}

export const Email = Template.bind({})

Email.args = {
    name:"email",
    variant:"auth",
    type:"email",
    placeholder:"User email...",
    label:"Email"
}