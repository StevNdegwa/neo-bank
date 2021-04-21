/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RegisterAccountInput = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};
export type commitCreateAccountMutationVariables = {
    account: RegisterAccountInput;
};
export type commitCreateAccountMutationResponse = {
    readonly registerAccount: {
        readonly registerAccount: {
            readonly id?: string;
            readonly accountRef?: string;
            readonly firstName?: string | null;
            readonly lastName?: string | null;
            readonly email?: string | null;
            readonly error?: {
                readonly message: string;
                readonly code: string;
            };
        } | null;
    } | null;
};
export type commitCreateAccountMutation = {
    readonly response: commitCreateAccountMutationResponse;
    readonly variables: commitCreateAccountMutationVariables;
};



/*
mutation commitCreateAccountMutation(
  $account: RegisterAccountInput!
) {
  registerAccount(input: {account: $account}) {
    registerAccount {
      __typename
      ... on UserAccount {
        id
        accountRef
        firstName
        lastName
        email
      }
      ... on RegisterAccountError {
        error {
          message
          code
        }
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "account"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "account",
        "variableName": "account"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "accountRef",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "UserAccount",
  "abstractKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ErrorResponse",
      "kind": "LinkedField",
      "name": "error",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "code",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RegisterAccountError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "commitCreateAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "registerAccountPayload",
        "kind": "LinkedField",
        "name": "registerAccount",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "registerAccount",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "commitCreateAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "registerAccountPayload",
        "kind": "LinkedField",
        "name": "registerAccount",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "registerAccount",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/)
                ],
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "42bbc2ac5ad286e6f1f563e8a9d66082",
    "id": null,
    "metadata": {},
    "name": "commitCreateAccountMutation",
    "operationKind": "mutation",
    "text": "mutation commitCreateAccountMutation(\n  $account: RegisterAccountInput!\n) {\n  registerAccount(input: {account: $account}) {\n    registerAccount {\n      __typename\n      ... on UserAccount {\n        id\n        accountRef\n        firstName\n        lastName\n        email\n      }\n      ... on RegisterAccountError {\n        error {\n          message\n          code\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '34038c743cedaeb8fc1a7973a291601a';
export default node;
