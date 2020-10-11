import React, { useState } from 'react';
import { Col, Button, InputNumber, Row } from 'antd';
import NumberList from '../tools/number_list/NumberList';
import Feedback from '../tools/feedback/Feedback';
import HullDobell from './HullDobell';

const CongruencialMixtoForm = () => {
  const [seed, setSeed] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [module, setModule] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [hullDobellTests] = useState([false, false, false]);

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

  const onFinish = () => {
    console.log('Seed:', seed);
    console.log('Multiplier', multiplier);
    console.log('Increase', increase);
    console.log('Module', module);
    console.log('Random numbers', quantity);
  };

  return (
    <>
      <Row justify="center" gutter={[0, 24]}>
        <Col span={6}>
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
        <Col span={6}>
          <Row align="middle">
            <Col span={8}>Multiplicador</Col>
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
        <Col span={8}>
          <Row>
            <Col span={8}>Prueba Hull-Dobell:</Col>
            <Col flex="auto">
              <HullDobell tests={hullDobellTests} />
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

export default CongruencialMixtoForm;
