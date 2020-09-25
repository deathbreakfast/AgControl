import { EntitiesList_entities$key } from "./__generated__/EntitiesList_entities.graphql";

import { List, Typography } from "antd";
import { useFragment } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import React from "react";

type Props = {
  entities: EntitiesList_entities$key;
  onSelect: (id: string) => void;
  selectedEntity: string | null;
};

const fragment = graphql`
  fragment EntitiesList_entities on Entity @relay(plural: true) {
    id
    serial
  }
`;

function EntitiesList(props: Props) {
  const { entities, onSelect, selectedEntity } = props;
  const entities_fragment = useFragment<EntitiesList_entities$key>(
    fragment,
    entities
  );

  // entities is a read only array. Map over and assign to a regular object.
  // TODO: find a better way.
  const dataSource = entities_fragment.map((entity) => {
    return { id: entity.id, serial: entity.serial };
  });
  console.log(selectedEntity);
  return (
    <List
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item>
          <div onClick={() => onSelect(item.id)}>
            <Typography.Text mark={selectedEntity === item.id}>
              {item.serial}
            </Typography.Text>
          </div>
        </List.Item>
      )}
    />
  );
}

export default EntitiesList;
