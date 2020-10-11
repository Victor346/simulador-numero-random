/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Col, Button, InputNumber, Row } from 'antd';

const CongruencialLinealCombinadoForm = () => {
  const [k, setK] = useState(0);
  const [aOne, setAOne] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [module, setModule] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const onFinish = () => {
    console.log('Seed:', k);
    console.log('Multiplier', aOne);
    console.log('Increase', increase);
    console.log('Module', module);
    console.log('Random numbers', quantity);
  };

  return (
    <>
      <Row justify="center" gutter={[0, 24]}>
        <Col span={6}>
          <Row align="middle">
            <Col span={8}>k:</Col>
            <Col flex="auto">
              <InputNumber
                placeholder="k"
                precision={0}
                step={1}
                min={0}
                value={k}
                onChange={(value) => setK(value as number)}
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row align="middle">
            <Col span={8}>
              a<sub>1</sub>
            </Col>
            <Col flex="auto">
              <InputNumber
                placeholder="Multiplicador"
                step={1}
                precision={0}
                min={0}
                value={aOne}
                onChange={(value) => setAOne(value as number)}
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row align="middle">
            <Col span={8}>Incremento</Col>
            <Col flex="auto">
              <InputNumber
                placeholder="Incremento"
                step={1}
                precision={0}
                min={0}
                value={increase}
                onChange={(value) => setIncrease(value as number)}
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row align="middle">
            <Col span={8}>Modulo</Col>
            <Col flex="auto">
              <InputNumber
                placeholder="Modulo"
                step={1}
                precision={0}
                min={0}
                value={module}
                onChange={(value) => setModule(value as number)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[0, 24]}>
        <Col span={8}>
          <Row align="middle">
            <Col span={8}>Cantidad de numeros:</Col>
            <Col flex="auto">
              <InputNumber
                placeholder="Cantidad de numeros"
                precision={0}
                step={1}
                min={0}
                value={quantity}
                onChange={(value) => setQuantity(value as number)}
              />
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Button block type="primary" onClick={onFinish}>
            Generar
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CongruencialLinealCombinadoForm;
