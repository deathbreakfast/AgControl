import { Row, Col, Typography } from 'antd';
import React from "react";

type Props = {
  title: string,
  value: any,
  style?: any,
};

function TitledField(props: Props) {
  const {title, value, style} = props;

  return (
    <Row gutter={[8, 8]} justify="space-between" style={style}>
      <Col>
        <Typography.Text 
          style={{ width: 500, textAlign: 'left'}}>
          {title}
        </Typography.Text>
      </Col>
      <Col>
        {value}
      </Col>
    </Row>
  );
}

export default TitledField;
