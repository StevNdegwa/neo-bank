import React from "react";

import CreateAccount, { CreateAccountProps } from "./CreateAccount";

import { Meta, Story } from "@storybook/react";

export default {
    component: CreateAccount,
    title:"Auth/CreateAccount",
} as Meta;

const Template: Story<CreateAccountProps> = (props:CreateAccountProps)=>(<CreateAccount { ...props } />);

export const Default = Template.bind({});
