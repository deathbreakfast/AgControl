/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntitiesPageQueryVariables = {};
export type EntitiesPageQueryResponse = {
    readonly allEntities: ReadonlyArray<{
        readonly id: string;
        readonly serial: string | null;
        readonly " $fragmentRefs": FragmentRefs<"EntitiesList_entities">;
    } | null> | null;
};
export type EntitiesPageQuery = {
    readonly response: EntitiesPageQueryResponse;
    readonly variables: EntitiesPageQueryVariables;
};



/*
query EntitiesPageQuery {
  allEntities {
    ...EntitiesList_entities
    id
    serial
  }
}

fragment EntitiesList_entities on Entity {
  id
  serial
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "serial",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EntitiesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Entity",
        "kind": "LinkedField",
        "name": "allEntities",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntitiesList_entities"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EntitiesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Entity",
        "kind": "LinkedField",
        "name": "allEntities",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c35d9fe69c932d29f13e69d9ce4d9cf8",
    "id": null,
    "metadata": {},
    "name": "EntitiesPageQuery",
    "operationKind": "query",
    "text": "query EntitiesPageQuery {\n  allEntities {\n    ...EntitiesList_entities\n    id\n    serial\n  }\n}\n\nfragment EntitiesList_entities on Entity {\n  id\n  serial\n}\n"
  }
};
})();
(node as any).hash = '8c81ca34776f6d46d1a2ad7d0c0a96b6';
export default node;
