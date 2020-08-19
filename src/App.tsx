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
  PlayCircleOutlined,

} from '@ant-design/icons';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;

function App() {

  const [collapsed, onCollapse] = useState(false);
  const [sliderOne, onSliderOneChange] = useState(15);
const [slider2, onSlider2Change] = useState(15);
const [slider3, onSlider3Change] = useState(15);
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
                    onChange={onSliderOneChange}
                    style={{width: 300}}
                    value={sliderOne}
                  />
                  <PlayCircleOutlined />
                  <Button type="primary">Run</Button>
                </Space>
                <p>Front Yard</p>
              </Card>
              <Card title="Front Yard" style={{ width: 900 }}>
              <Space direction="vertical">
                <Slider
                  min={5}
                    max={60}
                  onChange={onSlider2Change}
                  style={{width: 300}}
                  value={slider2}
                />

                <p>Card content</p>
                <p>Card content</p>
                <Button type="primary">Primary Button</Button>
                </Space>

              </Card>

              <Card title="Driveway" style={{ width: 900 }}>
                <Space direction="vertical">
                  <Slider
                    min={5}
                      max={60}
                    onChange={onSlider3Change}
                    style={{width: 300}}
                    value={slider3}
                  />
                </Space>
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
