import React from "react";
import Button, { ButtonProps } from "./Button";
import { Meta, Story } from "@storybook/react";

export default {
    component: Button,
    title: "Button Component"
} as Meta;

const Template: Story<ButtonProps> = (props)=><Button { ...props }/>

export const Primary = Template.bind({});

Primary.args = {
    children: "Primary Button"
}