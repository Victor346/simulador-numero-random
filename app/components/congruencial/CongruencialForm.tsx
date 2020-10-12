import React, { useState } from 'react';
import { Col, Button, InputNumber, Row } from 'antd';
import { CongruencialLineal } from 'random-number-gen';
import NumberList from '../tools/number_list/NumberList';
import Feedback from '../tools/feedback/Feedback';

const CongruencialForm = () => {
  const [seed, setSeed] = useState(1);
  const [multiplier, setMultiplier] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [module, setModule] = useState(1);
  const [quantity, setQuantity] = useState(0);

  const [numbers, setNumbers] = useState([]);
  // const [min, setMin] = useState(0);
  // const [max, setMax] = useState(0);

  const feedback = {
    chi: false,
    a1: 234890.34,
    a2: 243243.34,
    kolmogorov: false,
    criteria: {
      dpositive: 324234.23,
      dnegative: 3456.4564,
      a: 3435345.435,
    },
  };

  const onFinish = () => {
    const cl = new CongruencialLineal();
    const result = cl.getRandomNumbers(
      seed,
      multiplier,
      increase,
      module,
      quantity
    );
    setNumbers(result.randoms);
    // setMin(result.min);
    // setMax(result.max);
  };

  return (
    <>
      <Row justify="center" gutter={[0, 24]}>
        <Col span={6}>
          <Row align="middle">
            <Col span={8}>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              Semilla (x<sub>0</sub>):
            </Col>
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
        <Col span={6}>
          <Row align="middle">
            <Col span={12}>Multiplicador (a):</Col>
            <Col flex="auto">
              <InputNumber
                placeholder="Multiplicador"
                step={1}
                precision={0}
                min={0}
                value={multiplier}
                onChange={(value) => setMultiplier(value as number)}
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row align="middle">
            <Col span={12}>Incremento (c):</Col>
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
            <Col span={12}>Modulo (m):</Col>
            <Col flex="auto">
              <InputNumber
                placeholder="Modulo"
                step={1}
                precision={0}
                min={1}
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

export default CongruencialForm;
