import React from "react";
import Login from "./Login";

import { Meta, Story } from "@storybook/react";

export default {
    component: Login,
    title: "Login Component"
} as Meta;

export const Primary: Story = ()=><Login/>

