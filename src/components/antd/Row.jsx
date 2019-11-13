import React from 'react';
import PropTypes from 'prop-types';
import { Row as RowAntd } from 'antd';

export const Row = (props) => {
  return (
    <RowAntd {...props}>
      { props.children }
    </RowAntd>
  );
};

Row.propTypes  = {
  children: PropTypes.node
};