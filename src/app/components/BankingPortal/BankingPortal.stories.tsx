import { Meta, Story } from "@storybook/react";
import BankingPortal, { BankingPortalProps } from "./BankingPortal";

export default {
    component: BankingPortal,
    title: "Pages/Portal/BankingPortal"
} as Meta;

const Template:Story<BankingPortalProps> = (props)=>(<BankingPortal { ...props } />);

export const Default = Template.bind({});