import React from 'react';
import { Col, Row, Typography } from 'antd';
import SideMenu from '../components/tools/sidemenu/SideMenu';
import CongruencialLinealCombinadoForm from '../components/congruencial_combinado/CongruencialLinealCombinadoForm';

const { Title } = Typography;

const CongruencialLinealCombinadoPage = () => {
  return (
    <Row>
      <SideMenu />
      <Col flex="auto">
        <Row justify="center">
          <Title style={{ marginTop: '15px' }}>
            Metodo Congruencial Lineal Combinado
          </Title>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <CongruencialLinealCombinadoForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CongruencialLinealCombinadoPage;
