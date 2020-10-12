import React from 'react';
import { List } from 'antd';
import { v4 as uuidv4 } from 'uuid';

type Props = { numbers: Array<number> };

const NumberList = ({ numbers }: Props) => {
  return (
    <List
      itemLayout="horizontal"
      bordered
      dataSource={numbers}
      renderItem={(number, i) => {
        return (
          <List.Item key={uuidv4()}>
            <h2>
              R<sub>{i}</sub>
            </h2>
            <h2>{number}</h2>
          </List.Item>
        );
      }}
    />
  );
};

export default NumberList;
