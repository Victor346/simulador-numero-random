import React from 'react';
import { List } from 'antd';

type Props = { numbers: Array<number> };

const NumberList = ({ numbers }: Props) => {
  return (
    <List
      itemLayout="horizontal"
      bordered
      dataSource={numbers}
      renderItem={(number) => {
        return (
          <List.Item key={number}>
            <h2>{numbers.indexOf(number)}</h2>
            <h2>{number}</h2>
          </List.Item>
        );
      }}
    />
  );
};

export default NumberList;
