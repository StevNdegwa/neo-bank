/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserDashboardQueryVariables = {
    idToken: string;
    csrfToken: string;
    ref: string;
};
export type UserDashboardQueryResponse = {
    readonly sessionLogin: {
        readonly balances: {
            readonly opening_balance: number;
        } | null;
        readonly account: {
            readonly id: string;
            readonly accountRef: string;
            readonly firstName: string | null;
            readonly lastName: string | null;
            readonly email: string | null;
        } | null;
        readonly token: string | null;
    } | null;
};
export type UserDashboardQuery = {
    readonly response: UserDashboardQueryResponse;
    readonly variables: UserDashboardQueryVariables;
};



/*
query UserDashboardQuery(
  $idToken: String!
  $csrfToken: String!
  $ref: String!
) {
  sessionLogin(login: {idToken: $idToken, csrfToken: $csrfToken, accountRef: $ref}) {
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
v3 = [
  {
    "alias": null,
    "args": [
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
          }
        ],
        "kind": "ObjectValue",
        "name": "login"
      }
    ],
    "concreteType": "BankUserSession",
    "kind": "LinkedField",
    "name": "sessionLogin",
    "plural": false,
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserDashboardQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "UserDashboardQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "d285910b5c1cd387d241def3f7f0b1ea",
    "id": null,
    "metadata": {},
    "name": "UserDashboardQuery",
    "operationKind": "query",
    "text": "query UserDashboardQuery(\n  $idToken: String!\n  $csrfToken: String!\n  $ref: String!\n) {\n  sessionLogin(login: {idToken: $idToken, csrfToken: $csrfToken, accountRef: $ref}) {\n    balances {\n      opening_balance\n    }\n    account {\n      id\n      accountRef\n      firstName\n      lastName\n      email\n    }\n    token\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd1f3aeba4468993543f2c2ee8304ea6e';
export default node;
