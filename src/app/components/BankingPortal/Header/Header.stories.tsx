import { Meta, Story } from "@storybook/react";

import Header, { HeaderProps } from "./Header";

export default {
    component: Header,
    title:"Pages/Portal/BankingPortal/Header",
} as Meta;

export const Default: Story<HeaderProps> = (props: HeaderProps)=>(<Header { ...props } />)