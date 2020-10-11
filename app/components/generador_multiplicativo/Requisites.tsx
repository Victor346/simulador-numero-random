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
      {getTag('Requisito 1', 'Requisito 1 Mensaje', tests[0])}
      {getTag('Requisito 2', 'Requisito 2 Mensaje', tests[1])}
    </>
  );
};

export default Requisites;
