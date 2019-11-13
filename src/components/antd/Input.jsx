import React from 'react';
import { Input as IndexAntd } from 'antd';

const { TextArea } = IndexAntd;

export const Input = (props) => {
  return (
    <IndexAntd {...props} />
  );
};

export const InputArea = (props) => {
  return (
    <TextArea {...props} />
  );
};