/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppSessionQueryVariables = {
    refreshToken: string;
    idToken: string;
    csrfToken: string;
    ref: string;
};
export type AppSessionQueryResponse = {
    readonly sessionLogin: {
        readonly balances?: {
            readonly opening_balance: number;
        } | null;
        readonly account?: {
            readonly id: string;
            readonly accountRef: string;
            readonly firstName: string | null;
            readonly lastName: string | null;
            readonly email: string | null;
        } | null;
        readonly token?: string | null;
        readonly error?: {
            readonly message: string;
            readonly code: string;
        };
    } | null;
};
export type AppSessionQuery = {
    readonly response: AppSessionQueryResponse;
    readonly variables: AppSessionQueryVariables;
};



/*
query AppSessionQuery(
  $refreshToken: String!
  $idToken: String!
  $csrfToken: String!
  $ref: String!
) {
  sessionLogin(login: {refreshToken: $refreshToken, idToken: $idToken, csrfToken: $csrfToken, accountRef: $ref}) {
    __typename
    ... on BankUser {
      balances {
        opening_balance
      }
      account {
        id
        accountRef
        firstName
        lastName
        email
      }
      token
    }
    ... on BankUserSessionError {
      error {
        message
        code
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "csrfToken"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "idToken"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "ref"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "refreshToken"
},
v4 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "accountRef",
        "variableName": "ref"
      },
      {
        "kind": "Variable",
        "name": "csrfToken",
        "variableName": "csrfToken"
      },
      {
        "kind": "Variable",
        "name": "idToken",
        "variableName": "idToken"
      },
      {
        "kind": "Variable",
        "name": "refreshToken",
        "variableName": "refreshToken"
      }
    ],
    "kind": "ObjectValue",
    "name": "login"
  }
],
v5 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BankBalances",
      "kind": "LinkedField",
      "name": "balances",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "opening_balance",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserAccount",
      "kind": "LinkedField",
      "name": "account",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
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
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "token",
      "storageKey": null
    }
  ],
  "type": "BankUser",
  "abstractKey": null
},
v6 = {
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
  "type": "BankUserSessionError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppSessionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "sessionLogin",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppSessionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "sessionLogin",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "30c5fb5c8eab0ed1c310c323311f117f",
    "id": null,
    "metadata": {},
    "name": "AppSessionQuery",
    "operationKind": "query",
    "text": "query AppSessionQuery(\n  $refreshToken: String!\n  $idToken: String!\n  $csrfToken: String!\n  $ref: String!\n) {\n  sessionLogin(login: {refreshToken: $refreshToken, idToken: $idToken, csrfToken: $csrfToken, accountRef: $ref}) {\n    __typename\n    ... on BankUser {\n      balances {\n        opening_balance\n      }\n      account {\n        id\n        accountRef\n        firstName\n        lastName\n        email\n      }\n      token\n    }\n    ... on BankUserSessionError {\n      error {\n        message\n        code\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1d3f95e5e72dd2002777999f8971e12e';
export default node;
