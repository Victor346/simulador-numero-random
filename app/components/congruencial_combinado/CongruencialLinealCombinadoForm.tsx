/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Col, Button, InputNumber, Row, Switch } from 'antd';
import { CongruencialCombinado } from 'random-number-gen';
import NumberList from '../tools/number_list/NumberList';

const CongruencialLinealCombinadoForm = () => {
  const [k, setK] = useState(2);
  const [quantity, setQuantity] = useState(0);
  const [advancedMode, setAdvancedMode] = useState(true);
  const [generators, setGenerators] = useState([
    {
      seed: 0,
      inc: 40014,
      mod: 2147483563,
    },
    {
      seed: 0,
      inc: 40692,
      mod: 2147483399,
    },
  ]);
  const [numbers, setNumbers] = useState([]);
  const [maxPeriod, setMaxPeriod] = useState(0);

  const onFinish = () => {
    const cc = new CongruencialCombinado();
    const result = cc.getRandomNumbers(
      {
        data: generators,
        k,
      },
      quantity
    );
    setNumbers(result.randoms);
    setMaxPeriod(result.max_period);
  };

  const setDefault = () => {
    setK(2);
    setGenerators([
      {
        seed: 0,
        inc: 40014,
        mod: 2147483563,
      },
      {
        seed: 0,
        inc: 40692,
        mod: 2147483399,
      },
    ]);
  };

  const getInputRow = (k: number) => {
    const returnList = [];

    const currentGenerators = generators;
    for (let i = 0; i < k; i++) {
      if (currentGenerators[i] === undefined) {
        currentGenerators[i] = {
          seed: 0,
          inc: 0,
          mod: 0,
        };
      }
    }

    for (let i = 0; i < k; i += 1) {
      returnList.push(
        <Row justify="center" gutter={[16, 24]}>
          <Col>
            X<sub>{i},0</sub>:
          </Col>
          <Col>
            <InputNumber
              placeholder={`x${i}, 0`}
              precision={0}
              required
              step={1}
              value={currentGenerators[i].seed}
              min={0}
              onChange={(value) => {
                const currentInsideGenerators = JSON.parse(
                  JSON.stringify(generators)
                );
                currentInsideGenerators[i].seed = value;
                setGenerators(currentInsideGenerators);
              }}
            />
          </Col>
          <Col>
            a<sub>{i}</sub>:
          </Col>
          <Col>
            <InputNumber
              placeholder={`a${i}`}
              precision={0}
              required
              disabled={!advancedMode}
              value={currentGenerators[i].inc}
              step={1}
              min={0}
              onChange={(value) => {
                const currentInsideGenerators = JSON.parse(
                  JSON.stringify(generators)
                );
                currentInsideGenerators[i].inc = value;
                setGenerators(currentInsideGenerators);
              }}
            />
          </Col>
          <Col>
            m<sub>{i}</sub>:
          </Col>
          <Col>
            <InputNumber
              placeholder={`m${i}`}
              precision={0}
              value={currentGenerators[i].mod}
              required
              disabled={!advancedMode}
              step={1}
              min={0}
              onChange={(value) => {
                const currentInsideGenerators = JSON.parse(
                  JSON.stringify(generators)
                );
                currentInsideGenerators[i].mod = value;
                setGenerators(currentInsideGenerators);
              }}
            />
          </Col>
        </Row>
      );
    }
    return returnList;
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
                min={2}
                disabled={!advancedMode}
                max={40}
                value={k}
                onChange={(value) => {
                  setK(value as number);
                  const currentGenerators = generators;
                  setGenerators(currentGenerators.slice(0, value as number));
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row align="middle">
            <Col span={8}>Avanzado:</Col>
            <Col flex="auto">
              <Switch
                defaultChecked
                onChange={(checked) => {
                  setAdvancedMode(checked);
                  setDefault();
                }}
              />
            </Col>
          </Row>
        </Col>
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
        <Col span={2}>
          <Button block type="primary" onClick={onFinish}>
            Generar
          </Button>
        </Col>
      </Row>
      <Row justify="center" gutter={[48, 24]}>
        <Col span={12} style={{ overflow: 'auto', maxHeight: '70vh' }}>
          {getInputRow(k)}
        </Col>
        <Col span={10} style={{ overflow: 'auto', maxHeight: '70vh' }}>
          <NumberList numbers={numbers} />
        </Col>
      </Row>
      <Row justify="center" gutter={[48, 24]}>
        <h2>Maximo Periodo: {maxPeriod}</h2>
      </Row>
    </>
  );
};

export default CongruencialLinealCombinadoForm;
