import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const useTextArea = (props) => {
  return (
    <TextArea {...props} />
  );
};

export default useTextArea;
