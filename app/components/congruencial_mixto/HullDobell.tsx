import React from 'react';
import { Tag, Tooltip } from 'antd';

type Props = { tests: Array<boolean> };

const HullDobell = ({ tests }: Props) => {
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
      {getTag('I', 'Mensaje Hull-Dobell I', tests[0])}
      {getTag('II', 'Mensaje Hull-Dobell II', tests[1])}
      {getTag('III', 'Mensaje Hull-Dobell III', tests[2])}
    </>
  );
};

export default HullDobell;
