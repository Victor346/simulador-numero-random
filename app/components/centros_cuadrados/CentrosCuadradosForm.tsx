import React, { useState } from 'react';
import { Col, Button, InputNumber, Row } from 'antd';
import NumberList from '../tools/number_list/NumberList';

const CentrosCuadradosForm = () => {
  const [seed, setSeed] = useState(0);
  const [quantity, setQuantity] = useState(0);
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

  const onFinish = () => {
    console.log('Seed:', seed);
    console.log('Random numbers', quantity);
  };

  return (
    <>
      <Row justify="center" gutter={[0, 24]}>
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
      <Row justify="center" gutter={[0, 24]}>
        <Col span={12} style={{ overflow: 'auto', maxHeight: '70vh' }}>
          <NumberList numbers={numbers} />
        </Col>
      </Row>
    </>
  );
};

export default CentrosCuadradosForm;
