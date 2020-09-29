/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EditEntityInput = {
    id: string;
    entityType?: string | null;
    name?: string | null;
    parentId?: string | null;
    showOnDashboard?: boolean | null;
};
export type EntityDetailsMutationVariables = {
    input: EditEntityInput;
};
export type EntityDetailsMutationResponse = {
    readonly editEntity: {
        readonly entity: {
            readonly " $fragmentRefs": FragmentRefs<"EntitiesList_entities" | "EntityDetails_entity">;
        } | null;
    } | null;
};
export type EntityDetailsMutation = {
    readonly response: EntityDetailsMutationResponse;
    readonly variables: EntityDetailsMutationVariables;
};



/*
mutation EntityDetailsMutation(
  $input: EditEntityInput!
) {
  editEntity(input: $input) {
    entity {
      ...EntitiesList_entities
      ...EntityDetails_entity
      id
    }
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v5 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityDetailsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EditEntity",
        "kind": "LinkedField",
        "name": "editEntity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Entity",
            "kind": "LinkedField",
            "name": "entity",
            "plural": false,
            "selections": [
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
    "name": "EntityDetailsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EditEntity",
        "kind": "LinkedField",
        "name": "editEntity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Entity",
            "kind": "LinkedField",
            "name": "entity",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
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
                          (v2/*: any*/),
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
                "selections": (v5/*: any*/),
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
                        "selections": (v5/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2abef5f579a395738d92e3398de0f04f",
    "id": null,
    "metadata": {},
    "name": "EntityDetailsMutation",
    "operationKind": "mutation",
    "text": "mutation EntityDetailsMutation(\n  $input: EditEntityInput!\n) {\n  editEntity(input: $input) {\n    entity {\n      ...EntitiesList_entities\n      ...EntityDetails_entity\n      id\n    }\n  }\n}\n\nfragment EntitiesList_entities on Entity {\n  id\n  name\n}\n\nfragment EntityDetailsFamily_entity on Entity {\n  parent {\n    id\n    name\n    type\n  }\n  children {\n    edges {\n      node {\n        id\n        name\n        type\n      }\n    }\n  }\n}\n\nfragment EntityDetails_entity on Entity {\n  id\n  name\n  type\n  showOnDashboard\n  ...EntitySprinklerEdit_entity\n  ...EntityDetailsFamily_entity\n}\n\nfragment EntitySprinklerEdit_entity on Entity {\n  sprinkler {\n    edges {\n      node {\n        id\n        status\n        serial\n        ipAddress\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f8c85cc340c92c9e7fbc86cb088131f5';
export default node;
