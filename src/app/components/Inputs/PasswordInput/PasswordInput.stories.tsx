import PasswordInput, { PasswordInputProps } from "./PasswordInput";
import { Meta, Story } from "@storybook/react";

export default {
    component: PasswordInput,
    title:"Inputs/PasswordInput",
    name: {
        description: "Input element name",
        type: "string",
        defaultValue: "name",
        control: {
          type: "text",
        },
      },
      register: {
        description: "react-hook-form register",
      },
      label: {
        description: "Input element label",
        type: "text",
        defaultValue: "",
        control: {
          type: "text",
        },
      },
      placeholder: {
        description: "Input element placeholder",
        type: "string",
        defaultValue: "",
        control: {
          type: "text",
        },
      },
      className: {
        description: "Input element class name",
        type: "string",
        defaultValue: "",
        control: {
          type: "text",
        },
      }
} as Meta;

const Template: Story<PasswordInputProps> = (props)=>(<PasswordInput { ...props }/>)

export const Default = Template.bind({});
Default.args = {
    name:"passowrd",
    label:"Password",
    placeholder:"User Password"
}