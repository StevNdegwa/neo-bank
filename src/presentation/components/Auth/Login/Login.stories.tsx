import React from "react";
import Login from "./Login";

import { Meta, Story } from "@storybook/react";

export default {
    component: Login,
    title: "Auth/Login"
} as Meta;

export const Primary: Story = (props)=><Login { ...props }/>
