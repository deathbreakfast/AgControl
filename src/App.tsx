import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Button, Menu, Layout, Slider, Space, Tooltip } from 'antd';
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
const [slider4, onSlider4Change] = useState(25);
const [slider5, onSlider5Change] = useState(15);
const [slider6, onSlider6Change] = useState(30);
const [slider7, onSlider7Change] = useState(15);
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
                <p>Sprinklers on right side</p>
                <Space>
                  <Slider
                    min={5}
                    max={60}
                    onChange={onSliderOneChange}
                    style={{width: 300}}
                    value={sliderOne}
                    />
                   <Tooltip title="Run">
                   <Button type="primary" shape="circle" icon={<PlayCircleOutlined />} />
                   </Tooltip>
                  </Space>
                  <p> Sprinklers in the center </p>
                  <Space>
                      <Slider
                        min={5}
                          max={60}
                        onChange={onSlider4Change}
                        style={{width: 300}}
                        value={slider4}
                       />
                       <Tooltip title="Run">
                       <Button type="primary" shape="circle" icon={<PlayCircleOutlined />} />
                       </Tooltip>
                    </Space>

                  <p> Sprinklers on left side </p>
                  <Space>
                      <Slider
                        min={5}
                          max={60}
                        onChange={onSlider5Change}
                        style={{width: 300}}
                        value={slider5}
                       />
                       <Tooltip title="Run">
                       <Button type="primary" shape="circle" icon={<PlayCircleOutlined />} />
                       </Tooltip>
                    </Space>
                 <p></p>
                <Button type="primary">Run Entire Zone</Button>
              </Card>
              <Card title="Front Yard" style={{ width: 900 }}>
              <Space>
                <Slider
                  min={5}
                    max={60}
                  onChange={onSlider2Change}
                  style={{width: 300}}
                  value={slider2}
                  />
                  <Tooltip title="Run">
                  <Button type="primary" shape="circle" icon={<PlayCircleOutlined />} />
                  </Tooltip>
                </Space>
              </Card>
              <Card title="Driveway" style={{ width: 900 }}>
                <p> Fabric Pots </p>
              <Space>
                  <Slider
                      min={15}
                      max={90}
                      onChange={onSlider6Change}
                      style={{width: 300}}
                      value={slider6}
                  />
                      <Tooltip title="Run">
                        <Button type="primary" shape="circle" icon={<PlayCircleOutlined />} />
                      </Tooltip>
                </Space>
                <p> Squash, Cucumbrs & Peas </p>
                  <Space>
                    <Slider
                      min={5}
                        max={60}
                      onChange={onSlider7Change}
                      style={{width: 300}}
                      value={slider7}
                     />
                     <Tooltip title="Run">
                     <Button type="primary" shape="circle" icon={<PlayCircleOutlined />} />
                     </Tooltip>
                  </Space>
               <p> </p>
               <Button type="primary">Run Entire Zone</Button>
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
