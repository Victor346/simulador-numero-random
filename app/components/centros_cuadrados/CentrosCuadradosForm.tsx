import React, { useState } from 'react';
import { Col, Button, InputNumber, Row } from 'antd';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CentrosCuadrados } from 'random-number-gen';
import copy from 'copy-to-clipboard';
import NumberList from '../tools/number_list/NumberList';

const CentrosCuadradosForm = () => {
  const [seed, setSeed] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const cc = new CentrosCuadrados();

  const onFinish = () => {
    const result = cc.getRandomNumbers(seed, quantity);
    let accString = '';
    result.randoms.forEach((num: number) => {
      accString = `${accString + num}\n`;
    });
    copy(accString);
    setNumbers(result.randoms);
  };

  return (
    <>
      <Row justify="center" gutter={[0, 24]}>
        <Col span={8}>
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
                min={1}
                max={9999}
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
