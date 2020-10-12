import React, { useState } from 'react';
import { Col, Button, InputNumber, Row, Select } from 'antd';
import { CongruencialLineal, KolmogorovSmirnov, ChiCuadrada } from 'random-number-gen';
import NumberList from '../tools/number_list/NumberList';
import Feedback from '../tools/feedback/Feedback';
import HullDobell from './HullDobell';

const CongruencialMixtoForm = () => {
  const [seed, setSeed] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [module, setModule] = useState(1);
  const [quantity, setQuantity] = useState(0);

  const [hullDobellTests, setHullDobellTests] = useState([false, false, false]);

  const [numbers, setNumbers] = useState([]);

  const [chiCriteria, setChiCriteria] = useState(0.001);
  const [kolmogorovCriteria, setKolmogorovCriteria] = useState(0.001);

  const ks = new KolmogorovSmirnov();
  const cc = new ChiCuadrada();

  const chiTable = [
    0.001,
    0.0025,
    0.005,
    0.01,
    0.025,
    0.05,
    0.1,
    0.15,
    0.2,
    0.25,
    0.3,
    0.35,
    0.4,
    0.45,
    0.5,
    0.55,
    0.6,
    0.65,
    0.7,
    0.75,
    0.8,
    0.85,
    0.9,
    0.95,
    0.975,
    0.99,
    0.995,
    0.9975,
    0.999,
  ];

  const kolmogorovTable = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2];

  const [feedback, setFeedback] = useState({
    chi: false,
    a1: 0,
    a2: 0,
    kolmogorov: false,
    criteria: {
      dpositive: 0,
      dnegative: 0,
      a: 0,
      tableValue: 0,
    },
  });

  const getHullDobell = () => {
    const cl = new CongruencialLineal();
    const hull = cl.hullDobell(multiplier, increase, module);
    setHullDobellTests(hull);
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
    getHullDobell();

    const kValidation = ks.validate(result.randoms.slice(0), kolmogorovCriteria);
    const ccValidation = cc.validate(result.randoms.slice(0), chiCriteria);
    setFeedback({
      chi: ccValidation.validated,
      a1: Math.ceil(ccValidation.result * 10000) / 10000,
      a2: Math.ceil(ccValidation.tableValue * 10000) / 10000,
      kolmogorov: kValidation.validated,
      criteria: {
        dpositive: Math.ceil(kValidation.dMax * 10000) / 10000,
        dnegative: Math.ceil(kValidation.dMinus * 10000) / 10000,
        a: Math.ceil(kValidation.dFinal * 10000) / 10000,
        tableValue: Math.ceil(kValidation.tableValue * 10000) / 10000,
      },
    });
  };

  const getChiOptions = () => {
    const chiOptions: JSX.Element[] = [];
    chiTable.forEach((value) => {
      chiOptions.push(<Select.Option value={value}>{value}</Select.Option>);
    });
    return chiOptions;
  };

  const getKolmogorovOptions = () => {
    const kolmogorovOptions: JSX.Element[] = [];
    kolmogorovTable.forEach((value) => {
      kolmogorovOptions.push(
        <Select.Option value={value}>{value}</Select.Option>
      );
    });
    return kolmogorovOptions;
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
                onChange={(value) => {
                  setMultiplier(value as number);
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row align="middle">
            <Col span={12}>Incremento (c)</Col>
            <Col flex="auto">
              <InputNumber
                placeholder="Incremento"
                step={1}
                precision={0}
                min={0}
                value={increase}
                onChange={(value) => {
                  setIncrease(value as number);
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row align="middle">
            <Col span={12}>Modulo (m)</Col>
            <Col flex="auto">
              <InputNumber
                placeholder="Modulo"
                step={1}
                precision={0}
                min={1}
                value={module}
                onChange={(value) => {
                  setModule(value as number);
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[0, 24]} justify="center">
        <Col span={6}>
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
        <Col span={6}>
          <Row>
            <Col span={8}>Prueba Hull-Dobell:</Col>
            <Col flex="auto">
              <HullDobell tests={hullDobellTests} />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row justify="center" gutter={[24, 0]}>
            <Col>Chi Cuadrada:</Col>
            <Col>
              <Select
                defaultValue={chiCriteria}
                style={{ width: 120 }}
                onChange={(value) => setChiCriteria(value)}
              >
                {getChiOptions()}
              </Select>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row justify="center">
            <Col>
              Kolmogorov Criteria:
            </Col>
            <Col>
              <Select
                defaultValue={kolmogorovCriteria}
                style={{ width: 120 }}
                onChange={(value) => setKolmogorovCriteria(value)}
              >
                {getKolmogorovOptions()}
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center" gutter={[12, 24]}>
        <Col span={4}>
          <Button block type="primary" onClick={onFinish}>
            Generar
          </Button>
        </Col>
      </Row>
      <Row justify="center" gutter={[12, 24]}>
        <Col span={12} style={{ overflow: 'auto', maxHeight: '60vh' }}>
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
