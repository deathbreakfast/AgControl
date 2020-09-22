import { Menu, Layout, Space } from "antd";
import { MenuProps } from "antd/lib/menu";
import { SelectEventHandler } from "rc-menu/lib/interface";
import React, { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  title: string;
};

type Props = {
  content: React.ReactNode;
  menuItems: Array<MenuItem>;
  onMenuSelect: (key: React.Key) => void;
};

function AppLayout(props: Props) {
  const [isCollapsed, onCollapse] = useState(false);
  const { content, menuItems, onMenuSelect } = props;
  const onSelect: SelectEventHandler = (event) => {
    onMenuSelect(event.key);
  };

  const items = menuItems.map((item: MenuItem) => (
    <Menu.Item key={item.key} icon={item.icon}>
      {item.title}
    </Menu.Item>
  ));

  return (
    <Layout>
      <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
        <div className="App-logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[String(menuItems[0].key)]}
          mode="inline"
          onSelect={onSelect}
        >
          {items}
        </Menu>
      </Sider>
      <Layout className="App-layout">
        <Header>Header</Header>
        <Content>
          <Space className="App-body" direction="vertical">
            {content}
          </Space>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
