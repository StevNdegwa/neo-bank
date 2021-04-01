import React from "react";

import CreateAccount from "./CreateAccount";

import { Meta, Story } from "@storybook/react";

export default {
    component: CreateAccount,
    title:"CreateAccount"
} as Meta;

export const Primary: Story = ()=>(<CreateAccount/>)