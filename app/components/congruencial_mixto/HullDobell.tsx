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
      {getTag(
        'I',
        'c (incremento) y m (modulo) son primos relativos',
        tests[0]
      )}
      {getTag(
        'II',
        'Si q es un numero primo que divide a m, entonces q divide (a-1)',
        tests[1]
      )}
      {getTag('III', 'Si 4 divide a m, entonces 4 divide (a-1)', tests[2])}
    </>
  );
};

export default HullDobell;
