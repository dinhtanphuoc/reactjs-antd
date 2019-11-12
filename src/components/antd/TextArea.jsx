import React from 'react';
import { Input } from 'antd'; 

const { TextArea } = Input;

const textArea = (props) => {
  return (
    <TextArea {...props} />
  );
};

export default textArea;