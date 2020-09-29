import { EntitiesList_entities$key } from "./__generated__/EntitiesList_entities.graphql";

import { Card, List, Typography } from "antd";
import { useFragment } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import React from "react";

type Props = {
  entities: EntitiesList_entities$key;
  onSelect: (id: string) => void;
  selectedEntityID: string | null;
};

const fragment = graphql`
  fragment EntitiesList_entities on Entity @relay(plural: true) {
    id
    name 
  }
`;

function EntitiesList(props: Props) {
  const { entities, onSelect, selectedEntityID } = props;
  const entities_fragment = useFragment<EntitiesList_entities$key>(
    fragment,
    entities,
  );

  // entities is a read only array. Map over and assign to a regular object.
  // TODO: find a better way.
  const dataSource = entities_fragment.map((entity) => {
    return { id: entity.id, name: entity.name };
  });

  return (
    <Card title="Entities" style={{ height: '80vh', width: 350 }}>
      <List
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item>
            <div onClick={() => onSelect(item.id)}>
              <Typography.Text mark={selectedEntityID === item.id}>
                {item.name != null ? item.name : item.id}
              </Typography.Text>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default EntitiesList;
