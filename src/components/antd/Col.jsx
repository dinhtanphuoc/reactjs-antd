import React from 'react';
import PropTypes from 'prop-types';
import { Col as ColAntd } from 'antd';

export const Col = (props) => {
  return (
    <ColAntd {...props}>
      { props.children }
    </ColAntd>
  );
};

Col.propTypes  = {
  children: PropTypes.node
};