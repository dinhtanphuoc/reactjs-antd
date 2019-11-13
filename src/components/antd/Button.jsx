import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonAntd } from 'antd';

export const Button = (props) => {
  return (
    <ButtonAntd {...props}>
      { props.children }
    </ButtonAntd>
  );
};

Button.propTypes  = {
  children: PropTypes.node,
  style: PropTypes.object
};

Button.defaultProps = {
  style: {
    width: '100%'
  },
  children: 'Button'
};