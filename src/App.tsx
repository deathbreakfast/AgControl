import "./App.css";

import {
  RobotOutlined,
  HomeOutlined,
  DatabaseOutlined
} from "@ant-design/icons";
import AppLayout from "./components/Layout";
import EntitiesPage from "./EntitiesPage";
import HomePage from "./HomePage";
import React, { useState } from "react";
import { RelayEnvironmentProvider } from "relay-hooks";
import Environment from "./relay/environment";

function App() {
  const [selectedPage, onPageChange] = useState("HOME");
  const menuItems = [
    { key: "HOME", title: "Home", icon: <HomeOutlined /> },
    { key: "ENTITIES", title: "Entities", icon: <DatabaseOutlined /> },
    { key: "AUTOMATION", title: "Automation", icon: <RobotOutlined /> }
  ];

  const onMenuSelect = (menuKey: React.Key): void => {
    onPageChange(String(menuKey));
  };

  let content = null;
  if (selectedPage === "HOME") {
    content = <HomePage />;
  } else if (selectedPage === "ENTITIES") {
    content = <EntitiesPage />;
  } else {
    content = <div />;
  }

  return (
    <RelayEnvironmentProvider environment={Environment}>
    <div className="App">
      <AppLayout
        content={content}
        menuItems={menuItems}
        onMenuSelect={onMenuSelect}
      />
    </div>
  </RelayEnvironmentProvider>
  );
}

export default App;
