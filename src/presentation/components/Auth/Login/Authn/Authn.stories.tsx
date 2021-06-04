import { Meta, Story, StoryContext } from "@storybook/react";
import { useQueryLoader } from "react-relay";
import Authn, { AuthnProps } from "./Authn";

/**
import { loginQuery } from "../Login";
import { LoginQuery } from "../__generated__/LoginQuery.graphql";

export default {
  component: Authn,
  title: "Auth/Authn Component",
  argTypes: {
    loginQueryRef: {
      description: "Login query grqphqlReference",
    },
    loginQuery: {
      description: "Graphql Login query",
    },
  },
  decorators: [
    (story: Story, context: StoryContext) => {
      const [loginQueryRef, loadLoginData] = useQueryLoader<LoginQuery>(
        loginQuery
      );

      loadLoginData({ accountRef: "" });

      return story(
        { args: { loginQuery, loginQueryRef, ...context.args } },
        context
      );
    },
  ],
} as Meta;
**/
const Template: Story<AuthnProps> = (props: AuthnProps) => <Authn {...props} />;

export const Default = Template.bind({});
