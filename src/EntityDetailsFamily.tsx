import { EntityDetailsFamily_entity$key } from "./__generated__/EntityDetailsFamily_entity.graphql"

import { Divider, Typography } from "antd";
import graphql from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "relay-hooks";
import TitledField from "./components/TitledField";

type Props = {
  entity: any
};

const fragment = graphql`
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
`;


function EntityDetailsFamily(props: Props) {
  const {entity} = props;
  const entityFragment = useFragment<EntityDetailsFamily_entity$key>(
    fragment,
    entity,
  );
  
  if (entityFragment == null) {
    return null;
  }

  const parent = entityFragment?.parent;
  let parentComponent = null;

  if (parent != null) {
    parentComponent = (
      <>
        <Typography.Text strong>Parent Details</Typography.Text>
        <TitledField title="ID" value={parent.id} />
        <TitledField title="Name" value={parent.name} />
        <TitledField title="Type" value={parent.type} />
        <Divider />
      </>
    );
  }

  const children = entityFragment?.children?.edges;
  let childrenComponent = null;

  if (children != null && children.length > 0) {
    childrenComponent = (
      <>
        <Typography.Text strong>Children Details</Typography.Text>
        {children.map(entity => {
          const entityNode = entity?.node;
          return (
            <TitledField 
              title={entityNode?.name ?? 'No name assigned'}
              value={`ID: ${entityNode?.id}   Type: ${entityNode?.type}`} 
              />
          );
        })}
        <Divider />
      </>
    );
  }

  return (
    <>
      {parentComponent}
      {childrenComponent}
    </>
  );
}

export default EntityDetailsFamily;
