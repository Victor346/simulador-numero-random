/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Col, Button, InputNumber, Row } from 'antd';
import NumberList from '../tools/number_list/NumberList';
import Feedback from '../tools/feedback/Feedback';

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

  const [numbers] = useState([
    4323432342,
    2312312312,
    6765756756,
    4564564564,
    3245345344,
    8978968768,
    7686787887,
    756464566,
    11111111,
    4234345345,
    2342342234,
    89567768567,
  ]);

  const [feedback] = useState({
    chi: false,
    a1: 234890.34,
    a2: 243243.34,
    kolmogorov: false,
    criteria: {
      dpositive: 324234.23,
      dnegative: 3456.4564,
      a: 3435345.435,
    },
  });

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
      <Row justify="center" gutter={[48, 24]}>
        <Col span={12} style={{ overflow: 'auto', maxHeight: '70vh' }}>
          <NumberList numbers={numbers} />
        </Col>
        <Col span={12}>
          <Feedback feedback={feedback} />
        </Col>
      </Row>
    </>
  );
};

export default CongruencialLinealCombinadoForm;
