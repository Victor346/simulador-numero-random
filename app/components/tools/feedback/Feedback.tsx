import React from 'react';
import { Row, Col, Tag, Select } from 'antd';

type Props = {
  feedback: {
    chi: boolean;
    a1: number;
    a2: number;
    kolmogorov: boolean;
    criteria: {
      dpositive: number;
      dnegative: number;
      a: number;
    };
  };
};

const Feedback = ({ feedback }: Props) => {
  const getTag = (isSuccessful: boolean) => {
    if (isSuccessful) return <Tag color="success">Exitoso</Tag>;
    return <Tag color="error">Fallido</Tag>;
  };

  return (
    <>
      <Row justify="center" gutter={[0, 12]}>
        <Col>
          <h1>Pruebas</h1>
        </Col>
      </Row>
      <Row justify="center" align="top" gutter={[0, 12]}>
        <Col>
          <h2>Chi-Cuadrada</h2>
        </Col>
        <Col offset={1}>{getTag(feedback.chi)}</Col>
      </Row>
      <Row justify="center" gutter={[0, 12]}>
        <Col>
          <h2>
            a1:
            {feedback.a1}
          </h2>
        </Col>
        <Col offset={1}>
          <h2>
            a2:
            {feedback.a2}
          </h2>
        </Col>
      </Row>
      <Row justify="center" align="top" gutter={[0, 12]}>
        <Col>
          <h2>Kolmogornov Smirnov</h2>
        </Col>
        <Col offset={1}>{getTag(feedback.kolmogorov)}</Col>
      </Row>
      <Row justify="center" align="top" gutter={[0, 12]}>
        <Col>
          <h2>Criterio de aceptacion</h2>
        </Col>
        <Col offset={1}>
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="voc">Voc</Select.Option>
          </Select>
        </Col>
      </Row>
      <Row justify="center" gutter={[0, 12]}>
        <Col>
          <h3>
            D+:
            {feedback.criteria.dpositive}
          </h3>
        </Col>
        <Col offset={1}>
          <h3>
            D+:
            {feedback.criteria.dnegative}
          </h3>
        </Col>
        <Col offset={1}>
          <h3>
            a:
            {feedback.criteria.a}
          </h3>
        </Col>
      </Row>
    </>
  );
};

export default Feedback;
