import React from 'react';
import { Col, Row, Typography } from 'antd';
import SideMenu from '../components/tools/sidemenu/SideMenu';
import GeneradorMultiplicativoForm from '../components/generador_multiplicativo/GeneradorMultiplicativoForm';

const { Title } = Typography;

const GeneradorMultiplicativoPage = () => {
  return (
    <Row>
      <SideMenu />
      <Col flex="auto">
        <Row justify="center">
          <Title style={{ marginTop: '15px' }}>
            Metodo Generador Multiplicativo
          </Title>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <GeneradorMultiplicativoForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default GeneradorMultiplicativoPage;
