import React from "react";

import { addDecorator } from "@storybook/react";

import { MemoryRouter } from "react-router-dom";

import '../src/styles/base.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(story => <MemoryRouter initialEntries={['/']} > { story() } </MemoryRouter>);