import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Typography } from 'antd';
import routes from '../constants/routes.json';
import styles from './Home.css';

const { Title } = Typography;

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <Title>Simulador de numeros random</Title>
      <Row gutter={[0, 32]}>
        <Col span={12} offset={6}>
          <Link to={routes.CENTROS_CUADRADOS}>
            <Button block type="primary" shape="round">
              Metodo de los Centros Cuadrados
            </Button>
          </Link>
        </Col>
      </Row>
      <Row gutter={[0, 32]}>
        <Col span={12} offset={6}>
          <Link to={routes.CONGRUENCIAL}>
            <Button block type="primary" shape="round">
              Metodo Congruencial
            </Button>
          </Link>
        </Col>
      </Row>
      <Row gutter={[0, 32]}>
        <Col span={12} offset={6}>
          <Link to={routes.CONGRUENCIAL_MIXTO}>
            <Button block type="primary" shape="round">
              Metodo Congruencial Mixto
            </Button>
          </Link>
        </Col>
      </Row>
      <Row gutter={[0, 32]}>
        <Col span={12} offset={6}>
          <Link to={routes.GENERADOR_MULTIPLICATIVO}>
            <Button block type="primary" shape="round">
              Generador Multiplicativo
            </Button>
          </Link>
        </Col>
      </Row>
      <Row gutter={[0, 32]}>
        <Col span={12} offset={6}>
          <Link to={routes.CONGRUENCIAL_LINEAL_COMBINADO}>
            <Button block type="primary" shape="round">
              Metodo Congruencial Lineal Combinado
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
