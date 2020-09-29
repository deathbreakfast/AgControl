import { PlayCircleOutlined } from "@ant-design/icons";
import { Card, Button, Slider, Space, Tooltip } from "antd";
import React, { useState } from "react";

function HomePage() {
  const [sliderOne, onSliderOneChange] = useState(15);
  const [slider2, onSlider2Change] = useState(15);
  const [slider4, onSlider4Change] = useState(25);
  const [slider5, onSlider5Change] = useState(15);
  const [slider6, onSlider6Change] = useState(30);
  const [slider7, onSlider7Change] = useState(15);

  return (
    <Space className="App-body" direction="vertical">
      <Card title="Back Yard Section 1" style={{ width: 900 }}>
        {" "}
        <p>Sprinklers on right side</p>
        <Space>
          <Slider
            min={5}
            max={60}
            onChange={onSliderOneChange}
            style={{ width: 300 }}
            value={sliderOne}
          />
          <Tooltip title="Run">
            <Button
              type="primary"
              shape="circle"
              icon={<PlayCircleOutlined />}
            />
          </Tooltip>{" "}
        </Space>
        <p> Sprinklers in the center </p>
        <Space>
          <Slider
            min={5}
            max={60}
            onChange={onSlider4Change}
            style={{ width: 300 }}
            value={slider4}
          />
          <Tooltip title="Run">
            <Button
              type="primary"
              shape="circle"
              icon={<PlayCircleOutlined />}
            />
          </Tooltip>
        </Space>
        <p> Sprinklers on left side </p>
        <Space>
          <Slider
            min={5}
            max={60}
            onChange={onSlider5Change}
            style={{ width: 300 }}
            value={slider5}
          />
          <Tooltip title="Run">
            <Button
              type="primary"
              shape="circle"
              icon={<PlayCircleOutlined />}
            />
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
            style={{ width: 300 }}
            value={slider2}
          />
          <Tooltip title="Run">
            <Button
              type="primary"
              shape="circle"
              icon={<PlayCircleOutlined />}
            />
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
            style={{ width: 300 }}
            value={slider6}
          />
          <Tooltip title="Run">
            <Button
              type="primary"
              shape="circle"
              icon={<PlayCircleOutlined />}
            />
          </Tooltip>
        </Space>
        <p> Squash, Cucumbrs & Peas </p>
        <Space>
          <Slider
            min={5}
            max={60}
            onChange={onSlider7Change}
            style={{ width: 300 }}
            value={slider7}
          />
          <Tooltip title="Run">
            <Button
              type="primary"
              shape="circle"
              icon={<PlayCircleOutlined />}
            />
          </Tooltip>
        </Space>
        <p> </p>
        <Button type="primary">Run Entire Zone</Button>
      </Card>
    </Space>
  );
}

export default HomePage;
