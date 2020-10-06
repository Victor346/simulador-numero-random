import React, { useState } from 'react';
import { Col, Button, InputNumber, Row } from 'antd';

const CentrosCuadradosForm = () => {
  const [seed, setSeed] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const onFinish = () => {
    console.log('Seed:', seed);
    console.log('Random numbers', quantity);
  };

  return (
    <Row justify="center">
      <Col span={8}>
        <Row align="middle">
          <Col span={8}>Semilla:</Col>
          <Col flex="auto">
            <InputNumber
              placeholder="Semilla"
              precision={0}
              step={1}
              min={0}
              value={seed}
              onChange={(value) => setSeed(value as number)}
            />
          </Col>
        </Row>
      </Col>
      <Col span={8}>
        <Row align="middle">
          <Col span={8}>¿Cuantos numeros?:</Col>
          <Col flex="auto">
            <InputNumber
              placeholder="Cantidad de numeros"
              step={1}
              precision={0}
              min={0}
              value={quantity}
              onChange={(value) => setQuantity(Math.floor(value as number))}
            />
          </Col>
        </Row>
      </Col>
      <Col span={4}>
        <Button block type="primary" onClick={onFinish}>
          Submit
        </Button>
      </Col>
    </Row>
  );
};

export default CentrosCuadradosForm;
