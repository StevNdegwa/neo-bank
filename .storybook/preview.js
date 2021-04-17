import React, { Suspense } from "react";

import { MemoryRouter } from "react-router-dom";
import { RelayEnvironmentProvider } from "react-relay";
import { IconContext } from "react-icons";

import FirebaseContext from "../src/app/FirebaseContext";
import Firebase from "../src/utils/firebase";
import environment from "../src/app/config/relay/Environment";
import '../src/styles/all.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <RelayEnvironmentProvider environment={environment}>
      <IconContext.Provider value={{ className: "neo-bank-react-icons" }}>
        <FirebaseContext.Provider value={new Firebase()}>
          <MemoryRouter initialEntries={['/']} >
            <Suspense fallback={<div>loading...</div>}>
            <Story/>
            </Suspense>
          </MemoryRouter>
        </FirebaseContext.Provider>
      </IconContext.Provider>
    </RelayEnvironmentProvider>
  )  
]