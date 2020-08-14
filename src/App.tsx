import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Button, Menu, Layout, Slider, Space } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

function App() {

  const [collapsed, onCollapse] = useState(false);

  return (
    <div className="App">
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="App-logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="App-layout">
          <Header>Header</Header>
          <Content>
            <Space className="App-body" direction="vertical">
              <Card title="Back Yard Section 1" style={{ width: 900 }}>
                <p>Sprinklers on the right side of the yard</p>
                <Space>
                  <Slider
                    min={5}
                    max={60}
                    onChange={() => {}}
                    style={{width: 300}}
                    value={15}
                  />
                  <Button type="primary">Run</Button>
                </Space>
              </Card>
              <Card title="Front Yard" style={{ width: 900 }}>
                <p>Card content</p>
                <p>Card content</p>
                <Button type="primary">Primary Button</Button>
              </Card>
            </Space>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
