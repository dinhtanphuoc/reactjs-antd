import React from 'react';
import PropTypes from 'prop-types';
import { Radio as RadioAntd } from 'antd';

export const Radio = (props) => {
  return (
    <RadioAntd {...props}>
      { props.children }
    </RadioAntd>
  );
};

Radio.propTypes  = {
  children: PropTypes.node
};

export const RadioGroup = (props) => {
  return (
    <RadioAntd.Group {...props}>
      { props.children }
    </RadioAntd.Group>
  );
};

RadioGroup.propTypes  = {
  children: PropTypes.node
};
