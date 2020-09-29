/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityType = "SPRINKLER" | "UNKNOWN" | "ZONE" | "%future added value";
export type EntityDetailsFamily_entity = {
    readonly parent: {
        readonly id: string;
        readonly name: string | null;
        readonly type: EntityType | null;
    } | null;
    readonly children: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string | null;
                readonly type: EntityType | null;
            } | null;
        } | null>;
    } | null;
    readonly " $refType": "EntityDetailsFamily_entity";
};
export type EntityDetailsFamily_entity$data = EntityDetailsFamily_entity;
export type EntityDetailsFamily_entity$key = {
    readonly " $data"?: EntityDetailsFamily_entity$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityDetailsFamily_entity">;
};



const node: ReaderFragment = (function(){
var v0 = [
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
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "type",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityDetailsFamily_entity",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Entity",
      "kind": "LinkedField",
      "name": "parent",
      "plural": false,
      "selections": (v0/*: any*/),
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
              "selections": (v0/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": null
};
})();
(node as any).hash = '50a69b237d80c17b35b0e60e13e514cc';
export default node;
