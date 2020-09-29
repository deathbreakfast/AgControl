import { EntityDetails_entity$key } from "./__generated__/EntityDetails_entity.graphql";

import { Button, Card, Checkbox, Divider, Input, Space, Select, Typography } from 'antd';
import { useFragment } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import React, { useState } from "react";
import TitledField from "./components/TitledField";
import EntitySprinklerEdit from "./EntitySprinklerEdit"
import EntityDetailsFamily from "./EntityDetailsFamily"

type Props = {
  entity: any, // TODO: Type
};

const fragment = graphql`
  fragment EntityDetails_entity on Entity {
    id
    name
    type 
    showOnDashboard 
    ...EntitySprinklerEdit_entity
    ...EntityDetailsFamily_entity }
`;

function EntityDetails(props: Props) {
  const {entity} = props;
  const entityFragment = useFragment<EntityDetails_entity$key>(
    fragment,
    entity,
  );

  const rightStyle = {height: '80vh', width: 500};
  const rowStyle = {width: 450};

  const [name, onNameChange] = useState<string | null>(null);
  const [
    entityType, 
    onEntityTypeChange,
  ] = useState<string | null>(null);
  const [showOnDashboard, onShowOnDashboardChange] = useState<boolean | null>(null);

  if (entityFragment == null) {
    return (
      <Card title="Edit Entity" style={rightStyle}>
        <Typography.Text>Nothing Selected</Typography.Text>
      </Card>
    );
  }

  const nameHasUnsavedChanges = name != null 
    && name.trim() !== "" 
    && name !== entityFragment.name;
  const typeHasUnsavedChanges = entityType != null
    && entityType !== entityFragment.type;
  const showOnDashboardHasUnsavedChanges = showOnDashboard != null
    && showOnDashboard !== entityFragment.showOnDashboard;

  const hasUnsavedChanges = nameHasUnsavedChanges
    || typeHasUnsavedChanges
    || showOnDashboardHasUnsavedChanges;

  const typeDropDown = (
    <Select 
      onChange={onEntityTypeChange}
      value={
        typeHasUnsavedChanges 
          ? entityType ?? "UNKNOWN" 
          : entityFragment.type ?? "UNKNOWN"
      }
      style={{width: 120}}>
      <Select.Option value="SPRINKLER">Sprinkler</Select.Option>
      <Select.Option value="ZONE">Zone</Select.Option>
      <Select.Option value="UNKNOWN">Unknown</Select.Option>
    </Select>
  );

  return (
    <Card 
      title="Edit Entity" 
      style={rightStyle}>
      <Space direction="vertical">
        <TitledField 
          title="ID"
          value={
            <Typography.Text>{entityFragment.id}</Typography.Text>
          }
          style={rowStyle}
        />
        <TitledField
          title="Entity Name"
          value={
            <Input 
              onChange={event => onNameChange(event.target.value)} 
              value={name ?? entityFragment.name ?? ""} />
          }
        />
        <TitledField
          title="Show on Dashboard"
          value={
            <Checkbox 
              onChange={event => onShowOnDashboardChange(event.target.checked)}
              checked={
                showOnDashboardHasUnsavedChanges 
                  ? showOnDashboard ?? false
                  : entityFragment.showOnDashboard ?? false
              }
            />}
        />
        <TitledField
          title="Entity Type"
          value={typeDropDown}
        />
        <Divider />
        {entityFragment.type === "SPRINKLER" ?
          <>
            <EntitySprinklerEdit entity={entityFragment} />
            <Divider />
          </>
            : null
        }
        <EntityDetailsFamily entity={entityFragment} />
      </Space>
      <Button 
        disabled={!hasUnsavedChanges} 
        type="primary">
        Save
      </Button> 
    </Card>
  );
}

export default EntityDetails;
