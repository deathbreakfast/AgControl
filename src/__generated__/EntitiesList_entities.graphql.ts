/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntitiesList_entities = ReadonlyArray<{
    readonly id: string;
    readonly name: string | null;
    readonly " $refType": "EntitiesList_entities";
}>;
export type EntitiesList_entities$data = EntitiesList_entities;
export type EntitiesList_entities$key = ReadonlyArray<{
    readonly " $data"?: EntitiesList_entities$data;
    readonly " $fragmentRefs": FragmentRefs<"EntitiesList_entities">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "EntitiesList_entities",
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
    }
  ],
  "type": "Entity",
  "abstractKey": null
};
(node as any).hash = '5da1429e6d60cbd0dc1035f377301538';
export default node;
