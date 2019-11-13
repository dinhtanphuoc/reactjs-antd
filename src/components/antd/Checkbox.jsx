import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as CheckboxAntd } from 'antd';

export const Checkbox = (props) => {
  return (
    <CheckboxAntd {...props}>
      { props.children }
    </CheckboxAntd>
  );
};

Checkbox.propTypes  = {
  children: PropTypes.node
};