/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityType = "SPRINKLER" | "UNKNOWN" | "ZONE" | "%future added value";
export type EntityDetails_entity = {
    readonly id: string;
    readonly name: string | null;
    readonly type: EntityType | null;
    readonly showOnDashboard: boolean | null;
    readonly " $fragmentRefs": FragmentRefs<"EntitySprinklerEdit_entity" | "EntityDetailsFamily_entity">;
    readonly " $refType": "EntityDetails_entity";
};
export type EntityDetails_entity$data = EntityDetails_entity;
export type EntityDetails_entity$key = {
    readonly " $data"?: EntityDetails_entity$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityDetails_entity">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityDetails_entity",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "showOnDashboard",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntitySprinklerEdit_entity"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityDetailsFamily_entity"
    }
  ],
  "type": "Entity",
  "abstractKey": null
};
(node as any).hash = '9e20e28300e52608742087e0587e4670';
export default node;
