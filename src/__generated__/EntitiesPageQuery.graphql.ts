/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntitiesPageQueryVariables = {};
export type EntitiesPageQueryResponse = {
    readonly allEntities: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"EntitiesList_entities" | "EntityDetails_entity">;
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
    ...EntityDetails_entity
    id
  }
}

fragment EntitiesList_entities on Entity {
  id
  name
}

fragment EntityDetailsFamily_entity on Entity {
  parent {
    id
    name
    type
  }
  children {
    edges {
      node {
        id
        name
        type
      }
    }
  }
}

fragment EntityDetails_entity on Entity {
  id
  name
  type
  showOnDashboard
  ...EntitySprinklerEdit_entity
  ...EntityDetailsFamily_entity
}

fragment EntitySprinklerEdit_entity on Entity {
  sprinkler {
    edges {
      node {
        id
        status
        serial
        ipAddress
      }
    }
  }
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
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v3 = [
  (v0/*: any*/),
  (v1/*: any*/),
  (v2/*: any*/)
];
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntitiesList_entities"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityDetails_entity"
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
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "showOnDashboard",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SprinklerConnection",
            "kind": "LinkedField",
            "name": "sprinkler",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SprinklerEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Sprinkler",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "status",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "serial",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "ipAddress",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Entity",
            "kind": "LinkedField",
            "name": "parent",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "EntityConnection",
            "kind": "LinkedField",
            "name": "children",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "EntityEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Entity",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
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
    "cacheID": "41b3af64a283a039d257bef1d0a015c2",
    "id": null,
    "metadata": {},
    "name": "EntitiesPageQuery",
    "operationKind": "query",
    "text": "query EntitiesPageQuery {\n  allEntities {\n    ...EntitiesList_entities\n    ...EntityDetails_entity\n    id\n  }\n}\n\nfragment EntitiesList_entities on Entity {\n  id\n  name\n}\n\nfragment EntityDetailsFamily_entity on Entity {\n  parent {\n    id\n    name\n    type\n  }\n  children {\n    edges {\n      node {\n        id\n        name\n        type\n      }\n    }\n  }\n}\n\nfragment EntityDetails_entity on Entity {\n  id\n  name\n  type\n  showOnDashboard\n  ...EntitySprinklerEdit_entity\n  ...EntityDetailsFamily_entity\n}\n\nfragment EntitySprinklerEdit_entity on Entity {\n  sprinkler {\n    edges {\n      node {\n        id\n        status\n        serial\n        ipAddress\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e40d78ab0a6833cd2d327a047d06cd96';
export default node;
