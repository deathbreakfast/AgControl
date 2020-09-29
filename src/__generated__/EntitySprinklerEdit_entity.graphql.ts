/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SprinklerStatus = "INACTIVE" | "OFF" | "RUNNING" | "%future added value";
export type EntitySprinklerEdit_entity = {
    readonly sprinkler: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly status: SprinklerStatus | null;
                readonly serial: string | null;
                readonly ipAddress: string | null;
            } | null;
        } | null>;
    } | null;
    readonly " $refType": "EntitySprinklerEdit_entity";
};
export type EntitySprinklerEdit_entity$data = EntitySprinklerEdit_entity;
export type EntitySprinklerEdit_entity$key = {
    readonly " $data"?: EntitySprinklerEdit_entity$data;
    readonly " $fragmentRefs": FragmentRefs<"EntitySprinklerEdit_entity">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntitySprinklerEdit_entity",
  "selections": [
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
    }
  ],
  "type": "Entity",
  "abstractKey": null
};
(node as any).hash = '5be75e3418fd9cb91a08bb1adecc32a0';
export default node;
