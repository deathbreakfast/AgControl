import { EntitySprinklerEdit_entity$key } from "./__generated__/EntitySprinklerEdit_entity.graphql";

import { Typography } from "antd";
import graphql from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "relay-hooks";
import TitledField from "./components/TitledField";

type Props = {
  entity: any, // TODO: Type
};

const fragment = graphql`
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
`;


function EntitySprinklerEdit(props: Props) {
  const {entity} = props;
  const entityFragment = useFragment<EntitySprinklerEdit_entity$key>(fragment, entity);
  
  if (entityFragment == null) {
    return null; 
  }

  const sprinkler = entityFragment?.sprinkler?.edges[0]?.node;
  if (sprinkler == null) {
    return null;
  }
  
  return (
    <>
      <Typography.Text strong>Sprinkler Details</Typography.Text>
      <TitledField title="ID" value={sprinkler.id} />
      <TitledField title="Serial Number" value={sprinkler.serial} />
      <TitledField title="status" value={sprinkler.status} />
      <TitledField title="IP Address" value={sprinkler.ipAddress} />
    </>
  );
}

export default EntitySprinklerEdit;
