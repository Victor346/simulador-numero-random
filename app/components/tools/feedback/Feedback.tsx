/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Row, Col, Tag } from 'antd';

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
      tableValue: number;
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
      <Row justify="center" gutter={[24, 12]}>
        <Col>
          <h2>x0: {feedback.a1}</h2>
        </Col>
        <Col>
          <h2>xa: {feedback.a2}</h2>
        </Col>
      </Row>
      <Row justify="center" align="top" gutter={[0, 12]}>
        <Col>
          <h2>Kolmogornov Smirnov</h2>
        </Col>
        <Col offset={1}>{getTag(feedback.kolmogorov)}</Col>
      </Row>
      <Row justify="center" gutter={[24, 12]}>
        <Col>
          <h2>D+: {feedback.criteria.dpositive}</h2>
        </Col>
        <Col>
          <h2>D-: {feedback.criteria.dnegative}</h2>
        </Col>
      </Row>
      <Row justify="center" gutter={[24, 12]}>
        <Col>
          <h2>x0: {feedback.criteria.a}</h2>
        </Col>
        <Col>
          <h2>xa: {feedback.criteria.tableValue}</h2>
        </Col>
      </Row>
    </>
  );
};

export default Feedback;
