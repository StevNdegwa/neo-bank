/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LoginQueryVariables = {
    accountRef: string;
};
export type LoginQueryResponse = {
    readonly account: {
        readonly id: string;
        readonly firstName: string | null;
        readonly lastName: string | null;
        readonly email: string | null;
        readonly accountRef: string;
    } | null;
};
export type LoginQuery = {
    readonly response: LoginQueryResponse;
    readonly variables: LoginQueryVariables;
};



/*
query LoginQuery(
  $accountRef: String!
) {
  account(account: {accountRef: $accountRef}) {
    id
    firstName
    lastName
    email
    accountRef
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "accountRef"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "accountRef",
            "variableName": "accountRef"
          }
        ],
        "kind": "ObjectValue",
        "name": "account"
      }
    ],
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accountRef",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "47267473d9296f8bebca35aebc61cc67",
    "id": null,
    "metadata": {},
    "name": "LoginQuery",
    "operationKind": "query",
    "text": "query LoginQuery(\n  $accountRef: String!\n) {\n  account(account: {accountRef: $accountRef}) {\n    id\n    firstName\n    lastName\n    email\n    accountRef\n  }\n}\n"
  }
};
})();
(node as any).hash = '932e17e78af2a53ef661a020effd7057';
export default node;
