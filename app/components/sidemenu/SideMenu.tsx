import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Menu } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import styles from './SideMenu.css';
import routes from '../../constants/routes.json';

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const span = collapsed ? 2 : 6;

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const getMenuIcon = () => {
    return collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />;
  };

  return (
    <Col span={span}>
      <Menu
        className={styles.container}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Button
          block
          onClick={toggleCollapsed}
          className={styles.collapser}
          icon={getMenuIcon()}
        />
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to={routes.CENTROS_CUADRADOS}>Centros Cuadrados</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          <Link to={routes.CONGRUENCIAL}>Metodo Congruencial</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DesktopOutlined />}>
          <Link to={routes.CONGRUENCIAL_MIXTO}>Congruencial Mixto</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ContainerOutlined />}>
          <Link to={routes.GENERADOR_MULTIPLICATIVO}>
            Congruencial Multiplicativo
          </Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<ContainerOutlined />}>
          <Link to={routes.CONGRUENCIAL_LINEAL_COMBINADO}>
            Congruencial Lineal Combinado
          </Link>
        </Menu.Item>
      </Menu>
    </Col>
  );
};

export default SideMenu;
