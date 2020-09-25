import { EntitiesPageQuery } from "./__generated__/EntitiesPageQuery.graphql";
import {
  EntitiesList_entities$key,
  EntitiesList_entities
} from "./__generated__/EntitiesList_entities.graphql";

import { Card, Space, Spin } from "antd";
import EntitiesList from "./EntitiesList";
import { useQuery } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import React, { Suspense, useState } from "react";

const query = graphql`
  query EntitiesPageQuery {
    allEntities {
      ...EntitiesList_entities
      id
    }
  }
`;

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

function EntiesPage() {
  const [selectedEntity, onEntityChange] = useState<string | null>(null);

  const { props, error } = useQuery<EntitiesPageQuery>(query);

  if (error != null) {
    return (
      <Card title="Error" style={{ width: 450 }}>
        {error}
      </Card>
    );
  }

  const { allEntities } = props ?? {};
  if (allEntities == null || allEntities === undefined) {
    return <div />;
  }
  return (
    <Suspense fallback={<Spin tip="Loading..." />}>
      <Space className="App-body" direction="vertical">
        <Space direction="horizontal">
          <Card title="Entities" style={{ width: 350 }}>
            <EntitiesList
              entities={allEntities.filter(notEmpty)}
              onSelect={onEntityChange}
              selectedEntity={selectedEntity}
            />
          </Card>
          <Card title={selectedEntity}>Selected Entity Data</Card>
        </Space>
      </Space>
    </Suspense>
  );
}

export default EntiesPage;
