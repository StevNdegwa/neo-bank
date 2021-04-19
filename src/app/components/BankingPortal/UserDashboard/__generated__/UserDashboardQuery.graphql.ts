/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserDashboardQueryVariables = {
    refreshToken: string;
    idToken: string;
    csrfToken: string;
    ref: string;
};
export type UserDashboardQueryResponse = {
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
    } | null;
};
export type UserDashboardQuery = {
    readonly response: UserDashboardQueryResponse;
    readonly variables: UserDashboardQueryVariables;
};



/*
query UserDashboardQuery(
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
      "concreteType": "Account",
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
    "name": "UserDashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "sessionLogin",
        "plural": false,
        "selections": [
          (v5/*: any*/)
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
    "name": "UserDashboardQuery",
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
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "763e772efb6eadfd320dba90769bf85c",
    "id": null,
    "metadata": {},
    "name": "UserDashboardQuery",
    "operationKind": "query",
    "text": "query UserDashboardQuery(\n  $refreshToken: String!\n  $idToken: String!\n  $csrfToken: String!\n  $ref: String!\n) {\n  sessionLogin(login: {refreshToken: $refreshToken, idToken: $idToken, csrfToken: $csrfToken, accountRef: $ref}) {\n    __typename\n    ... on BankUser {\n      balances {\n        opening_balance\n      }\n      account {\n        id\n        accountRef\n        firstName\n        lastName\n        email\n      }\n      token\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f959b0406b954603eab0cc481545f35f';
export default node;
