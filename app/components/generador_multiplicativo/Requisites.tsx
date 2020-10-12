import React from 'react';
import { Tag, Tooltip } from 'antd';

type Props = { tests: Array<boolean> };

const Requisites = ({ tests }: Props) => {
  const getTag = (text: string, message: string, isSuccessful: boolean) => {
    const color = isSuccessful ? 'success' : 'error';
    return (
      <Tooltip title={message}>
        <Tag color={color}>{text}</Tag>
      </Tooltip>
    );
  };

  return (
    <>
      {getTag('Requisito 1', 'x0, a, m >= 0', tests[0])}
      {getTag('Requisito 2', 'm > a, m > x0', tests[1])}
    </>
  );
};

export default Requisites;
