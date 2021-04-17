import React from "react";
import TextInput, { TextInputProps } from "./TextInput";
import { Meta, Story } from "@storybook/react";

export default {
  component: TextInput,
  title: "Inputs/TextInput",
  argTypes: {
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
    type: {
      description: "Input element type",
      type: "enum",
      defaultValue: "text",
      control: {
        type: "select",
        options: ["text", "email"],
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
    },
    disabled: {
      description: "Is this element disabled?",
      type: "boolean",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    defaultValue: {
      description: "Default input value",
      type: "string",
      defaultValue: "",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<TextInputProps> = (props) => <TextInput {...props} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: "Primary text input",
    name: "name",
    label: "Primary Text Input",
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Primary.args,
    disabled:true
};

export const Auth = Template.bind({});
Auth.args = {
  ...Primary.args,
  placeholder: "Auth data input",
  label: "Auth data input",
};

export const Email = Template.bind({});
Email.args = {
  name: "email",
  type: "email",
  placeholder: "User email...",
  label: "Email",
};
